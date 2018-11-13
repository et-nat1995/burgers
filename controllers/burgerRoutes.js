var express = require("express");

var router = express.Router();

var hamburger = require("../models/burger.js");

router.get("/", function(req, res){
    hamburger.getAll(function(data){
        var obj = {
            burgers: data
        }
        res.render("index", obj);
    });
});

router.post("/api/addBurger", function(req, res){
    console.log("NAME !!!!! ****: "+ [req.body.burger_name]);
    hamburger.insertBurger(["burger_name"] ,[req.body.burger_name], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/devoured/:id", function(req, res){
    var condition = " id = " + req.params.id;
    
    hamburger.updateBurger({devoured: true}, condition, function(result){
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    })
});

module.exports = router;