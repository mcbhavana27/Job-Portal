const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	title: {
		type: String,
		required: false
	},

	applicants: {
		type: Number,
		required:false
	},

	positions: {
		type: Number,
		required: false
	},

	Dop:{
		type: Date,
		required:false
	},

	Doe: {
		type: Date,
		required:false
	},

	type:{
		type:String,
		required:false
	},

	Duration:{
		type:Number,
		required:false
	},
	salary:{
		type:Number,
		required:false
	},
	Rating:{
		type:String,
		required:false
	},

	date:{
		type: Date,
		required: false
	}

});

module.exports = Job = mongoose.model("Jobs", JobSchema);
