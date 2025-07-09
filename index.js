const { faker } = require('@faker-js/faker');
const express=require("express");
const app=express();
const path=require("path");
const { v4: uuidv4 } = require('uuid');
require("dotenv").config();
const port=3000;
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//get mysql pacakge in index.js file
const mysql=require("mysql2");
//create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
  //method 1 to run sql command in js code use query method of connection object and in 1 paramter write the command and in second make a function to show err and result to check if error comes or to show result
  // let q="INSERT INTO user (id,username,email,password) VALUES ?";
  // let mulrow=[
  //   ["b","Priya yadav","abcd@gmail.com","hoho"],
  //   ["c","Sapana Devi","abcde@gmail.com","yoyoyo"]
  // ];
  let getRandomUser=()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  }
  // let data=[];
  // for(let i=1;i<=100;i++){
  //   data.push(getRandomUser());
  // }
  // let arr=["a","tushar yadav","abc@gmail.com","heyhey"];
  // try{
  //   connection.query(q,[data],(err,result)=>{
  //     if (err) throw err;
  //     console.log(result);//array ke andar aayege tables
  //     // console.log(result.length);
  //     // console.log(result[0]);
  //     // console.log(result[1]);
  //   })
  // }catch(err){
  //   console.log(err);
  // }
  // connection.end();
  app.get("/",(req,res)=>{
    let q="SELECT count(*) FROM user";
    try{
      connection.query(q,(err,result)=>{
        if(err) throw err;
        let count=result[0]["count(*)"];
        res.render("home",{count});
      })
    }catch(err){
        res.render("error");
    }
  })
app.get("/user",(req,res)=>{
  let q="SELECT * FROM user";
  try{
    connection.query(q,(err,user)=>{
      if(err) throw err;
      console.log(user);
      res.render("showuser",{user});
    })
  }catch(err){
    res.render("error");
  }
})
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    let q= `SELECT * FROM user WHERE id='${id}'`;
    try{
      connection.query(q,(err,result)=>{
        if(err) throw err;
        console.log(result);
        let user=result[0];
        res.render("edit",{user});
      })
    }catch(err){
      res.render("error");
    }
})
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    console.log(id);
    console.log(req.body);
    let {username,password}=req.body;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
      connection.query(q,(err,result)=>{
        if (err) throw err;
        console.log(result);
        if(password==result[0]["password"]){
          let newq=`UPDATE user SET username='${username}' WHERE id='${id}'`;
          try{
            connection.query(newq,(error,change)=>{
              if(error) throw error;
              console.log(result);
              res.redirect("/user");
            })
          }catch(error){
            console.log("error occured");
            res.redirect("/user");
          }  
        }else{
          res.send("wrong password");
        }
      })
    }catch(err){
          console.log("error occured");
          res.redirect("/user");
    }
})
app.get("/user/add",(req,res)=>{
  res.render("new");
})
app.post("/user",(req,res)=>{
  let id=uuidv4();
  console.log(req.body);
  let {username,email,password}=req.body;
  let q=`INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)`
  try{
    connection.query(q,[id,username,email,password],(err,result)=>{
      if(err) throw err;
      console.log(result);
      res.redirect("/user");
    })
  }catch(err){
    res.render("error");
  }
})
app.get("/user/:id/delete",(req,res)=>{
    let {id}=req.params;
    res.render("deleteuser",{id});
})
app.delete("/user/:id",(req,res)=>{
  let {id}=req.params;
  console.log(req.body);
  let {email,password}=req.body;
  let q=`SELECT * FROM user where id='${id}'`;
  try{
    connection.query(q,(err,result)=>{
      if (err) throw err;
      console.log(result);
      if(email===result[0].email && password===result[0].password){
        let delq=`DELETE FROM user WHERE id ='${id}'`;
        try{
          connection.query(delq,(error,del)=>{
            if (error) throw error;
            console.log(del);
            res.redirect("/user");
          })
        }catch(error){
          res.render("error");
        }
      } else {
        res.send("enter write email and password");
    }
    })
  }catch(err){
    res.render("error");
  }
})
  app.listen(port,()=>{
    console.log(`server started at port ${port}`);
  })
