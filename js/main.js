
var currentPlayer = ""; // records currentPlayer which is currently undefined
var xPlay = "x"; // to remove ""
var oPlay = "o";
var gameStarted = false; // records that the game hasnt started yet



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


// ///// RESTART GAME
$("button#restart").on("click", function(){
    location.reload(); /// CAN YOU COUNT NUMBER OF WINS IF YOU REFRESH PAGE?
});


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
