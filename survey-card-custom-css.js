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
    color: var(--sjs-general-forecolor, var(--foreground, #161616));
    fill: var(--sjs-general-forecolor, var(--foreground, #161616));
    font-size: calc(2 * var(--base-unit, 8px));
    width: 70%;
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
    padding: 0px 10px 30px 10px !important;
}
.circle_icon::before {
    margin: 5px;
    content: url("data:image/svg+xml,%3Csvg fill='%23000000' height='25px' width='25px' font-size='90px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512 512' xml:space='preserve'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cg%3E%3Cg%3E%3Cpath d='M437.02,74.982C388.667,26.628,324.38,0,256,0S123.333,26.628,74.98,74.982C26.628,123.333,0,187.619,0,256 s26.628,132.667,74.98,181.019C123.333,485.372,187.62,512,256,512s132.667-26.628,181.02-74.981 C485.372,388.667,512,324.381,512,256S485.372,123.333,437.02,74.982z M256,491.602c-129.911,0-235.602-105.69-235.602-235.602 S126.089,20.398,256,20.398S491.602,126.089,491.602,256S385.911,491.602,256,491.602z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,124.43c-72.548,0-131.57,59.022-131.57,131.57S183.452,387.57,256,387.57S387.57,328.548,387.57,256 S328.548,124.43,256,124.43z M256,367.171c-61.3,0-111.171-49.871-111.171-111.171S194.7,144.829,256,144.829 S367.171,194.7,367.171,256S317.3,367.171,256,367.171z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,207.044c-26.994,0-48.956,21.961-48.956,48.956s21.962,48.956,48.956,48.956c26.994,0,48.956-21.961,48.956-48.956 C304.956,229.005,282.994,207.044,256,207.044z M256,284.558c-15.747,0-28.558-12.811-28.558-28.558 c0-15.747,12.811-28.558,28.558-28.558c15.747,0,28.558,12.811,28.558,28.558C284.558,271.747,271.747,284.558,256,284.558z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M313.77,45.467c-5.431-1.489-11.044,1.71-12.531,7.143c-1.488,5.432,1.71,11.043,7.144,12.53 C394.04,88.593,453.865,167.077,453.865,256c0,5.632,4.566,10.199,10.199,10.199c5.633,0,10.199-4.567,10.199-10.199 C474.263,157.914,408.266,71.339,313.77,45.467z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M270.968,38.242c-4.949-0.334-9.985-0.505-14.968-0.505c-5.633,0-10.199,4.567-10.199,10.199 c0,5.632,4.566,10.199,10.199,10.199c4.525,0,9.098,0.154,13.588,0.46c0.236,0.015,0.468,0.022,0.701,0.022 c5.319,0,9.8-4.125,10.166-9.511C280.835,43.488,276.588,38.623,270.968,38.242z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
.ball_icon::before {
    margin: 5px;
    content: url("data:image/svg+xml,%3Csvg fill='%23000000' height='25px' width='25px' font-size='90px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E%3Cpath d='M15,16a3,3,0,1,1-3-3A3,3,0,0,1,15,16ZM16,5v5.262a7,7,0,1,1-8,0V5a4,4,0,0,1,8,0Zm-1.5,6.675a1,1,0,0,1-.5-.865V5a2,2,0,0,0-4,0v5.81a1,1,0,0,1-.5.865,5,5,0,1,0,5,0Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")
  }
`;

export default customCss;
