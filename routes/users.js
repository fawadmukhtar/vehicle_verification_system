const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

// loading schema
const User = require('../models/user');
const config = require('../config/database');

// Register
router.post('/register', (req, res, next) => {
	let newUser = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userName: req.body.userName,
		email: req.body.email,
		password: req.body.password
	});

	User.addUser(newUser, (err, user) => {
		if(err){
			res.json({success: false, msg: 'Failed to regsiter user'});
		}else{
			res.json({success: true, msg: 'User Registerd'});
		}
	});


});


// authenticate
router.post('/authenticate', (req, res, next) => {
	const userName = req.body.userName;
	const password = req.body.password;

	User.getUserByName(userName, (err, user) => {
		
		if(err) throw err;
		if(!user){
			return res.json({success: false, msg: 'User not found'});
		}

		User.comparePassword(password, user.password, (err, isMatch) => {
			if(err) throw err;
			if(isMatch){
				// create token
				const token = jwt.sign({ data: user }, config.secret, {
					expiresIn: 604800 // 1 week
				});

				res.json({
					success: true,
					token: 'JWT ' + token,
					user : {
						id: user._id,
						firstName: user.firstName,
						lastName: user.lastName,
						userName: user.userName,
						email: user.email
					} 
				});
			}else{
				return res.json({success: false, msg: 'Wrong Password'});
			}
		});

	});

});

// profile after login
 // passport.authenticate('jwt', { session: false }),
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	console.log('profile');
	res.json({user: req.user});
});

// router.get('/profile', (req, res, next) => {
// 	console.log('profile');
// 	res.json();
// });

module.exports = router;
