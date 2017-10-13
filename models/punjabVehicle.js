const mongoose = require('mongoose');

const PunjabVehicleSchema = mongoose.Schema({
	userId: {
		type: String,
		required: true
	},
	regNo: {
		type: String
	},
	chassisNo: {
		type: String
	},
	enginNo: {
		type: String
	},
	makeName: {
		type: String
	},
	regDate: {
		type: String
	},
	model: {
		type: String
	},
	vehPrice: {
		type: String
	},
	color: {
		type: String
	},
	tokenPaid: {
		type: String
	},
	ownerName: {
		type: String
	},
	ownerFather: {
		type: String
	},
	ownerCity: {
		type: String
	},
});

const PunjabVehicle = module.exports = mongoose.model('PunjabVehicle', PunjabVehicleSchema);