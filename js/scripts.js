//back-end logic
const outputMessages = ['"Beep!"', '"Boop!"', '"I\'m sorry, Dave. I\'m afraid I can\'t do that."'];

function checkData() {
  var string = $("#number").val();
  if(isNaN(string) || ! /\S/.test(string)) {
    return $(".error").text("Error: Enter a single number!");
  } else {
    $(".error").text("");
    return string;
  }
};

function checkPriority() {
  var priority = 0;
  var userInput = checkData().split("");

  for(number = 0; number < userInput.length; number++){
    if(priority < userInput[number] && userInput[number] <= 3) {
      priority = userInput[number];
    }
  }
  return outputMessages[priority - 1];
}

function beepBoop() {
  if (checkPriority()) {
    return checkPriority();
  } else {
    return checkData();
  }
};

//front-end logic
$(document).ready(function(){
  $("#boop-form").submit(function(event) {
    event.preventDefault();
    $(".output").append(beepBoop() + ", ");
  });
});
