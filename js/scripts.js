//back-end
const outputMessages = ['"Beep!"', '"Boop!"', '"I\'m sorry, Dave. I\'m afraid I can\'t do that."'];
const errorMessage = "Error: Enter a single number value!";
var outputArray = [];

function outputData() {
  $(".output").hide();
  $(".output").text(outputArray);
  $(".output").fadeIn(1000);
}

function checkData(string) {
  string = parseInt(string);
  if(isNaN(string)) {
    $(".error").text(errorMessage);
  } else {
    $(".error").text("");
    return string;
  }
};

function checkPriority(currentNum) {
  var priority = 0;
  currentNum = currentNum.toString();
  currentNum = currentNum.split("")
  for(number = 0; number < currentNum.length; number++){
    if(priority < currentNum[number] && currentNum[number] <= 3) {
      priority = currentNum[number];
    }
  }
  return outputMessages[priority - 1];
};

function beepBoop(input) {
  outputArray = [];
  input = parseInt(checkData(input));
  for(var index = 0; index <= input; index++) {
    //check if input is between 1-3 and attach corresponding message

    if (checkPriority(index)) {
      outputArray.push(checkPriority(index));
    } else {
      //else return the orginal number
      outputArray.push(checkData(index));
    }
  }
};

//front-end
$(document).ready(function(){
  $("#boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#number").val();
    beepBoop(userInput);
    outputData();
  });
});
