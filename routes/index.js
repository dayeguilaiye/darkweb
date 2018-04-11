var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var query = require("../pool/mysqlPool");

query("select * from table where id=?", [1], function (err, results, fields) {
  //do something  
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function (req, res, next) {
  res.render("upload");
});

router.get('/cameras', function (req, res, next) {

  query("select * from camera", [1], function (err, results, fields) {
    var cameras = [];
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var singleResult = results[i];
      cameras[i] = { "name": singleResult['name'], "ip": singleResult['ip'], "status": singleResult['status'] }
    }
    console.log(cameras);
    res.send(cameras);
  });
  // var cameras = [
  //   { "name": "东门", "ip": "192.168.233.233", "status": "完全毁坏" },
  //   { "name": "北门", "ip": "192.168.404.404", "status": "好的不行" },
  //   { "name": "南门", "ip": "192.168.40.40", "status": "被遮盖" },
  //   { "name": "机密要地", "ip": "404.404.404.404", "status": "极度清晰" }
  // ]
});

// app.post('/uploadPic', function (req, res) {

//   console.log(req.files[0]);  // 上传的文件信息

//   var des_file = __dirname + "/" + req.files[0].originalname;
//   fs.readFile( req.files[0].path, function (err, data) {
//        fs.writeFile(des_file, data, function (err) {
//         if( err ){
//              console.log( err );
//         }else{
//               response = {
//                   message:'File uploaded successfully', 
//                   filename:req.files[0].originalname
//              };
//          }
//          console.log( response );
//          res.end( JSON.stringify( response ) );
//       });
//   });
// })


module.exports = router;
