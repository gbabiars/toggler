(function($) {
	
	$.fn.toggler = function(options) {
		
		return this.each(function() {		

			$this = $(this);
			
			$this.on('click', function(e) {
				
				e.preventDefault();
				
				var $el = options.container ? $(options.container).find(options.el) : $(options.el);

				if($el.css('display') === 'none') {
					$el.show();
					if(options.show) {
						options.show();
					}
				} else {
					$el.hide();
					if(options.hide) {
						options.hide();
					}
				}
			});
			
		});
		
	};
	
}(jQuery))