/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  if (req.session.authenticated && req.session.user.type == 'super_admin') {
    	return next();
  }
  else
  {
  		req.session.destroy();
  		res.view('static/landing',{layout:'layout-landing', message:'Error! You are not authorized to access the page!'})
  		return;
  }

};
