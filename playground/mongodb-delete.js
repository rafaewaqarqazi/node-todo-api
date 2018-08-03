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

    //Delete Many
    // dbo.collection('Todos').deleteMany({
    //     text:'Watch the dogs'
    // }).then((result)=>{
    //     console.log(result);
        
    // });

    //Delete one
    dbo.collection('Todos').findOneAndDelete({
        text:'Something to do'
    }).then((result)=>{
        console.log(result);
        
    });

    //db.close();
});