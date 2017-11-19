const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
/*    
    db.collection('Todos').find({
        _id:new ObjectID("5a10438fdf9c4f2f7cc41958")
    }).toArray().then((docs) =>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) =>{
        console.log("Unable to fetch todos",err);
    })*/
    
 /*   db.collection('Todos').find().count().then((count) =>{
        console.log(`Todo count ${count}`);
    },(err)=>{
        console.log("Unable to find todo ", err)
    })*/
    
    db.collection("Users").find({name:'Ekue'}).toArray().then((docs) =>{
    console.log(JSON.stringify(docs,underfined,2));
    })
})