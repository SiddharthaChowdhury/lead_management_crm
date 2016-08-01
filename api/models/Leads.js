/**
 * Leads.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	attributes:{
		lead_name:{
			required:true,
			type:'string',
			// unique: true
		},
		contact:{
			type: 'integer',
			required:true,
		},
		comment:{
			type:"string"	
		},
		campaign:{
			type:"json"
			// model: 'lead_campaign_detail',
			// via: "lead_model"
		}
	},
	autoUpdatedAt:false,
	autoCreatedAt:false
};
