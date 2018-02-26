// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,objectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect database');
  }
  console.log("connected to MongoDB server ");
  //  const myDB=db.db('TodoApp');
  // myDB.collection('Todos').insertOne({
  //    text: 'Something to do',
  //    completed: false
  //  }, (err, result) => {
  //    if (err) {
  //      return console.log('Unable to insert todo', err);
  //    }
  //
  //    console.log(JSON.stringify(result.ops, undefined, 2));
  //  });

const myDB=db.db('TodoApp');
myDB.collection('users').insertOne({
  name:'keshav agrawal',
  age:20
},(err,result)=>{
  if(err){
    return console.log('Unable to insert todo', err);
  }
 console.log(JSON.stringify(result.ops, undefined, 2));
})
  db.close();
 });
