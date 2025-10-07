const express = require("express");
const router = express.Router();

router.get("/", function(req,res) {

    res.send("Hey owners route is working ");  

})

module.exports = router;