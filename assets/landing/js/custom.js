window.onload = function(){

	$('#jq_create_tree_form').validate({
		rules: {
			tree: 'required',
			admin_name: 'required',
			admin_email:{
				required: true,
				email: true
			},
			admin_phone:{
				required: true,
			    digits: true,
			    minlength: 8,
			},
			password:{
				required:true
			}
		}
	});
}