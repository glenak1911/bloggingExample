var crypto = require("crypto"),
    type = "mongodb",
    client = require('mongodb').MongoClient,
    mongodb_host = "127.0.0.1",
    mongodb_port = "27017",
    collection;

var mysql = require('mysql'),
    mysql_host = "127.0.0.1",
    mysql_user = "root",
    mysql_password = "",
    mysql_database = "blog_application",
    connection;

connection = 'mongodb://';
connection += mongodb_host + ':' + mongodb_port;
connection += '/blog-application';
client.connect(connection, function(err, database) {
  if(err) {
    throw new Error("Can't connect");
  } else {
    console.log("Connection to MongoDB server successful.");
      collection = database.collection('articles');
    }
}); 

module.exports = function() {
    if(type == "mongodb") {
	return {
  		add: function(data, callback) {
    			var date = new Date();
    			data.id = crypto.randomBytes(20).toString('hex');
    			data.date = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    			collection.insert(data, {}, callback || function() {});
  		},
  		update: function(data, callback) {
    			collection.update(
            		{ID: data.id}, 
            		data, 
            		{}, 
            		callback || function(){ }
        		); 
    		},
    		get: function(callback) {
        		collection.find({}).toArray(callback);
    		},
    		remove: function(id, callback) {
        		collection.findAndModify(
            		{ID: id}, 
            		[], 
            		{}, 
            		{remove: true}, 
            		callback
        		);
    		}
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
