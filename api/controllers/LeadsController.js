/**
 * LeadsController.js
 *
 */

var moment = require('moment');

module.exports = {
	create_lead_api:function(req, res){
		var filter = req.params.all();
		var params = {
			"_id" : moment().unix(),
		    "lead_name": filter.lead_name,
		    "contact": filter.contact,
		    "comment": filter.comment,	
		    "campaign":
		    [ 
		    	{
			        "campaign_id": filter.campaign.campaign_id,
			        "campaign_name": filter.campaign.campaign_name,
			        "category": filter.campaign.category,
			        "sub_category": filter.campaign.sub_category,
			        "product_name": filter.campaign.product_name,
			        "product_id": filter.campaign.product_id,
			        "lead_src": filter.campaign.lead_src,
			        "URL": filter.campaign.URL,
			        "lead_clicked_on": filter.campaign.lead_clicked_on,
			        "lead_owner": filter.campaign.lead_owner,
			        "status": filter.campaign.status,
			        "last_action_date": filter.campaign.last_action_date
				}
			]
		};

		Leads.count({"lead_name": filter.lead_name}, function(err, count){
			if(err) return res.negotiate(err);
			else{
				if(count > 0){
					Leads.native(function(err, collection) {
					    if (err) return res.negotiate(err);
						collection.update(
							{ lead_name: filter.lead_name },
							{
								$push :{
									campaign : params.campaign[0]
								}
							},
							function(err, updt){
								if(err) return res.negotiate(err)
								else return res.json(updt)
							}
						);
					});
				}
				else{
					Leads.create(params, function(err, resp){
						if(err) return res.negotiate(err);
						else
							return res.json(resp);
					});
				}
			}
		})
			
	},

	// // 													// Find value inside an array of an other index
	// create_lead_api:function(req, res){
		
	// 		// {
	// 		// 	"_id" : 1469440259,
	// 		// 	"name" : "Siddhartha13",
	// 		// 	"phone" : 900,
	// 		// 	"comment" : "This is a comment",
	// 		// 	"campaign" : [
	// 		// 		{
	// 		// 			"campaign_id" : 123454587,
	// 		// 			"name" : "Digital Marketting",
	// 		// 			"category" : "Marketting",
	// 		// 			"sub_category" : "Digital",
	// 		// 			"product_name" : "no product",
	// 		// 			"product_id" : 5417,
	// 		// 			"lead_src" : "Google",
	// 		// 			"URL" : "http://localhost/digitalmarketing",
	// 		// 			"lead_clicked_on" : "General enquiry",
	// 		// 			"lead_owner" : "Siddhartha Chowdhury",
	// 		// 			"status" : "Unhandled",
	// 		// 			"last_action_date" : "2016-09-12"
	// 		// 		}
	// 		// 	]
	// 		// }

	// 	var idd = 123454587; 
	// 	Leads.native(function(err, collection) {
	// 	    if (err) return res.negotiate(err);
	// 	    collection.find().forEach(function (x) {
	// 		    x.campaign.forEach(function (y) {

	// 		        if (y.campaign_id == idd ) {
	// 		            return res.json(x)
	// 		        }
	// 		        else
	// 		        	return res.json("not found")
	// 		    })
	// 		})
	// 	});
	// },
};

