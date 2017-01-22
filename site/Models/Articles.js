var crypto = require("crypto"),
    type = "mongodb",
    client = require('mongodb').MongoClient,
    mongodb_host = "127.0.0.1",
    mongodb_port = "27017",
    collection;
    
module.exports = function() {
    if(type == "mongodb") {
        return {
            add: function(data, callback) { ... },
            update: function(data, callback) { ... },
            get: function(callback) { ... },
            remove: function(id, callback) { ... }
        }
    } else {
        return {
            add: function(data, callback) { ... },
            update: function(data, callback) { ... },
            get: function(callback) { ... },
            remove: function(id, callback) { ... }
        }
    }
}
