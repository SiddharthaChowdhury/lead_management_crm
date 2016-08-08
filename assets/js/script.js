//	~~~ LIBRARY ~~~~~
	function _(x){return document.getElementById(x);}
	var count = 0;
//	~~~~~~~~~~~~~~~~~~~


// DASHBOARD 
										//(create new branch)
$('.jq_new_branch').click(function(e){
	e.preventDefault();
	var container = $('#si_new_branches');
	var clone = $('.si_new_block').clone().first()
	clone.find('.form-control').empty();
	count++;
	if( clone.hasClass('hide-this') ) clone.removeClass('hide-this')
	clone.find('span').text(count)
	container.append(clone);
});


