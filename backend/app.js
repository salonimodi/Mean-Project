const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next)=>{
  console.log("First");
  next();
})

app.use((req, res, next)=>{
 res.send("Hello from Express")
})

app.get('/',(req, res)=>{
  res.end("Starting exress");
})

app.post('/posts',(req, res)=>{
  res.end("Starting exress");
});

app.patch('/posts/:Id',(req, res)=>{
  res.end("Starting exress");
});

module.exports = app;
