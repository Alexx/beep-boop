//back-end logic
const outputMessages = ["Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that."]

function gatherInputData() {
  return $("#number").val();
};

function beepBoop() {
  var output;
  var userInput = gatherInputData().split("");
  userInput.forEach(function(number) {
    if(number === 3) {
      return output;
    }
  });
};

//front-end logic
$(document).ready(function(){

  $("#boop-form").submit(function(event) {
    event.preventDefault();
    beepBoop();
  });

});
