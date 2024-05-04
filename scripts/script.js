const voicesDropdown = document.querySelector("#voices");
const rateInput = document.querySelector("#rate");
const pitchInput = document.querySelector("#pitch");
const textarea = document.querySelector("#text");
const stopButton = document.querySelector("#stop");
const speakButton = document.querySelector("#speak");

const message = new SpeechSynthesisUtterance(textarea.value);
let voices = [];

function populateVoices(){
    voices = speechSynthesis.getVoices();

    for(let index = 0; index < voices.length; index++){
        const option = document.createElement("option");
        option.setAttribute("value", voices[index].name);
        option.textContent = voices[index].name;
        
        voicesDropdown.appendChild(option);
    }
}

function setVoice(){
    for(let index =0; index < voices.length; index++){
        if(voicesDropdown.value === voices[index].name){
            message.voice = voices[index];
            break;
        }
    }
}

function setRate() {
    message.rate = rateInput.value;
}

function setPitch(){
    message.pitch = pitchInput.value;
}

function setText(){
    message.text = textarea.value;
}

function stopVoice(){
    speechSynthesis.cancel()
}

function speakVoice() {
    speechSynthesis.speak(message);
}


speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
rateInput.addEventListener("change", setRate);
pitchInput.addEventListener("change", setPitch);
textarea.addEventListener("change", setText);
stopButton.addEventListener("click",stopVoice);
speakButton.addEventListener("click", speakVoice);