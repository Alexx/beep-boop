$(document).ready(function(){
  $("#boop-form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#number").val());
    $(".output").append(userInput + " ");
  });
});
