let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
let audio = new Audio('audio_file.mp3');

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}
const play = () => {
    audio.play();
}

const setAlarm = () => {
    setTimeout(() => {
        play();
    }, 1000 * slider.value);
}
const stopAlarm = () => {
    audio.pause();
}