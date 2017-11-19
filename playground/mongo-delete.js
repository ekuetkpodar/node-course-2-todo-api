const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Users',(err,db) =>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    // deleteMany
//    db.collection('Todos').deleteMany({"text" : "Eat lunch"}).then((result)=>{
//        console.log(result)
//    });
/*    db.collection('Todos').deleteOne({"text" : "Eat lunch"}).then((result) =>{
        console.log(result);
    })*/
    
  /*  db.collection("Todos").findOneAndDelete({completed:false}).then((result) =>{
        console.log(result);
    })*/
    
   // db.collection("Users").deleteMany({name:"Ekue"});
    
    db.collection("Users").findOneAndDelete({_id: new ObjectID("5a11e328b0e87c2aa55432a4")}).then((result) =>{
        console.log(result)
    })

});