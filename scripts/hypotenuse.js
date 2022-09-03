const triangleSides = document.querySelectorAll(".triangle-sides");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-div");

function calculateHypo(a, b){
    const hypo = Math.sqrt((a*a)+ (b*b));
    return hypo;
}

function valueOfHypo(){
    const hypo = calculateHypo(Number(triangleSides[0].value), Number(triangleSides[1].value));

    const newHypo = hypo.toFixed(2);

    outputDiv.innerText = "The value of Hypotenuse is " + newHypo + " units";
}

submitBtn.addEventListener("click", valueOfHypo);

