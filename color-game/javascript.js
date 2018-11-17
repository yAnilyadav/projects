var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.getElementById("message");
var resetbutton = document.querySelector("#reset");
var squares = document.querySelectorAll(".square");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

/*easybtn.addEventListener("click",function () {
    easybtn.classList.add("selected")
    hardbtn.classList.remove("selected")
    colors = generateRandomColors(3);
    pickedColor=pickColor();
    message.textContent="";
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})*/
hardbtn.addEventListener("click", function() {
  easybtn.classList.remove("selected");
  hardbtn.classList.add("selected");
  colors = generateRandomColors(6);
  message.textContent = "";
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];

    squares[i].style.display = "block";
  }
});

resetbutton.addEventListener("click", function() {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      message.textContent = "correct";
      resetbutton.textContent = "Play Again?";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      var voice = document.querySelector(".correct");
      voice.play();
    } else {
      this.style.background = "#232323";
      message.textContent = "try again";
      var voice = document.querySelector(".wrong");
      voice.play();
    }
  });
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
