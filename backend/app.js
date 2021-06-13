const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET , POST, PATCH, DELETE , OPTIONS")
  next();
})

app.use('/api/posts',(req, res, next)=>{
  const posts = [{id:"yedygf",title: 'Server side Post1', content:'This is coming from server'},
  {id:"yedygfdf",title: 'Server side Post2', content:'This is coming from server'},
  {id:"yedyfegf",title: 'Server side Post3', content:'This is coming from server'}]

  res.status(200).json({
      message:"Posts fetched Successfully",
      posts
  })
});

app.post('/posts',(req, res)=>{
  res.end("Starting exress");
});

app.patch('/posts/:Id',(req, res)=>{
  res.end("Starting exress");
});

module.exports = app;
