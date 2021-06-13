const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET , POST, PATCH, DELETE , OPTIONS")
  next();
})

app.get('/api/posts',(req, res, next)=>{
  const posts = [{id:"yedygf",title: 'Server side Post1', content:'This is coming from server'},
  {id:"yedygfdf",title: 'Server side Post2', content:'This is coming from server'},
  {id:"yedyfegf",title: 'Server side Post3', content:'This is coming from server'}]

  res.status(200).json({
      message:"Posts fetched Successfully",
      posts
  })
});

app.post('/api/posts',(req, res, next)=>{
  const post = req.body;
 console.log(post);
 res.status(201).json({
  message:"Posts added Successfully",
  post});
});

app.patch('/posts/:Id',(req, res)=>{
  res.end("Starting exress");
});

module.exports = app;
