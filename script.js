"use strict";

const btn = document.querySelectorAll(".evaluation");
const submit = document.querySelector(".main--btn");
const request = document.querySelector(".request");
const result = document.querySelector(".result");
const score = document.querySelector(".score");

let evalualtionScore;

btn.forEach((button) => {
  button.addEventListener("click", function () {
    remove();
    button.classList.add("selected");
    evalualtionScore = Number(button.innerHTML);
    submitBtn();
    score.textContent = ` You selected ${evalualtionScore} out of 5 `;
  });
});

function remove() {
  btn.forEach((button) => {
    button.classList.remove("selected");
  });
}

function submitBtn() {
  submit.addEventListener("click", function () {
    request.classList.toggle("hide");
    result.classList.toggle("hide");
  });
}

