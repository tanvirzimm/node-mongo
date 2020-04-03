const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();


app.use(cors());
app.use(bodyParser.json());





const names = ['Nusrat','Sumi','Ritu']

const user = 'dbUser'
const pass = 'oaQnATsi9w6dXEFZ';


//database connection





const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:oaQnATsi9w6dXEFZ@cluster0-c4xhr.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  collection.insertOne({name:'Jim'},(err,res)=>{

    console.log('successfully inserted');
    
  })
  client.close();
});






//Get 
app.get('/users/:id',(req,res)=>{
 const id = req.params.id;
 const name = names[id]
  res.send({id,name});
  
})

//Post

app.post('/addProduct',(req,res)=>{
  
   const product = req.body;
   console.log(product);
   
   client.connect(err => {
      const collection = client.db("store").collection("cloth");
      collection.insertOne(product,(err,res)=>{
         
         
      })
      client.close();
    });
  
})

app.listen(4000,()=> console.log("listening to your por man jim"));

