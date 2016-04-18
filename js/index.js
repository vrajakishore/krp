wow = new WOW();
wow.init();

$(document).ready(function() {
	 
	 		/**
	 		 * check if the input has any value (if we've typed into it)
	 		 */
	 		$('.form__input').blur(function() {

				if ($(this).val()) {
					$(this).closest( '.form__wrapper' ).addClass('form--filled');
				} else {
					$(this).closest( '.form__wrapper' ).removeClass('form--filled');
				}	
			});

	 		/**
	 		 * Form validation
	 		 */
			$('.form').validate({
				rules : {
					password: {
						minlength: 5
					}
				}
			}); 

			/**
			 * Form2 validation
			 */
			$('.form2').validate();


			/**
			 * Simple Modal
			 */
			$('.modal__toggle').on('click', function (e) {
	  			e.preventDefault();
				$('.modal').toggleClass('modal--open');
			});	
});