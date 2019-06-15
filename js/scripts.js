//back-end
const outputMessages = ['"Beep!"', '"Boop!"', '"I\'m sorry, Dave. I\'m afraid I can\'t do that."'];
const errorMessage = "Error: Enter a single number value!";
var outputArray = [];

function checkData() {
  var string = $("#number").val();
  if(isNaN(string) || ! /\S/.test(string)) {
    return $(".error").text(errorMessage);
  } else {
    $(".error").text("");
    return string;
  }
};

function countInput() {
  var userInput = parseInt(checkData());
  for(var index = userInput; index >= 0; index--) {
    debugger
    checkPriority(index);
  }
}

function checkPriority(currentNum) {
  var priority = 0;
  currentNum = currentNum.split("");

  for(number = 0; number < currentNum.length; number++){
    if(priority < currentNum[number] && currentNum[number] <= 3) {
      priority = currentNum[number];
    }
  }
  return outputMessages[priority - 1];
}

function beepBoop() {
  //check if input is between 1-3 and attach corresponding message
  if (checkPriority()) {
    return checkPriority();
  } else {
    //else return the orginal number
    return checkData();
  }
};

//front-end
$(document).ready(function(){
  $("#boop-form").submit(function(event) {
    event.preventDefault();
    $(".output").hide();
    //outputArray.push(" " + beepBoop())
    countInput();
    $(".output").text(outputArray);
    $(".output").fadeIn(1000);
  });
});
