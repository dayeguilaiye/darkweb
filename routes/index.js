var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', function(req, res, next) {
  res.render("upload");
});

router.get('/cameras', function(req, res, next) {
  var cameras = [
    {"name":"东门","ip":"192.168.233.233","status":"完全毁坏"},
    {"name":"北门","ip":"192.168.404.404","status":"好的不行"},
    {"name":"南门","ip":"192.168.40.40","status":"被遮盖"},
    {"name":"机密要地","ip":"404.404.404.404","status":"极度清晰"}
  ]
  res.send(cameras);
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
