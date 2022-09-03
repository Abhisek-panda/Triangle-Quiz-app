const angles = document.querySelectorAll(".input-angles");
const angleBtn = document.querySelector("#angle-btn");
const outputDiv = document.querySelector("#output-div");


function calculatingSumOfAngles(angle1, angle2, angle3){
    const totalAngles = angle1 + angle2 + angle3;
    return totalAngles;
}

function possibleTriangle(){
    const totalAngles = calculatingSumOfAngles(
        Number(angles[0].value),
        Number(angles[1].value),
        Number(angles[2].value)
    );
    if(totalAngles===180){
        outputDiv.innerText = " Yay! this is a Triangle. "
    }else {
        outputDiv.innerText = "Oops! This Triangle Can't be formed."
    }
}

angleBtn.addEventListener("click", possibleTriangle);