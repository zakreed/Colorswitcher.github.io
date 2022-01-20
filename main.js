let buttonRed = document.getElementById('buttonRed');
let buttonBlue = document.getElementById('buttonBlue');
let buttonYellow = document.getElementById('buttonYellow');
let buttonGreen = document.getElementById('buttonGreen');
let body = document.getElementById('body');


buttonRed.addEventListener('click', function(){
    body.style.background = '#E74C3C';
})

buttonBlue.addEventListener('click', function(){
    body.style.background = '#5CACE2';
})

buttonYellow.addEventListener('click', function(){
    body.style.background = '#F1C40F';
})

buttonGreen.addEventListener('click', function(){
    body.style.background = '#57D68D';
})
