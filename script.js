const play = document.querySelector(".btn1");
var pause = document.querySelector("#stop");
let audio = new Audio("harleys in hawai.mp3");
var count = 0;
function playMusic() {
  if (count == 0) {
    count = 1;
    audio.play();
    play.innerHTML = "Pause";
    audio2.pause((play2.innerHTML = "Play"));
    audio3.pause((play3.innerHTML = "Play"));
    audio4.pause((play4.innerHTML = "Play"));
    audio5.pause((play5.innerHTML = "play"));
    audio6.pause((play6.innerHTML = "play"));
    audio7.pause((play7.innerHTML = "play"));
    audio8.pause((play8.innerHTML = "play"));
    audio9.pause((play9.innerHTML = "play"));
  } else {
    count = 0;
    audio.pause();

    play.innerHTML = "Play";
  }
}
function stop() {
  playMusic();
  audio.pause();
  audio.currentTime = 0;
  play.innerHTML = "Play";
}

const play2 = document.querySelector(".btn2");
let audio2 = new Audio("diet mountain dew.mp3");
var pause = document.querySelector("#stop2");

var count1 = 0;
function playMusic2() {
  if (count1 == 0) {
    count1 = 1;
    audio2.play();

    play2.innerHTML = "Pause";
    audio.pause((play.innerHTML = "play"));
    audio3.pause((play3.innerHTML = "Play"));
    audio4.pause((play4.innerHTML = "Play"));
    audio5.pause((play5.innerHTML = "Play"));
    audio6.pause((play6.innerHTML = "Play"));
    audio7.pause((play7.innerHTML = "play"));
    audio8.pause((play8.innerHTML = "Play"));
    audio9.pause((play9.innerHTML = "Play"));
  } else {
    count1 = 0;
    audio2.pause();
    play2.innerHTML = "Play";
  }
}
function stop2() {
  playMusic2();
  audio2.pause();
  audio2.currentTime = 0;
  play2.innerHTML = "Play";
}
const play3 = document.querySelector(".btn3");
let audio3 = new Audio("Dandelions.mp3");
var pause = document.querySelector("#stop3");
var count = 0;

function playMusic3() {
  if (count == 0) {
    count = 1;
    audio3.play();

    play3.innerHTML = "Pause";
    audio.pause((play.innerHTML = "Play"));
    audio2.pause((play2.innerHTML = "Play"));
    audio4.pause((play4.innerHTML = "Play"));
    audio5.pause((play5.innerHTML = "Play"));
    audio6.pause((play6.innerHTML = "Play"));
    audio7.pause((play7.innerHTML = "Play"));
    audio8.pause((play8.innerHTML = "Play"));
    audio9.pause((play9.innerHTML = "Play"));
  } else {
    count = 0;
    audio3.pause();
    play3.innerHTML = "Play";
  }
}
function stop3() {
  playMusic3();
  audio3.pause();
  audio3.currentTime = 0;
  play3.innerHTML = "Play";
}

const play4 = document.querySelector(".btn4");
let audio4 = new Audio("mockingbird.mp3");
var pause = document.querySelector("#stop3");
var count = 0;

function playMusic4() {
  if (count == 0) {
    count = 1;
    audio4.play();
    play4.innerHTML = "Pause";
    audio.pause((play.innerHTML = "Play"));
    audio2.pause((play2.innerHTML = "Play"));
    audio3.pause((play3.innerHTML = "Play"));
    audio5.pause((play5.innerHTML = "Play"));
    audio6.pause((play6.innerHTML = "Play"));
    audio7.pause((play7.innerHTML = "Play"));
    audio8.pause((play8.innerHTML = "Play"));
    audio9.pause((play9.innerHTML = "Play"));
  } else {
    count = 0;
    audio4.pause();
    play4.innerHTML = "Play";
  }
}
function stop4() {
  playMusic4();
  audio4.pause();
  audio4.currentTime = 0;
  play4.innerHTML = "Play";
}
const play5 = document.querySelector(".btn5");
let audio5 = new Audio("brownrang.mp3");
var pause = document.querySelector("#stop3");
var count = 0;

