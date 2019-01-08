'use strict';

function handleLogout(req,res){
  res.writeHead(401,{
    'constent-Type':'texr/plain;charset=utf-8'
  });
  res.end('ログアウトしました');
}

module.exports={
  handleLogout:handleLogout
};