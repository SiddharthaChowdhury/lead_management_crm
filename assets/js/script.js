//	___________ LIBRARY ___________________________________________________________________________________________
//
//							This section contains a set of functions that are independent to any call
//
//	___________ LIBRARY ___________________________________________________________________________________________

	function _(x){return document.getElementById(x);}
	var count = 0;

				// MAP + location ------------------------------------------------
	//<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDbgFepltqsSw8FxQauYO8pmWjAXjPKVuQ&libraries=places" defer></script>
	function sid_nsna_loadAddress_pl3() {
	    // console.log(autocomplete.getPlace());
	    // Get the place details from the autocomplete object.
	    var place = autocomplete.getPlace();

	    pipulateAddress(place.address_components);

	    // $('.lat').text(autocomplete.getPlace().geometry.location.lat())
	    // $('.lng').text(autocomplete.getPlace().geometry.location.lng())

	    $('#lat').val(autocomplete.getPlace().geometry.location.lat())
	    $('#lng').val(autocomplete.getPlace().geometry.location.lng())
	    $('.formatted_address').text(autocomplete.getPlace().formatted_address)
	}

//-------------------------------- LIBRARY ENDS -----------------------------------------------
//_________________________________            ________________________________________________
//_________________________________CUSTOM CODES________________________________________________

// // DASHBOARD 

$(document).ready(function(){

	if( $('#modal_newInstitute').length > 0 ){

		var address = document.getElementsByClassName('si_getLocation');
		var options = {
	        componentRestrictions: {
	        	// types: ['geocode'],
	            country: 'in'
		    }
	    };
	    var autocomplete = [];

			// 										//(create new branch)
		$('.jq_new_branch').click(function(e){
			e.preventDefault();
			var container = $('#si_new_branches');
			var clone = $('.si_new_block').clone().first()
			clone.find('.form-control').empty();
			count++;
			if( clone.hasClass('hide-this') ) clone.removeClass('hide-this')
			clone.find('span').text(count)
			// address.push( clone.find('.si_getLocation')[0] )
			autocomplete.push(new google.maps.places.Autocomplete(clone.find('.si_getLocation')[0], options));
			register_place_changed(container, clone);
			// container.append(clone);
		});

		function register_place_changed(container, clone){
			for( var i in autocomplete ){
				google.maps.event.addListener(autocomplete[i], 'place_changed', function() {
					var ato_cmplt = autocomplete[i];
					clone.find('.lat').val(ato_cmplt.getPlace().geometry.location.lat())
				    clone.find('.lng').val(ato_cmplt.getPlace().geometry.location.lng())
				    clone.find('.formatted_address').text(ato_cmplt.getPlace().formatted_address)
			    });
			}
			container.append(clone);
		}
	}

})
