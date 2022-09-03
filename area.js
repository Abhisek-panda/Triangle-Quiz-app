const triangleBase = document.querySelector("#triangle-base");
const triangleHeight = document.querySelector("#triangle-height");

const submitBtn = document.querySelector("#submit-btn");
const areaOutput = document.querySelector("#area-output");

function findArea(a, b){
    const triangleArea = (a*b)/2;
    return triangleArea;  
}

function showingArea(){
    const baseValue = Number(triangleBase.value);
    const heightValue = Number(triangleHeight.value);
   const areaOfTriangle =findArea(baseValue, heightValue);

   areaOutput.innerText = areaOfTriangle;

}

submitBtn.addEventListener("click", showingArea)


