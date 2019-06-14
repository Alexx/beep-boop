//back-end logic
const outputMessages = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that."];

function gatherInputData() {
  return $("#number").val();
};

function checkPriority() {
  var priority = 0;
  var userInput = gatherInputData().split("");

  for(number = 0; number < userInput.length; number++){
    if(priority < userInput[number]) {
      priority = userInput[number];
    }
  }
  return outputMessages[priority - 1];
}

function beepBoop() {
  if (checkPriority()) {
    return checkPriority();
  } else {
    return gatherInputData();
  }
};

//front-end logic
$(document).ready(function(){

  $("#boop-form").submit(function(event) {
    event.preventDefault();
    $(".output").append(beepBoop());
  });

});
