const express = require('express') 

const app = express()

// app.get('/', function(req, res) {
//     res.sendFile(__dirname+'/views/index.html');

//   });


//   app.get('/', function(req, res) {
//     res.sendFile(__dirname+'/views/blog-directory.html');
    
//   });  


  app.get('/', function(req, res) {
    res.sendFile(__dirname+'/views/about.html');
    
  });



app.listen(8000)