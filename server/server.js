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
    console.log(numbers)
    console.log(req.body); // req.body == my numbersObject
    let answer = letsDoSomeThings(req.body);
    req.body.answer = answer; // added Answer to my numbers object to be stored!
    numbers.push(req.body);
    console.log('should store answer', numbers)
    console.log("should give us the answer", req.body)
    console.log('here is the answer!', answer);
    res.send({answer: req.body});
})


app.get('/totalNumber', (req, res) =>{
    console.log('In total number GET');
    res.send(numbers)
})

function letsDoSomeThings(obj){ //req.body = obj 
    let result;
    if(obj.operator === '+'){
     result = Number(obj.firstNumber) + Number(obj.secondNumber)
     console.log('In addition')
    }
    else if(obj.operator === '-'){
        result = Number(obj.firstNumber) - Number(obj.secondNumber)
        console.log('In subtraction')
       }
     else if(obj.operator === '*'){
        result = Number(obj.firstNumber) * Number(obj.secondNumber)
        console.log('In multiplication')
       }
    else if(obj.operator === '/'){
        result = Number(obj.firstNumber) /  Number(obj.secondNumber)
        console.log('In division')
       };
       console.log(result);
    return result;
}


app.listen(PORT, () => {
    console.log ('Server is running on port🛳 ', PORT)
  })