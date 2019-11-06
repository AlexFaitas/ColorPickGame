var colors =generateRandomColors(numberofSquares);
var h1 = document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#msg");
var resetButton=document.querySelector("#resetB");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var numberofSquares=6;
easyBtn.addEventListener("click",function()
{
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberofSquares=3;
    colors= generateRandomColors(numberofSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        } else {
            squares[i].style.display="none";
      }
    }
});
hardBtn.addEventListener("click",function()
{
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numberofSquares=6;
    colors= generateRandomColors(numberofSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0; i<squares.length; i++){     
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
      }
});


resetButton.addEventListener("click",function(){
//alert("clicked");
    colors=generateRandomColors(numberofSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for( var i =0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];

    }
    h1.style.backgroundColor="#232323";
});
colorDisplay.textContent=pickedColor;
for(var i=0; i< squares.length; i++)
{

    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click" , function(){
      //  alert("you just clicked a square");
       var clickedColor= this.style.backgroundColor;

       if(clickedColor === pickedColor)
       {
           messageDisplay.textContent="Correct!";
           resetButton.textContent="Play Again!";
           changeColors(clickedColor);

       }
       else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent="Try Again";
       }
    });
}

function changeColors(color){
    for( var i =0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
  var random =  Math.floor (Math.random() * colors.length) ;
  return colors[random];
}

function generateRandomColors(num)
{
    var arr = [];
    for (var i = 0; i < num; i++){
     arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
 var r=  Math.floor(Math.random() * 256);
 var g=  Math.floor(Math.random() * 256);
 var b=  Math.floor(Math.random() * 256);
 return "rgb(" + r + ", " + g + ", " + b + ")";
}