function playMusic5() {
  if (count == 0) {
    count = 1;
    audio5.play();
    play5.innerHTML = "Pause";
    audio.pause((play.innerHTML = "Play"));
    audio2.pause((play2.innerHTML = "Play"));
    audio3.pause((play3.innerHTML = "Play"));
    audio4.pause((play4.innerHTML = "Play"));
    audio6.pause((play6.innerHTML = "Play"));
    audio7.pause((play7.innerHTML = "Play"));
    audio8.pause((play8.innerHTML = "Play"));
    audio9.pause((play9.innerHTML = "Play"));
  } else {
    count = 0;
    audio5.pause();
    play5.innerHTML = "Play";
  }
}
function stop5() {
  playMusic5();
  audio5.pause();
  audio5.currentTime = 0;
  play5.innerHTML = "Play";
}

const play6 = document.querySelector(".btn6");
let audio6 = new Audio("underthe.mp3");
var pause = document.querySelector("#stop3");
var count = 0;

function playMusic6() {
  if (count == 0) {
    count = 1;
    audio6.play();
    play6.innerHTML = "Pause";
    audio.pause((play.innerHTML = "Play"));

    audio2.pause((play2.innerHTML = "Play"));
    audio3.pause((play3.innerHTML = "Play"));
    audio4.pause((play4.innerHTML = "Play"));
    audio5.pause((play5.innerHTML = "Play"));
    audio7.pause((play7.innerHTML = "Play"));
    audio8.pause((play8.innerHTML = "Play"));
    audio9.pause((play9.innerHTML = "Play"));
  } else {
    count = 0;
    audio6.pause();
    play6.innerHTML = "Play";
  }
}
function stop6() {
  playMusic6();
  audio6.pause();
  audio6.currentTime = 0;
  play6.innerHTML = "Play";
}

const play7 = document.querySelector(".btn7");
let audio7 = new Audio("Teri Deewani.mp3");
var pause = document.querySelector("#stop3");
var count = 0;

function playMusic7() {
  if (count == 0) {
    count = 1;
    audio7.play();
    play7.innerHTML = "Pause";
    audio.pause((play.innerHTML = "Play"));
    audio2.pause((play2.innerHTML = "Play"));
    audio3.pause((play3.innerHTML = "Play"));
    audio4.pause((play4.innerHTML = "Play"));
    audio5.pause((play5.innerHTML = "Play"));
    audio6.pause((play6.innerHTML = "Play"));
    audio8.pause((play8.innerHTML = "Play"));
    audio9.pause((play9.innerHTML = "Play"));
  } else {
    count = 0;
    audio7.pause();
    play7.innerHTML = "Play";
  }
}
function stop7() {
  playMusic7();
  audio7.pause();
  audio7.currentTime = 0;
  play7.innerHTML = "Play";
}

const play8 = document.querySelector(".btn8");
let audio8 = new Audio("ruaa.mp3");
var pause = document.querySelector("#stop3");
var count = 0;

function playMusic8() {
  if (count == 0) {
    count = 1;
    audio8.play();
    play8.innerHTML = "Pause";
    audio.pause((play.innerHTML = "Play"));
    audio2.pause((play2.innerHTML = "Play"));
    audio3.pause((play3.innerHTML = "Play"));
    audio4.pause((play4.innerHTML = "Play"));
    audio5.pause((play5.innerHTML = "Play"));
    audio6.pause((play6.innerHTML = "Play"));
    audio7.pause((play7.innerHTML = "Play"));
    audio9.pause((play9.innerHTML = "Play"));
  } else {
    count = 0;
    audio8.pause();
    play8.innerHTML = "Play";
  }
}
function stop8() {
  playMusic8();
  audio8.pause();
  audio8.currentTime = 0;
  play8.innerHTML = "Play";
}

const play9 = document.querySelector(".btn9");
let audio9 = new Audio("ishqmubarak.mp3");
var pause = document.querySelector("#stop3");
var count = 0;

function playMusic9() {
  if (count == 0) {
    count = 1;
    audio9.play();
    play9.innerHTML = "Pause";
    audio.pause((play.innerHTML = "Play"));
    audio2.pause((play2.innerHTML = "Play"));
    audio3.pause((play3.innerHTML = "Play"));
    audio4.pause((play4.innerHTML = "Play"));
    audio5.pause((play5.innerHTML = "Play"));
    audio6.pause((play6.innerHTML = "Play"));
    audio7.pause((play7.innerHTML = "Play"));
    audio8.pause((play8.innerHTML = "Play"));
  } else {
    count = 0;
    audio9.pause();
    play9.innerHTML = "Play";
  }
}
function stop9() {
  playMusic9();
  audio9.pause();
  audio9.currentTime = 0;
  play9.innerHTML = "Play";
}
