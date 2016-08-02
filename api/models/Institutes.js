//Institutes.js

module.exports = {
	attributes:{
		institute_id:{
			required:true,
			type:'string',
			// unique: true
		},
		institute_name:{
			type: 'string',
			required:true,
		},
		campaign:{
			type:"json"
		}
	},
	autoUpdatedAt:false,
	autoCreatedAt:false
}