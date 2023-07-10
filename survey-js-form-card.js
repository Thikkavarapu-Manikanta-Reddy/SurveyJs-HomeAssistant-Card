import {
  LitElement,
  html,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";
import "https://unpkg.com/nouislider/dist/nouislider.min.js";
import "https://unpkg.com/jquery";

class SurveyCard extends LitElement {
  static get properties() {
    return {
      config: { type: Object },
    };
  }

  setConfig(config) {
    console.log("Config", this, config);
    this.config = config;
    this.survey = null;
    this.survey_timer = null;
    this.survey_state = "";
    this.customCss = "";
    this.noUiSliderStyles = "";
    this.globalCss = "";
    this.getCustomCss();

    setTimeout(() => {
      if (
        this._hass?.states["input_select.survey_lifecycle"]?.state === "sent" ||
        this._hass?.states["input_select.survey_lifecycle"]?.state === "started"
      ) {
        this.startTimer(
          this._hass.states["input_select.survey_lifecycle"].state
        );
      } else {
        clearInterval(this.survey_timer);
        console.log("Interval Cleared");
      }
      console.log(this.survey_timer);
    }, 500);
  }

  set hass(hass) {
    console.log("Hass", hass);
    this._hass = hass;
  }

  firstUpdated() {
    console.log("Hi", this.config);
    var thisNode = this;
    $(document).ready(function () {
      console.log("Jquery working");
      $.getScript("https://unpkg.com/survey-jquery/survey.jquery.min.js").done(
        (script, textStatus) => {
          console.log(thisNode);
          thisNode.constructSurveyUI();
        }
      );
      $.getScript(
        "https://unpkg.com/surveyjs-widgets@1.9.90/surveyjs-widgets.min.js"
      ).done((script, textStatus) => {
        console.log("Survey JS Widgets loaded");
      });
      $.getScript(
        "https://cdnjs.cloudflare.com/ajax/libs/showdown/1.6.4/showdown.min.js"
      ).done((script, textStatus) => {
        console.log("Showdown loaded");
      });
    });
  }

  async getCustomCss() {
    const customCss = this.config?.customCss;
    const noUiSliderStyles = this.config?.noUiSliderStyles;
    const globalCss = this.config?.globalCss;
    if (customCss && noUiSliderStyles && globalCss) {
      this.customCss = await import(this.config?.customCss);
      this.noUiSliderStyles = await import(this.config?.noUiSliderStyles);
      this.globalCss = await import(this.config?.globalCss);

      console.log(
        this.customCss?.default,
        this.noUiSliderStyles?.default,
        this.globalCss?.default
      );

      let prependStyle = this.shadowRoot.createElement("style");

      let appendStyle = this.shadowRoot.createElement("style");

      prependStyle.innerHTML = this.customCss?.default;

      this.shadowRoot.prepend(prependStyle);

      appendStyle.innerHTML =
        this.noUiSliderStyles?.default + " " + this.globalCss?.default;

      this.shadowRoot.append(appendStyle);
    }
  }

  startTimer(state) {
    var countDownDate;
    if (state == "sent") {
      countDownDate = new Date();
      countDownDate.setMinutes(
        countDownDate.getMinutes() + this.config.expiry_time_min
      );
      // this._hass.callService("input_select.select_option", "started", {
      //   entity_id: "input_select.survey_lifecycle",
      // });

      this._hass.callApi("POST", "states/input_select.survey_lifecycle", {
        state: "started",
      });

      setTimeout(() => {
        this._hass.callApi("POST", "states/" + this.config.entity, {
          state: "started",
          attributes: {
            start_timer_date: countDownDate.getTime(),
          },
        });
      }, 500);
    } else if (state == "started") {
      this._hass.callApi("GET", "states/" + this.config.entity).then((data) => {
        console.log("Get Entity Data", data);
        countDownDate = new Date(data.attributes.start_timer_date);
      });
    }

    var thisHassNode = this;

    this.survey_timer = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(thisHassNode.survey_timer);
        thisHassNode.survey_state = "received";
        thisHassNode.survey.doComplete();
      }
    }, 1000);
  }

  constructSurveyUI() {
    var thisNode = this;
    window["surveyjs-widgets"].nouislider(Survey);
    console.log("Script accesed", Survey, "Config", this.config, noUiSlider);

    this.survey = new Survey.Model(this.config.surveyjs_json);
    console.log(
      "Survey Model",
      this.survey,
      this.survey.visiblePages,
      this.survey.currentPageNo
    );

    console.log(this.config.surveyjs_json);

    this.survey.onUpdateQuestionCssClasses.add(function (_, options) {
      thisNode.pageCssLogic(options);
    });

    this.survey_state = "received";

    this.survey.onComplete.add((sender) => {
      const results = {
        user_name: this._hass.user.name,
        survey_trigger: "Temp Change",
        survey_response: sender.data,
      };

      this._hass
        .callApi("POST", "states/" + this.config.entity, {
          state: this.survey_state,
          attributes: results,
        })
        .then((data) => {
          console.log("Post Entity Data", data);
          clearInterval(this.survey_timer);
          let thank_you_element =
            this.shadowRoot.querySelector(".sd-completedpage");
          thank_you_element.innerText =
            "Thank you for your response! Click here to return home.";
          thank_you_element.style.cursor = "pointer";
          thank_you_element.onclick = function () {
            window.location.href = "/";
          };
          setTimeout(() => {
            // this._hass.callService("input_select.select_option", "idle", {
            //   entity_id: "input_select.survey_lifecycle",
            // });
            // this._hass.callApi("POST", "states/input_select.survey_lifecycle", {
            //   state: "idle",
            // });
            window.location.href = "/";
          }, 2000);
        });
    });

    $(this.shadowRoot.getElementById("surveyElement")).Survey({
      model: this.survey,
    });
  }

  pageCssLogic(options) {
    console.log(options, "Custom CSS", options.question.getType());

    let elementsData;
    if (this.config.surveyjs_json?.elements) {
      console.log("Only one element");
      elementsData = this.config.surveyjs_json?.elements;
    } else {
      elementsData =
        this.config.surveyjs_json?.pages[this.survey?.currentPageNo]?.elements;
    }
    for (let ele of elementsData) {
      if (
        options.question.getType() == ele.type &&
        options.question.fullTitle == ele.title &&
        ele?.customCssClassDetails
      ) {
        // this.survey.css = ele?.customCssClassDetails;

        const classes = options.cssClasses;
        const classKey = Object.keys(
          Object.values(ele?.customCssClassDetails)[0]
        );
        const classValue = Object.values(
          Object.values(ele?.customCssClassDetails)[0]
        );

        this.cssClassUpdation(classes, classKey, classValue, ele.type);

        // classes[classKey] = classValue;

        console.log(
          "Available",
          ele.type,
          this.survey.css,
          ele?.customCssClassDetails
        );
        break;
      }
    }
  }

  cssClassUpdation(classes, classKey, classValue, questionType) {
    console.log(classes, classKey, classValue, questionType, "Classes");
    classKey.forEach((v, i) => {
      classes[v] = classValue[i];
    });

    setTimeout(() => {
      var converter = new showdown.Converter();
      this.survey.onTextMarkdown.add(function (survey, options) {
        //convert the markdown text to html

        console.log(options, options.html);

        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
      });
    }, 1);
  }

  render() {
    return html`
      <link
        rel="stylesheet"
        href="https://unpkg.com/survey-jquery@1.9.84/defaultV2.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/nouislider/dist/nouislider.min.css"
      />
      <div id="surveyElement"></div>
    `;
  }
}

customElements.define("survey-card", SurveyCard);