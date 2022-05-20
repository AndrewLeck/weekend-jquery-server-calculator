console.log('hello world!')
$(document).ready(readyNow);


function readyNow(){
 console.log('JQ LOADED');

 $('#total-number').on('click', getTotalNumber);
 $('#addition').on('click', addMeUp);
 $('#subtraction').on('click', subtractMeDown);
 $('#multiply').on('click', multiplyMeUp);
 $('#divide').on('click', divideMeInHalf);
}



function getTotalNumber(){
$('#first-number').val();
$('#second-number').val();
console.log('In get total Number')
let numbersObject = { 
    firstNumber: $('#first-number').val(),
    secondNumber: $('#second-number').val()
};
console.log(numbersObject);
// $('#visualMath').append(`${numbersObject.firstNumber}`)

$('#first-number').val('');
$('#second-number').val('');
console.log('Lets Empty Those Values!');

$.ajax({
    url: '/totalNumber',
    method: 'POST',
    data: numbersObject
  }).then(
    console.log('Posted!')
  ).catch(`I'm not smart...`)

}

function addMeUp(){
    console.log('In add Me up!')
    $('#first-number').val();
    $('#second-number').val();
    // $('#visualMath').append(`${numbersObject.firstNumber}`)
}

function subtractMeDown(){
    console.log('In subtract me down!');
}

function multiplyMeUp(){
    console.log('In multiply me up!');
}

function divideMeInHalf(){
    console.log('In divide me in half');
}