import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

import pkg from 'statuses';
const { redirect } = pkg;
const app = express();
const port ="3000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
var listPost = [];
app.get("/",(req,res) =>{
    if (listPost.length ===0){
        const post1 = new posts('HELLO MY NAME IS ARNAV', 'I CREATED THIS BLOG WEBSITE!!!');
        listPost.push(post1);
    }
    
    console.log(listPost);
    res.render("index.ejs",{data :listPost})
});


app.get(`/post/:i`,(req,res)=>{
   
    var blogNo = req.params.i;
    if(blogNo<listPost.length){
        console.log(listPost[blogNo]+"-------------------------------------------------");
        res.render("singlepost.ejs",{datas: listPost[blogNo]});
    }else{
        res.redirect('/');
    }
    
        
});

app.get("/composeose" ,(req,res)=>{
    
    res.render("compose.ejs");
});

app.post("/composeose/submit",(req,res)=>{
    var tit = req.body.composeTitle;
    var con = req.body.composeContent;
    const post = new posts(tit, con);
    listPost.push(post);
    
    res.redirect('/');
});

app.listen(port,()=>{
    `Server started on ${port}`
});

function posts(title,content){
    this.title= title;
    this.content= content;
}