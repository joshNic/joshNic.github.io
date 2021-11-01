
let textStyle = null;
let blingcheck = null;
let timer = null;
window.onload = () => {
  let decoration = document.getElementById("decoration");
  textStyle = document.getElementById("decorationTest");

  let malcovitch = document.getElementById("malkovitch");
  malcovitch.onclick = replaceWords;

  blingcheck = document.getElementById("bling");
  decoration.onclick = textSizeChanger;
  blingcheck.onchange = textchange;
};

const butttonClick = () => {
    let fontSize = window.getComputedStyle(textStyle, null).getPropertyValue('font-size');
    var currentSize = parseInt(fontSize);
    currentSize += 2;
    textStyle.style.fontSize = currentSize + "pt";
};


function textSizeChanger() {
    if (timer === null) {
        timer = setInterval(butttonClick, 500);
    } else {
        clearInterval(timer);
        timer = null;
    }
}




const textchange = () => {
  if (blingcheck.checked == true) {
    textStyle.style.color = "green";
    textStyle.style.textDecoration = "underline";
    document.body.style.backgroundImage = "url('background.jpeg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center center";
    document.body.style.minHeight = "100%";
  } else {
    textStyle.style.color = "black";
    textStyle.style.textDecoration = "none";
    document.body.style.backgroundImage = "none";
  }
};

const replaceWords = () => {
  const text = textStyle.value;
  const words = text.split(" ");
  words.map((word, i, arr) => {
    if (word.length >= 5) {
      arr[i] = "Malcovitch";
    }
    return (textStyle.value = arr.join(" "));
  });
};
