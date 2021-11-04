"use strict";
let randNumber = Math.trunc(Math.random() * 20 + 1);
  let inpNumber;  
  let startScore =  20;
  let highScoreNum = 0;

  document.querySelector(".check-btn").addEventListener("click", function () {
    inpNumber = Number(document.querySelector(".inpnum").value);
    if (inpNumber === randNumber) {
      document.querySelector("body").style.backgroundColor= "green";
      document.querySelector(".text-1").textContent = "😇 You Win!";
      // document.querySelector(".white-num-block").textContent = randNumber;
      if (startScore > highScoreNum){
        highScoreNum = startScore;
        document.querySelector(".highscore").textContent = highScoreNum;
      }
  } else if (inpNumber > randNumber) {

    if (startScore > 1){
      document.querySelector(".text-1").textContent = "📈 Too  High!";
      startScore--; 
      document.querySelector(".score").textContent = startScore;
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".text-1").textContent = "🙃 You Lost The Game!"
      document.querySelector(".score").textContent = 0;
    }
  } else if (inpNumber < randNumber) {
    if(startScore>1) {
      document.querySelector(".text-1").textContent = "📉 Too   Low!";
      startScore--;
      document.querySelector(".score").textContent = startScore;
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".text-1").textContent = "🙃 You Lost The Game!"
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again-btn").addEventListener("click", function () { 
  randNumber = Math.trunc(Math.random() * 20 + 1)
  document.querySelector("body").style.backgroundColor= "rgb(85, 82, 82)";
  document.querySelector(".inpnum").value = "";
  document.querySelector(".text-1").textContent = "START GUESSING";
  startScore = 20;
  document.querySelector(".score").textContent = startScore;
})
