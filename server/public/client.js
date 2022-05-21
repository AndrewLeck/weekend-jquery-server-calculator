console.log('hello world!')
$(document).ready(readyNow);

let mathSymbol; 

function readyNow(){
 console.log('JQ LOADED');

 $('#total-number').on('click', getTotalNumber);
 $('#addition').on('click', addMeUp);
 $('#subtraction').on('click', subtractMeDown);
 $('#multiply').on('click', multiplyMeUp);
 $('#divide').on('click', divideMeInHalf);
}



function getTotalNumber(){
console.log('In get total Number')
let numbersObject = { 
    firstNumber: $('#first-number').val(),
    secondNumber: $('#second-number').val(),
    operator: mathSymbol
};
console.log(numbersObject);
// $('#visualMath').append(`${numbersObject.firstNumber}`)

$('#first-number').val('');
$('#second-number').val('');
console.log('Lets Empty Those Values!');

$.ajax({
    url: '/totalNumber',
    method: 'POST',
    data: numbersObject // this = req.body ( sending to server)
  }).then((response)=>{
     console.log(" In the then statment", response); 
    console.log('Posted!')
  }
  
    
).catch(`I'm not smart...`)

}

function addMeUp(){
    console.log('In add Me up!')
    mathSymbol = '+'
    // $('#visualMath').append(`${numbersObject.firstNumber}`)
    // $('#calculationAnswer').append(`${firstNumber} + ${secondNumber}`)

}

function subtractMeDown(){
    console.log('In subtract me down!');
    mathSymbol = '-'
}

function multiplyMeUp(){
    console.log('In multiply me up!');
    mathSymbol = '*'
}

function divideMeInHalf(){
    console.log('In divide me in half');
    mathSymbol = '/'
}