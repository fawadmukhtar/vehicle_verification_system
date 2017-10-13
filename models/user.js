const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/database');

// user schema
const UserSchema = mongoose.Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	userName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.getUserByName = function(username, callback){
	let query = { userName: username };
	User.findOne(query, callback);
}


module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt) => {
	    bcrypt.hash(newUser.password, salt, (err, hash) => {
	        if (err) throw err;
	        newUser.password = hash;
	        newUser.save(newUser, callback);
	    });
	});
}


module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if(err) throw err;
		callback(null, isMatch);
	});
}