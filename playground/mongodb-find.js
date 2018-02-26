// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect database');
  }
  console.log("connected to MongoDB server ");

    const myDB=db.db('TodoApp');
  myDB.collection('users').find({name:'meet patel'}).toArray().then((data)=>{
    console.log(JSON.stringify(data,undefined,2));
  },(err)=>{
    console.log("unable to connect",err);
  })


  db.close();
});
