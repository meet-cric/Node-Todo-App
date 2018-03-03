var SHA256 = require("crypto-js/sha256");
var jwt=require('jsonwebtoken');
var bcrypt=require('bcryptjs');

var password='meet123';

bcrypt.genSalt(10,(err,salt)=>{
  bcrypt.hash('password',salt,(err,hash)=>{
    // console.log(hash);
  })
})
var hashedpassword='$2a$10$AlAcOrmx20eA9AgelgDeTuySl/8ZWc0pXEaK8mayF31Q.QJYwtl32';

bcrypt.compare('meet123',password,(err,res)=>{
  console.log(res);
})
 
