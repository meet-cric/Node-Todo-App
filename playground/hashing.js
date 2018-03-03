var SHA256 = require("crypto-js/sha256");
var jwt=require('jsonwebtoken');
var data={
  id:5
}
var tokens=jwt.sign(data,"abc123");
console.log(tokens);
var result=jwt.verify(tokens,'abc123');
console.log(result);
// var message="my name is meet";
// var hash=SHA256(message).toString();
//
// var data={
//   id:14
// }
// var token={
//   data,
//   hash:JSON.stringify((data)+"something secret").toString()
// }
//
// var resulthash=JSON.stringify((token.data)+"something secret").toString();
//
// if(resulthash===token.hash){
//   console.log("keep fucking on");
// }
// else{
//   console.log('u are fucked up');
// }
