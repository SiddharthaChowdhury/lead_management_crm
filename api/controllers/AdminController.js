
module.exports = {

	dash_view: function(req, res){
		return res.view('superadmin/dashboard', {message:'Success! Institute created, '+req.session.user.admin.name+' is admin.' });
	},

};