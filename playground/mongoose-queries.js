const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

var id='5a945b41d43db635ad7681dd';
Todo.find({_id:id}).then((res)=>{

});
