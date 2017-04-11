// Player must click x-player or o-player button to start game
  // if x-player is clicked show img x-front as visible
  // else o-player is clicked show img o-front as visible

// x or o which is the current player? This will decide whether to display a x or o on first click
var currentPlayer = ""; // records currentPlayer which is currently undefined
var xPlay = "x"; // to remove ""
var oPlay = "o";
//
// $("button#x-player").one('click', function (){
//   // alert("x"); // Test something happens when button is clicked
//   currentPlayer = xPlay;
// });
//
// $("button#o-player").one('click', function (){
//   // alert("o"); // Test something happens when button is clicked
//   currentPlayer = oPlay;
// });

////// ABOVE CAUSES GLITCH: can click once x-player and then o-player once at anytime during a game which disrupts the pattern and starts it at o-player when clicked //////

if (true) { /// glitch here somewhere!! 
  $("button#x-player").one('click', function (){
    $( "button#x-player" ).addClass("active");
    $( "button#o-player" ).removeClass("active");
    currentPlayer = xPlay;
  });
} else {
  $("button#o-player").one('click', function (){
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    currentPlayer = oPlay;
  });
}

////// ABOVE CAUSES GLITCH: can only start with x-player and never o-player //////


////// CONSIDER LATER: turn to a loop for less code //////
$("div.box1").one('click', function (){ //.one("click") -- allows the div to be clicked in once only instead of on("click")
  if (currentPlayer === xPlay) {
    $( "div.box1 img.x-turn" ).show(); // shows currentPlayer img, <img style="display: none">
    currentPlayer = oPlay; // sets the value for the next player
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
  } else if (currentPlayer === oPlay) {
    $( "div.box1 img.o-turn" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
  } else {
    alert("Pick Player to begin!");
  }
});

$("div.box2").one('click', function (){
  if (currentPlayer === xPlay) {
    $( "div.box2 img.x-turn" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
  } else if (currentPlayer === oPlay) {
    $( "div.box2 img.o-turn" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
  } else {
    alert("Pick Player to begin!");
  }
});

$("div.box3").one('click', function (){
  if (currentPlayer === xPlay) {
    $( "div.box3 img.x-turn" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
  } else if (currentPlayer === oPlay) {
    $( "div.box3 img.o-turn" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
  } else {
    alert("Pick Player to begin!");
  }
});

$("div.box4").one('click', function (){
  if (currentPlayer === xPlay) {
    $( "div.box4 img.x-turn" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
  } else if (currentPlayer === oPlay) {
    $( "div.box4 img.o-turn" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
  } else {
    alert("Pick Player to begin!");
  }
});

$("div.box5").one('click', function (){
  if (currentPlayer === xPlay) {
    $( "div.box5 img.x-turn" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
  } else if (currentPlayer === oPlay) {
    $( "div.box5 img.o-turn" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
  } else {
    alert("Pick Player to begin!");
  }
});

$("div.box6").one('click', function (){
  if (currentPlayer === xPlay) {
    $( "div.box6 img.x-turn" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
  } else if (currentPlayer === oPlay) {
    $( "div.box6 img.o-turn" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
  } else {
    alert("Pick Player to begin!");
  }
});

$("div.box7").one('click', function (){
  if (currentPlayer === xPlay) {
    $( "div.box7 img.x-turn" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
  } else if (currentPlayer === oPlay) {
    $( "div.box7 img.o-turn" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
  } else {
    alert("Pick Player to begin!");
  }
});

$("div.box8").one('click', function (){
  if (currentPlayer === xPlay) {
    $( "div.box8 img.x-turn" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
  } else if (currentPlayer === oPlay) {
    $( "div.box8 img.o-turn" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
  } else {
    alert("Pick Player to begin!");
  }
});

$("div.box9").one('click', function (){
  if (currentPlayer === xPlay) {
    $( "div.box9 img.x-turn" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
  } else if (currentPlayer === oPlay) {
    $( "div.box9 img.o-turn" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
  } else {
    alert("Pick Player to begin!");
  }
});
