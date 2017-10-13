const express = require('express');
const router = express.Router();
// load cheerio module for web scrapping
const cheerio = require('cheerio');
const request = require('request');

// import punjab vehicle database Schema
const PunjabVehicle = require('../models/punjabVehicle');


// retrieveing vehicles

router.get('/punjabVehicles/:id', (req, res, next) => {
	let query = {'userId': req.params.id};
	PunjabVehicle.find(query, (err, vehicles) => {
		if(err){
			res.json(err);
		}else{
			res.json(vehicles);
		}
	});
});

// delete vehicle
router.delete('/punjabVehicle/:id', (req, res, next) => {
	let query = {_id:req.params.id};

	PunjabVehicle.remove(query, (err, result)=> {
		if(err){
			res.json(err);
		}else{
			res.json(result);
		}
	});
});



// storing record in mongodb database
router.post('/punjabVehicle', (req, res, next) => {

	// vehicle information
	let newVehicle = new PunjabVehicle({
		userId: req.body.userId,
		regNo: req.body['Registration Number:'],
		chassisNo: req.body['Chassis Number:'],
		enginNo: req.body['Engine Number:'],
		makeName: req.body['Make Name:'],
		regDate: req.body['Registration Date:'],
		model: req.body['Model:'],
		vehPrice: req.body['Vehicle Price:'],
		color: req.body['Color:'],
		tokenPaid: req.body['Token Tax Paid upto:'],
		ownerName: req.body['Owner Name'],
		ownerFather: req.body['Father Name'],
		ownerCity: req.body['Owner City']
	});

	// first check record is already saved or not

	let query = {
		'userId': req.body.userId,
		'chassisNo': req.body['Chassis Number:']
	}

	PunjabVehicle.find(query, (err, result) => {
		if(result.length > 0){
			res.json('recordExist');
		}else{
			// save in database
			newVehicle.save((error, response) => {
				if(error){
					res.json(error);
				}else{
					res.json(response);
				}
			});		
		}
	});
	
});

// web scrapping for punjab vehicle

router.post('/punjabScrape/:vehNo', function(req, res){

	request.post({
		headers: {'content-type' : 'application/x-www-form-urlencoded'},
		url:     'http://www.mtmis.excise-punjab.gov.pk/',
		body:    "vhlno="+req.params.vehNo
		}, (error, response, html) => {
			if(!error){
	            // cheerio module works like jquery
	            let $ = cheerio.load(html);

	            $('.result-div').filter(function(){
	                let data = $(this);
	                let result = '<table>' + data.children().first().html() + '</table>';
	                res.json(result);
	            });
       		}
	});

});

// exporting module
module.exports = router;