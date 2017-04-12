// Player must click x-player or o-player button to start game
  // if x-player is clicked show img x-front as visible
  // else o-player is clicked show img o-front as visible

// x or o which is the current player? This will decide whether to display a x or o on first click
var currentPlayer = ""; // records currentPlayer which is currently undefined
var xPlay = "x"; // to remove ""
var oPlay = "o";
var gameStarted = false;



$("div.grid").on("click", function () { /// how do you know if the game has started? a player has to be selected followed by grid being clicked
  if (currentPlayer === xPlay || currentPlayer === oPlay) {
    gameStarted = true; // if this is satisified then true
  } else {
    alert("Pick Player to begin!");
  }
});

$("button#x-player").one('click', function (){
  if (gameStarted === false) { // stop a player being selected when game has started to prevent the interuption of pattern
    // alert("x"); // Test something happens when button is clicked
    $( "button#x-player" ).addClass("active");
    $( "button#o-player" ).removeClass("active");
    currentPlayer = xPlay;
  }
});

$("button#o-player").one('click', function (){
  if (gameStarted === false) {
  // alert("o"); // Test something happens when button is clicked
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    currentPlayer = oPlay;
  }
});

////// ABOVE CAUSES GLITCH: can click once x-player and then o-player once at anytime during a game which disrupts the pattern and starts it at o-player when clicked //////

// if (true) { /// glitch here somewhere!!
//   $("button#x-player").one('click', function (){
//     $( "button#x-player" ).addClass("active");
//     $( "button#o-player" ).removeClass("active");
//     currentPlayer = xPlay;
//   });
// } else {
//   $("button#o-player").one('click', function (){
//     $( "button#x-player" ).removeClass("active");
//     $( "button#o-player" ).addClass("active");
//     currentPlayer = oPlay;
//   });
// }

////// ABOVE CAUSES GLITCH: can only start with x-player and never o-player //////

// ///// RESTART GAME
$("button#restart").on("click", function(){
    location.reload(); /// CAN YOU COUNT NUMBER OF WINS IF YOU REFRESH PAGE?
});


// $("div.box1").on('click', function (event){ //.one("click") -- allows the div to be clicked in once only instead of on("click") /// GLITCH!! stored click and couldn't click back in

// v1
// $("div.box1").one('click', function (){
//   if (currentPlayer === xPlay) {
//     $( "div.box1 img.x-turn" ).show(); // shows currentPlayer img, <img style="display: none">
//     currentPlayer = oPlay; // sets the value for the next player
//     $( "button#x-player" ).removeClass("active"); // removes active state of current player
//     $( "button#o-player" ).addClass("active"); // adds active state for next player
//   } else if (currentPlayer === oPlay) {
//     $( "div.box1 img.o-turn" ).show();
//     currentPlayer = xPlay;
//     $( "button#o-player" ).removeClass("active");
//     $( "button#x-player" ).addClass("active");
//   }
// });

// v2
// $("div.box1").on('click', function (event){
//   if (currentPlayer === xPlay) {
//     $( "div.box1 img.x-turn" ).show();
//     currentPlayer = oPlay;
//     $( "button#x-player" ).removeClass("active");
//     $( "button#o-player" ).addClass("active");
//     $( this ).off( event );
//   } else if (currentPlayer === oPlay) {
//     $( "div.box1 img.o-turn" ).show();
//     currentPlayer = xPlay;
//     $( "button#o-player" ).removeClass("active");
//     $( "button#x-player" ).addClass("active");
//     $( this ).off( event );
//   }
// });

var xImage = "img/x.png";
var oImage = "img/o.png";
var win = false;

////// CONSIDER LATER: turn to a loop for less code //////
$("div.box1").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box1 img.selectedImage" ).attr('src', xImage); // show src of xImage when div.box1 is clicked to test later in function
    $( "div.box1 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box1 img.selectedImage" ).attr('src', oImage);
    $( "div.box1 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo(); /// run function to test winning combinations
});

$("div.box2").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box2 img.selectedImage" ).attr('src', xImage);
    $( "div.box2 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box2 img.selectedImage" ).attr('src', oImage);
    $( "div.box2 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo();
});

$("div.box3").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box3 img.selectedImage" ).attr('src', xImage);
    $( "div.box3 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box3 img.selectedImage" ).attr('src', oImage);
    $( "div.box3 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo();
});

