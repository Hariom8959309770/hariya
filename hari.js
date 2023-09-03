

function dropdownToggle() {
  var dropdown = this.parentElement.querySelector(".dropdown-content");
  dropdown.classList.toggle("show");
}

// Add click event listener to dropdown buttons
var dropdownButtons = document.querySelectorAll(".dropdown .dropbtn");
for (var i = 0; i < dropdownButtons.length; i++) {
  dropdownButtons[i].addEventListener("click", dropdownToggle);
}

var video = document.querySelector("video");
var playButton = document.querySelector("#play-button");
var pauseButton = document.querySelector("#pause-button");
var stopButton = document.querySelector("#stop-button");
var progressBar = document.querySelector("#progress-bar");
var volume = document.querySelector("#volume");

playButton.addEventListener("click", function() {
  video.play();
});

pauseButton.addEventListener("click", function() {
  video.pause();
});

stopButton.addEventListener("click", function() {
  video.currentTime = 0;
  video.pause();
});

progressBar.addEventListener("change", function() {
  video.currentTime = progressBar.value / 100 * video.duration;
});

volume.addEventListener("change", function() {
  video.volume = volume.value / 100;
});

window.onload = function() {
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
  }, 500);
};