const customCss = `.rating-item {
  position: relative;
  background: var(--background, #fff);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
  border-radius: calc(12.5 * var(--base-unit, 8px));
  white-space: nowrap;
  padding: calc(0.5 * var(--base-unit, 8px)) calc(2.5 * var(--base-unit, 8px));
  height: calc(6 * var(--base-unit, 8px));
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-width: calc(6 * var(--base-unit, 8px));
  text-align: center;
  border: 2px solid var(--background, #fff);
  color: blue;
  fill: var(--sjs-general-forecolor, var(--foreground, #161616));
  font-size: calc(2 * var(--base-unit, 8px));
  width: 90%;
  margin: auto;
}
.boolean {
  display: flex;
  width: max-content;
  position: relative;
  padding: calc(0.5 * var(--base-unit, 8px));
  background: lightgreen;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px inset;
  border-radius: calc(12.5 * var(--base-unit, 8px));
}
.element-with-frame {
  border-radius: calc(0.5 * var(--base-unit, 8px));
  box-sizing: border-box;
  background: var(--sjs-question-background, var(--background, #fff));
  box-shadow: 0px 1px 2px rgba(0,0,0,.15);
  padding: 10px 35px 35px 35px !important;
}
// .circle_icon::before {
//     margin: 5px;
//     content: url("data:image/svg+xml,%3Csvg fill='%23000000' height='25px' width='25px' font-size='90px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cg%3E%3Cg%3E%3Cpath d='M437.02,74.982C388.667,26.628,324.38,0,256,0S123.333,26.628,74.98,74.982C26.628,123.333,0,187.619,0,256 s26.628,132.667,74.98,181.019C123.333,485.372,187.62,512,256,512s132.667-26.628,181.02-74.981 C485.372,388.667,512,324.381,512,256S485.372,123.333,437.02,74.982z M256,491.602c-129.911,0-235.602-105.69-235.602-235.602 S126.089,20.398,256,20.398S491.602,126.089,491.602,256S385.911,491.602,256,491.602z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,124.43c-72.548,0-131.57,59.022-131.57,131.57S183.452,387.57,256,387.57S387.57,328.548,387.57,256 S328.548,124.43,256,124.43z M256,367.171c-61.3,0-111.171-49.871-111.171-111.171S194.7,144.829,256,144.829 S367.171,194.7,367.171,256S317.3,367.171,256,367.171z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,207.044c-26.994,0-48.956,21.961-48.956,48.956s21.962,48.956,48.956,48.956c26.994,0,48.956-21.961,48.956-48.956 C304.956,229.005,282.994,207.044,256,207.044z M256,284.558c-15.747,0-28.558-12.811-28.558-28.558 c0-15.747,12.811-28.558,28.558-28.558c15.747,0,28.558,12.811,28.558,28.558C284.558,271.747,271.747,284.558,256,284.558z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M313.77,45.467c-5.431-1.489-11.044,1.71-12.531,7.143c-1.488,5.432,1.71,11.043,7.144,12.53 C394.04,88.593,453.865,167.077,453.865,256c0,5.632,4.566,10.199,10.199,10.199c5.633,0,10.199-4.567,10.199-10.199 C474.263,157.914,408.266,71.339,313.77,45.467z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M270.968,38.242c-4.949-0.334-9.985-0.505-14.968-0.505c-5.633,0-10.199,4.567-10.199,10.199 c0,5.632,4.566,10.199,10.199,10.199c4.525,0,9.098,0.154,13.588,0.46c0.236,0.015,0.468,0.022,0.701,0.022 c5.319,0,9.8-4.125,10.166-9.511C280.835,43.488,276.588,38.623,270.968,38.242z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
//   }
// .ball_icon::before {
//     margin: 5px;
//     content: url("data:image/svg+xml,%3Csvg fill='%23000000' height='25px' width='25px' font-size='90px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M15,16a3,3,0,1,1-3-3A3,3,0,0,1,15,16ZM16,5v5.262a7,7,0,1,1-8,0V5a4,4,0,0,1,8,0Zm-1.5,6.675a1,1,0,0,1-.5-.865V5a2,2,0,0,0-4,0v5.81a1,1,0,0,1-.5.865,5,5,0,1,0,5,0Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
//   }
//   .square_icon::before {
//     margin: 5px;
//     content: url("data:image/svg+xml,%3Csvg height='25px' width='25px' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 51.76 51.76' xml:space='preserve' fill='%23000000'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cg%3E%3Cg%3E%3Ccircle style='fill:%23010002;' cx='15.39' cy='4.82' r='4.82'%3E%3C/circle%3E%3Cpath style='fill:%23010002;' d='M45.689,46.201c-5.744-8.573-12.312-19.74-13.416-21.625c-0.1-0.342-0.232-0.689-0.414-1.038 c-1.312-2.557-2.684-5.085-4.084-7.596c1.484,0.116,2.972,0.231,4.455,0.346c1.02,2.01,2.035,4.021,3.053,6.03 c1.639,3.237,6.49,0.389,4.855-2.839c-1.312-2.593-2.867-8.425-6.254-8.688c-3.604-0.28-7.207-0.56-10.81-0.839 c-0.088-0.007-0.163,0.005-0.247,0.005c-2.724-0.729-5.917,1.193-6.495,3.97c-1.842,3.989-4.487,7.104-8.925,8.404 c-3.474,1.016-1.994,6.443,1.495,5.423c4.387-1.284,7.538-3.798,9.927-7.107c1.447,2.58,2.86,5.176,4.214,7.808 c-2.977,2.053-5.578,4.536-7.857,7.401c-0.636,0.799-0.745,1.621-0.531,2.344c-0.008,0.27,0.009,0.55,0.086,0.854 c0.877,3.472,1.753,6.938,2.631,10.406c0.931,3.696,6.782,2.646,5.843-1.074c-0.835-3.305-1.671-6.61-2.506-9.917 c2.094-2.469,4.563-4.617,7.384-6.221c0.664-0.378,1.082-0.899,1.314-1.473c3.859,5.914,7.719,14.096,11.576,19.055 C43.337,52.856,48.046,49.233,45.689,46.201z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
//   }
`;

export default customCss;