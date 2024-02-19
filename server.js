// Load express
const express = require('express');
const path = require('path');

// Require the to Do "database"
const studentDb = require('./data/student-db');

// Creat our express app
const app = express();


// Configure the app (app.set)
  app.set('view engine','ejs');
  app.set('views', path.join(__dirname, 'views'));
  
// Mount middleware (app.use)
  
  
// Mount routes


// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function(req, res) {
    // Path MUST start with a leading slash
    res.redirect('/students');
});

  
app.get('/home', function(req, res) {
    // Never begin the name of the template
    // with a forward slash
    res.render('home');
});

app.get('/students', function(req, res) {
    const students = studentDb.getAll();
    res.render('students/index', {students});
    // res.render('todos/index', {
    //     todos: todoDb.getAll()
    });

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
  });
  