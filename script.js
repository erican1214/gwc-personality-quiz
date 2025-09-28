/*Add your JavaScript here*/
var warmScore = 0;
var coolScore = 0;
var qCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");
var q1a6 = document.getElementById("q1a6");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
var q2a6 = document.getElementById("q2a6");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");
var q3a6 = document.getElementById("q3a6");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");
var q4a6 = document.getElementById("q4a6");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");
var q5a6 = document.getElementById("q5a6");

var result = document.getElementById("result");

// I had 2 restart buttons, so I had to make a list
const restart = document.getElementsByClassName("restart");

// Intialized arrays to disable choices more efficiently
const choices1 = [q1a1, q1a2, q1a3, q1a4, q1a5, q1a6];
const choices2 = [q2a1, q2a2, q2a3, q2a4, q2a5, q2a6];
const choices3 = [q3a1, q3a2, q3a3, q3a4, q3a5, q3a6];
const choices4 = [q4a1, q4a2, q4a3, q4a4, q4a5, q4a6];
const choices5 = [q5a1, q5a2, q5a3, q5a4, q5a5, q5a6];
const allChoices = [choices1, choices2, choices3, choices4, choices5];
const warmChoices = [q1a1, q1a3, q1a6, q2a1, q2a3, q2a5, q3a1, q3a4, q3a6, q4a1, q4a2, q4a5, q5a1, q5a3, q5a6];

// Variables for the method addEvents();
var choice = q1a1;
var count = 0;

function warm() {
  warmScore += 1;
  qCount += 1;
  console.log("Warm"); 
}

function cool() {
  coolScore += 1;
  qCount += 1;
  console.log("Cool");
}

// Uses array to disable choices
function disableChoices(list) {
  for (var i = 0; i < list.length; i++) {
    list[i].disabled = true;
  }
}

// I used a method and loop to add event listeners to each button.
function addEvents() {
  for (var i = 0; i < allChoices.length; i++) {
    for (var j = 0; j < allChoices[0].length; j++) {
      count = 0;
      choice = allChoices[i][j];
      console.log(choice);
      for (var k = 0; k < warmChoices.length; k++) {
        if (warmChoices[k] == choice) {
          choice.addEventListener("click", warm);
        }
        else {
          count++;
        }
      }
      if (count == warmChoices.length) {
        choice.addEventListener("click", cool);
      }
      
      if (i == 0) {
        choice.addEventListener("click", (event) => {
          disableChoices(choices1);
        })
      }
      else if (i == 1) {
        choice.addEventListener("click", (event) => {
          disableChoices(choices2);
        })
      }
      else if (i == 2) {
        choice.addEventListener("click", (event) => {
          disableChoices(choices3);
        })
      }
      else if (i == 3) {
        choice.addEventListener("click", (event) => {
          disableChoices(choices4);
        })
      }
      else if (i == 4) {
        choice.addEventListener("click", (event) => {
          disableChoices(choices5);
        })
      }
    }
  }
}

// Method is called
addEvents();

function updateResult() {
  if (qCount < 5) {
    result.innerHTML = "You didn't finish your quiz!";
  }
  else {
    if (warmScore > coolScore) {
    result.innerHTML = "Your favorite season is Spring/Summer! 🌸🌻";
    }
    else {
      result.innerHTML = "Your favorite season is Fall/Winter! 🍂❄️";
    }
  }
}

function restartQuiz() {
  qCount = 0;
  warmScore = 0;
  coolScore = 0;
  result.innerHTML = "Your favorite season is...";

  for (var i = 0; i < allChoices.length; i++) {
    for (var j = 0; j < allChoices[i].length; j++) {
      allChoices[i][j].disabled = false;
    }
  }
}

display.addEventListener("click", updateResult);

for (var i = 0; i < restart.length; i++) {
  restart[i].addEventListener("click", restartQuiz);
}