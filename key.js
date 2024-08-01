var MD5 = require("crypto-js/md5"); 
var Publickey= 'db79500f1fd45db531923a694b6edc60'
var privateKey= '73581924cb15a5945e56999f6b04489a408dea1c'
ts = 1

var hashkey = MD5(ts+privateKey+Publickey).toString()
console.log("hashKey",hashkey)

//hashKey a1a46ba5381a47f245d6419e89ad3429



// xhr.open("GET", `https://www.superheroapi.com/api.php/23456310a41b919331a2bd5aa4f4ed20/search/${name}`, true);