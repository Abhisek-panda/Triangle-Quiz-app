const quizForm = document.querySelector(".quizform");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output");

const quizAnswers = ["a scalene triangle", "3"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === quizAnswers[index]) {
            score = score + 1;
        } index = index + 1;
    }
    outputDiv.innerText = "Your Score is " + score;
};

submitBtn.addEventListener("click", calculateScore)



