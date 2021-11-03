    var start, stop, animation, size, speed, textarea, animationvalue = "Blank", delay = 250, interval, fontsize = "7pt";
    var splittext = "=====\n", currentPosition = 0;



window.onload = function () {
    start = document.getElementById('start');
    stop = document.getElementById('stop');
    animation = document.getElementById('animation');
    size = document.getElementById('size');
    speed = document.getElementById('speed');
    textarea = document.getElementById('inputTextArea');
}



function onStart() {

    this.textarea.value = "";
    start.disabled = true;
    stop.disabled = false;
    animation.disabled = true;
    var data = ANIMATIONS[this.animationvalue].split(splittext);

    interval = setInterval(function () {
        this.textarea.style.fontSize = this.fontsize;

        if (currentPosition === data.length) {
            textarea.value = "";
            currentPosition = 0;
        }
        textarea.value = data[currentPosition];
        currentPosition++;
    }, delay);
}

function onStop() {

    stop.disabled = true;
    start.disabled = false;
    animation.disabled = false;
    currentPosition = 0;
    clearInterval(interval);
}

function onAnimationSelect() {
    this.animationvalue = animation.options[animation.selectedIndex].value;
    this.textarea.value = ANIMATIONS[this.animationvalue];
}

function onSizeSelect() {
    this.fontsize = size.options[size.selectedIndex].value;
}

function onSpeedSelect(checkbutton) {
    if (checkbutton.checked) {
        this.delay = 50;
    } else {
        this.delay = 250;
    }
}
