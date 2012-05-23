(function( $ ) {
	$.fn.extend({ 
		decimalZeroPrepend: function() {

			return this.each(function() {
				$(this).keyup(function(e) {
					if(e.which == 190 || e.which == 110) {
						if ($(this).val().indexOf('.') == 0) {
							$(this).val('0' + $(this).val());
						} 
					}
				});
				
				$(this).live('change', function() {
					if ($(this).val().indexOf('.') == 0) {
						$(this).val('0' + $(this).val());
					} 
				});
		
			});
		}
	});
})(jQuery);