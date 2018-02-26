// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect database');
  }
  console.log("connected to MongoDB server ");

    //deleteMany
        // const myDB=db.db('TodoApp');
        // myDB.collection('Todos').deleteMany({text:'eat lunch'}).then((res)=>{
        //   console.log(res);
        // })
    //deleteOne
 //     const myDB=db.db('TodoApp');
 //  myDB.collection('users').deleteOne({name:'meet patel'}).then((res)=>{
 //   console.log(res);
 // })
    //findOneAndDelete
    const myDB=db.db('TodoApp');
    myDB.collection('users').findOneAndDelete({name:'umesh agrawal'}).then((res)=>{
      console.log(res);
    })
  db.close();
});
