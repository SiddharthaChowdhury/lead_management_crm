//RegisterController
var moment = require('moment');
var bcrypt = require('bcrypt-nodejs');
module.exports = {
	create_tree:function(req, res){
		if( !req.param('tree') || !req.param('admin_name') || !req.param('admin_phone') || !req.param('admin_email') || !req.param('password') )
			return res.view('static/create_tree',{layout:'layout-landing', message:'Error! Form inputs are missing.'});
		var doc = {
			"institute_name": req.param('tree'),
			"institute_id": moment().unix(),
			"admin":{
				"name": req.param("admin_name"),
				"phone": req.param("admin_phone"),
				"email": req.param("admin_email"),
				"password": bcrypt.hashSync(req.param("password"))
			},
			"activated":false,
			"type" : "super_admin"
		};

		Institutes.count({"institute_name": doc.institute_name}, function(err, count){
			if(err) return res.negotiate(err);
			else
			{
				if(count > 0)
					return res.view('static/create_tree',{layout:'layout-landing', message:'Error! Team name already exists!'});
				else{
					Institutes.create(doc, function(err, inst){
						if(err) return res.negotiate(err);
						else{
							// make him login to admin dashboard
							req.session.authenticated = true;
							req.session.user = doc;
							res.redirect('/super/admin/dashboard');
							// return res.view('static/create_tree',{layout:'layout-landing', message:'Success! Institute created '+doc.admin.name+' is admin.', step:2 });
						}
					});
				}
			}
		})
	}
}