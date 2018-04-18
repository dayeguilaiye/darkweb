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

router.get('/translate', function (req, res, next) {
  res.render("translate");
});

router.post('/trans', function (req, res, next) {
  console.log(req.body)
  text = req.body.text.replace(/[\r|\n]/g, ' ');
  console.log(text)
  res.send(text)
});

//获取摄像头状态列表
router.get('/cameraList', function (req, res, next) {

  query("select * from camera", [1], function (err, results, fields) {
    var cameras = [];
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var singleResult = results[i];
      cameras[i] = { "name": singleResult['name'], "ip": singleResult['ip'], "status": singleResult['status'] };
    }
    console.log(cameras);
    res.send(cameras);
  });

});




//摄像头图像
router.get('/cameraView', function (req, res, next) {
  console.log('getting camera view...')
  res.render("cameraView");
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
