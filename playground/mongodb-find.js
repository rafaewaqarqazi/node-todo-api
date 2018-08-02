//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

var obj =new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
       return console.log('Unable to connect to mongodb Server');
    }
    console.log('Connected to MongoDB Server');
    var dbo = db.db("TodoApp");

    dbo.collection('Todos').find({completed:true}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
        
    },(err)=>{
        console.log('Unable to fetch todos',err);
        
    });

    db.close();
});