const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	name: {
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

	type: {
		type: String,
		required:true
	},

	startyear: {
		type: Date,
		required: false
	},

	Iname: {
		type: String,
		required: false
	},

	skills: {
		type: String,
		required:false
	},

	Rating:{
		type: Number,
		required:false
	},

	mobileno: {
		type: Number,
		required: false
	},

	bio:{
		type: String,
		required: false
	},

	rskills: {
		type: String,
		required:false
	},

	sop:{
		type:String,
		required:false
	},

	date:{
		type: Date,
		required: false
	}

});

module.exports = User = mongoose.model("Users", UserSchema);
