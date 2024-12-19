# Projects REaled TO DOM

# project Link

[Click Here ](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## Project 1
``` HTML 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="../styles.css" />
    <title>JavaScript Background Color Switcher</title>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="canvas">
      <!-- <a
        style="
          background-color: #fff;
          padding: 10px 30px;
          border-radius: 8px;
          color: #212121;
          text-decoration: none;
          border: 2px solid #212121;
        "
        href="../index.html"
        >Back to Home Page</a
      > -->
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page!</span>
      </h2>
    </div>
    <script src="chaiaurcode.js"></script>
  </body>
</html>

```
``` css 

html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

#grey {
  background: grey;
}

#white {
  background: white;
}
#blue {
  background: blue;
}
#yellow {
  background: yellow;
}

```
``` Javascript 
console.log("Hitesh"
    const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body=document.querySelector("body")
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
    body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'white'){
    body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'blue'){
    body.style.backgroundColor=e.target.id
    }
    if(e.target.id === 'yellow'){
    body.style.backgroundColor=e.target.id
    }
    
  });
});


)

```

## Project 2

``` Javascrpit
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // pella ni value submit ke aevu na karse aene default j rakho
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a valid height :${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a valid width :${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    // Show the result
    

    if (bmi < 18.6) {
      results.innerHTML = `<span> Your Under Weightes ${bmi} </span>`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span> Your Normal Weightes ${bmi} </span>`;
    }
    if (bmi >= 24.9) {
      results.innerHTML = `<span> Your over Weightes ${bmi} </span>`;
    }
  }
});

 ```
## Project 3 
``` Javascript 
const clock=document.querySelector('#clock')



setInterval(function(){
  let date = new Date()
  clock.innerHTML=date.toLocaleTimeString();
  // console.log(date.toLocaleTimeString())
},1000)

```

## Project Number 4 
``` Javascript 

const randomNumber=console.log(parseInt(Math.random()*100+1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const warn=document.querySelector('#warn');

const p =document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseFloat(userInput.value);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    warn.innerText="Enter Valid Number";
  }
  else if(guess<1){
    warn.innerText="Enter Number greater than 1";
  }
  else if(guess>100){
    warn.innerText="Enter Number less than 1";
  }else{
    prevGuess.push(guess)

    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over, Randomw Number Was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  //
}

function displayGuess(guess){
  //
}
function displayMessage(msg){
  //
}

function newGame(){
//
}

function endGame(){
  //
}



```



