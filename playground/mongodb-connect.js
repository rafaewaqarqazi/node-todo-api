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
    
    dbo.collection('Todos').insertOne({
        text:'Something to do',
        completed: false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
        
    });

    dbo.collection('Users').insertOne({
        name:'Rafae',
        age:21,
        location:'RWP'
    },(err,result)=>{
        if(err){
            return console.log('Error While inseting in USers Collection',err);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        
    })

    db.close();
});