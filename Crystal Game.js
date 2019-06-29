//1-we need to count each click on red btn
$(document).ready(function(){
  var redClicked = 10;
  var blueClicked = 5;
  var yellowClicked = 6;
  var greenClicked = 7;
  var yourScore = 0;
  var randomNumber = 0;
  PCPickRandomNumber();

  function PCPickRandomNumber(){
    randomNumber =Math.floor(Math.random() * (100 - 1) + 1)
    console.log(randomNumber)
    $("#targetScore").html(randomNumber)
    return randomNumber;
  }

// create a function to display total value of colored buttoms clicked


  $("#red").on("click", function()
  {
    yourScore = yourScore + redClicked
    $("#yourScore").html(yourScore)
    youLost()
    // redClicked++ 
    // console.log(redClicked);
  });
  $("#blue").on("click", function()
  {
    yourScore = yourScore + blueClicked
    $("#yourScore").html(yourScore)
    youLost()
    // blueClicked++
    // console.log(blueClicked);
    
  });
  $("#yellow").on("click", function()
  {
    yourScore = yourScore + yellowClicked
    $("#yourScore").html(yourScore)
    youLost()
    // yellowClicked++
    // console.log(yellowClicked);
    
  });
  $("#green").on("click", function()
  {
    yourScore = yourScore + greenClicked
    $("#yourScore").html(yourScore)
    youLost()
    // greenClicked++
    // console.log("you clicked Green "+greenClicked);
    
  });

  function youLost(){
    if(yourScore > randomNumber){
      alert("you lost~")
    }
  }
  

});