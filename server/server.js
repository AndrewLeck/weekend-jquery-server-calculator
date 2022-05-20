const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;


// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

let numbers = [];


// app.get('/totalNumber', (req, res) => {
//     console.log('In Total Number GET')
//     res.sendStatus(201)
//   })

app.post('/totalNumber', (req, res) =>{
    console.log('In total number POST');
    numbers.push(req.body);
    console.log(numbers)
    res.sendStatus(201);
})


app.get('/totalNumber', (req, res) =>{
    console.log('In total number GET');
    res.send(numbers)
})


// if('#additon')


// function additon(number1, number2){
//  let total = number1 + number2
//  return total;
// }

// function subtraction(number1, number2){
//     let total = number1 - number2
//     return total;
// }

// function multiply(number1, number2){
//     let total = number1 * number2
//     return total;
// }
   
// function division(number1, number2){
//     let total = number1 / number2
//     return total;
// }
   








app.listen(PORT, () => {
    console.log ('Server is running on port🛳 ', PORT)
  })