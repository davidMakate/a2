/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


var express = require("express");
var fs = require("fs");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();

app.listen(8080, () => console.info('App running at http://localhost:8080'));

app.get('/', (request, response) => response.sendFile(__dirname + 
'/index.html'));
app.get('/index.html', (request, response) => response.sendFile(__dirname + 
'/index.html'));
app.get('/quote.html', (request, response) => response.sendFile(__dirname + 
'/quote.html'));
app.get('/css/style.css', (request, response) => response.sendFile(__dirname + 
'/css/style.css'));

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/process', (request, response) => {
 var name = request.body.FirstName;
 var number = request.body.PhoneNumber;
 var message = request.body.Message;
 var email = request.body.Email;
 
 console.log(name + " ");
 console.log(number);
 console.log(email);
 console.log(message);
 
 var emailMessage = "Request From New Client: " + name + ",      Phone Number :" + number + ",  Email Address :(" + email + ")  " +"     Message:"+ message; mail(emailMessage); 

 
 response.sendFile(__dirname + '/success.html');
});

function mail(emailMessage){
 var nodemailer = require('nodemailer');
 var transporter = nodemailer.createTransport({
 service: 'gmail', 
 auth: {
 user: 'davidmakate420@gmail.com', // add your username
 pass: 'mipi qsxq nrew fdtl' // add your password
 }
 });
  var mailOptions = {
 from: 'davidmakate420@gmail.com', // add sender email (your email)
 to: 'davidmakate420@gmail.com', // add recipient email (maybe a friend)
 subject: 'Message from Node.js app',
 html: '<p>' + emailMessage + '</p>'
 };
 transporter.sendMail(mailOptions, function(error, info){
 if (error) {
 console.log(error);
 } else {
 console.log('Email sent: ' + info.response);
 }
 });
}

