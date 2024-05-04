const voicesDropdown = document.querySelector("#voices");
const rateInput = document.querySelector("#rate");
const pitchInput = document.querySelector("#pitch");
const text = document.querySelector("#text");
const stopButton = document.querySelector("#stop");
const speakButton = document.querySelector("#speak");

message = new SpeechSynthesisUtterance(text.value);
let voices = [];

function populateVoices() {
  voices = speechSynthesis.getVoices();
  for (let index = 0; index < voices.length; index++) {
    const option = document.createElement("option");
    option.setAttribute("value", voices[index].name);
    option.textContent = voices[index].name;
    voicesDropdown.appendChild(option);
  }
}

function setVoice() {
  for (let index = 0; index < voices.length; index++) {
    if (voices[index].name === voicesDropdown.value) {
      message.voice = voices[index];
    }
  }
}

function setRate() {
  message.rate = rateInput.value;
}

function setPitch() {
  message.pitchInput = pitchInput.value;
}

function setText() {
  message.text = text.value;
}

function stopVoice() {
  speechSynthesis.cancel();
}

function speakVoice() {
  speechSynthesis.speak(message);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
rateInput.addEventListener("change", setRate);
pitchInput.addEventListener("change", setPitch);
text.addEventListener("change", setText);
stopButton.addEventListener("click", stopVoice);
speakButton.addEventListener("click", speakVoice);
