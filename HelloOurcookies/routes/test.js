var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var username = req.query.username;
    var age = req.query.age;

    var resp_json = {
        "success": "true",
        "msg": "请求成功",
        "info": [{
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }, {
            "username": username,
            "age": age,
            "image": "http://192.168.66.122:3000/images/ic_demo_org.jpg"
        }]
    };
    res.send(JSON.stringify(resp_json));
});

module.exports = router;
