"use strict";
let randNumber = document.querySelector(".white-num-block").textContent =
  Math.trunc(Math.random() * 20 + 1);
  let inpNumber;  
  let startScore =  20;

  document.querySelector(".check-btn").addEventListener("click", function () {
    inpNumber = Number(document.querySelector(".inpnum").value);
    if (inpNumber === randNumber) {
      document.querySelector("body").style.backgroundColor= "green";
      document.querySelector(".text-1").textContent = "😇 You Win!";
  } else if (inpNumber > randNumber) {
    document.querySelector(".text-1").textContent = "📈 Too High!";
    startScore--; 
    document.querySelector(".score").textContent = startScore;
    if(startScore < 1){
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".text-1").textContent = "🙃 You Lose!"
    }
  } else if (inpNumber < randNumber) {
    document.querySelector(".text-1").textContent = "📉 Too Low!";
    startScore--;
    document.querySelector(".score").textContent = startScore;
    if(startScore < 1){
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".text-1").textContent = "🙃 You Lose!"
    }
  }
});

document.querySelector(".again-btn").addEventListener("click", function () { 
  document.querySelector(".white-num-block").textContent =
  Math.trunc(Math.random() * 20 + 1)
  document.querySelector("body").style.backgroundColor= "rgb(85, 82, 82)";
  document.querySelector(".inpnum").value = "";
  document.querySelector(".text-1").textContent = "START GUESSING";
  startScore = 20;
  document.querySelector(".score").textContent = startScore;
})
