var orm = require("../config/basicOrm.js");

var burger = {
    getAll: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },

    updateBurger: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },

    insertBurger: function(cols, vals, cb){
        orm.insert("burgers", cols, vals, function(res){
            cb(res);
        });
    }
}

module.exports = burger;