$("div.box4").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box4 img.selectedImage" ).attr('src', xImage);
    $( "div.box4 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box4 img.selectedImage" ).attr('src', oImage);
    $( "div.box4 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo();
});

$("div.box5").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box5 img.selectedImage" ).attr('src', xImage);
    $( "div.box5 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box5 img.selectedImage" ).attr('src', oImage);
    $( "div.box5 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo();
});

$("div.box6").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box6 img.selectedImage" ).attr('src', xImage);
    $( "div.box6 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box6 img.selectedImage" ).attr('src', oImage);
    $( "div.box6 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo();
});

$("div.box7").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box7 img.selectedImage" ).attr('src', xImage);
    $( "div.box7 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box7 img.selectedImage" ).attr('src', oImage);
    $( "div.box7 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo();
});

$("div.box8").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box8 img.selectedImage" ).attr('src', xImage);
    $( "div.box8 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box8 img.selectedImage" ).attr('src', oImage);
    $( "div.box8 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo();
});

$("div.box9").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box9 img.selectedImage" ).attr('src', xImage);
    $( "div.box9 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box9 img.selectedImage" ).attr('src', oImage);
    $( "div.box9 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo();
});



// $( "div.win-combo img.ver1" ).show();
// $( "div.win-combo img.ver2" ).show();
// $( "div.win-combo img.ver3" ).show();
// $( "div.win-combo img.hor1" ).show();
// $( "div.win-combo img.hor2" ).show();
// $( "div.win-combo img.hor3" ).show();
// $( "div.win-combo img.dia1" ).show();
// $( "div.win-combo img.dia2" ).show();

// combinations -- reverse combinations in code
// hor1 box1 box2 box3
// hor2 box4 box5 box6
// hor3 box7 box8 box9

// ver1 box1 box4 box7
// ver2 box2 box5 box8
// ver3 box3 box6 box9

// dia1 box1 box5 box9
// dia2 box3 box5 box7

function wincombo(){
  var box1 = $( "div.box1 img.selectedImage" ).attr("src");
  var box2 = $( "div.box2 img.selectedImage" ).attr("src");
  var box3 = $( "div.box3 img.selectedImage" ).attr("src");
  var box4 = $( "div.box4 img.selectedImage" ).attr("src");
  var box5 = $( "div.box5 img.selectedImage" ).attr("src");
  var box6 = $( "div.box6 img.selectedImage" ).attr("src");
  var box7 = $( "div.box7 img.selectedImage" ).attr("src");
  var box8 = $( "div.box8 img.selectedImage" ).attr("src");
  var box9 = $( "div.box9 img.selectedImage" ).attr("src");

    if ( box1 === box2 && box2 === box3 ) {
      $( "div.win-combo img.hor1" ).show();
      win = true;
    } else if ( box4 === box5 && box5 === box6 ) {
      $( "div.win-combo img.hor2" ).show();
      win = true;
    } else if ( box7 === box8 && box8 === box9 ) {
      $( "div.win-combo img.hor3" ).show();
      win = true;
    } else if ( box1 === box4 && box4 === box7 ) {
      $( "div.win-combo img.ver1" ).show();
      win = true;
    } else if ( box2 === box5 && box5 === box8 ) {
      $( "div.win-combo img.ver2" ).show();
      win = true;
    } else if ( box3 === box6 && box6 === box9 ) {
      $( "div.win-combo img.ver3" ).show();
      win = true;
    } else if ( box1 === box5 && box5 === box9 ) {
      $( "div.win-combo img.dia1" ).show();
      win = true;
    } else if ( box3 === box5 && box5 === box7 ) {
      $( "div.win-combo img.dia2" ).show();
      win = true;
    }
}

// if (( $( "div.box1 img.selectedImage" ).attr("src") === xImage &&
//       $( "div.box2 img.selectedImage" ).attr("src") === xImage &&
//       $( "div.box3 img.selectedImage" ).attr("src") === xImage ) ||
//     ( $( "div.box1 img.selectedImage" ).attr("src") === oImage &&
//       $( "div.box2 img.selectedImage" ).attr("src") === oImage &&
//       $( "div.box3 img.selectedImage" ).attr("src") === oImage )) {
//       $( "div.win-combo img.hor1" ).show();
// }

/// FIGURE OUT: once a win happens no more clicks in grid are needed?
