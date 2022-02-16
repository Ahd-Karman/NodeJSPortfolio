const express = require ("express");

const app = express();
app.set ("view engine" , "ejs") ;

app.listen("2000") ;
console.log("server started at port 2000 ... ") ;

app.use(express.static("views"));
app.use(express.static("views")) ;

app.get("/" , (req,res)=>{

    res.render("portfolio" ,{ name:"Ahd Karman"});
});