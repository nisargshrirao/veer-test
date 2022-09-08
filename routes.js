const express = require("express");
const router = express.Router();
const data = require('./db.json')

router.get('/men-Prod', (req, res) => {
console.log(":::::::data:::::::",data);
    res.send(data)
 })


module.exports = router;
