test("when clicking button hide shown div", function() {
	
	$('#qunit-fixture').append($('<div id="shown"></div>'));
	$('#qunit-fixture').append($('<button id="toggleButton">Toggle</button'));
	
	$('#toggleButton').toggler({ el: '#shown' });
	$('#toggleButton').click();
	
	equal($('#shown').css('display'), 'none', 'Shown should not be displayed');
});


test("when clicking button show hidden div", function() {
	
	$('#qunit-fixture').append($('<div id="hidden" style="display:none"></div>'));
	$('#qunit-fixture').append($('<button id="toggleButton">Toggle</button'));
	
	$('#toggleButton').toggler({ el: '#hidden' });
	$('#toggleButton').click();
	
	equal($('#hidden').css('display'), 'block', 'Hidden should be displayed');
});


test("when item to hide is in specified container should hide item", function () {
	
	$('#qunit-fixture').append($('<div id="container"><div id="shown"></div></div>'));
	$('#qunit-fixture').append($('<button id="toggleButton">Toggle</button'));
	
	$('#toggleButton').toggler({ el: '#shown', container: '#container' });
	$('#toggleButton').click();
	
	equal($('#shown').css('display'), 'none', 'Shown should not be displayed');
});


test("when item to hide is not in specified container should not hide item", function () {
	
	$('#qunit-fixture').append($('<div id="container"></div><div id="shown"></div>'));
	$('#qunit-fixture').append($('<button id="toggleButton">Toggle</button'));
	
	$('#toggleButton').toggler({ el: '#shown', container: '#container' });
	$('#toggleButton').click();
	
	equal($('#shown').css('display'), 'block', 'Shown should still be displayed');
});


test("when shown div is hidden adds blah class", function() {
	$('#qunit-fixture').append($('<div id="shown></div>"'));
	$('#qunit-fixture').append($('<button id="toggleButton">Toggle</button'));
	
	$('#toggleButton').toggler({ 
		el: '#shown', 
		hide: function() {
			$('#toggleButton').addClass('blah')
		}
	});
	$('#toggleButton').click();


	ok($('#toggleButton').hasClass('blah'), 'Button should have blah class');
});


test("when hidden div is shown adds blah class", function() {
	$('#qunit-fixture').append($('<div id="hidden" style="display:none"></div>'));
	$('#qunit-fixture').append($('<button id="toggleButton">Toggle</button'));
	
	$('#toggleButton').toggler({ 
		el: '#hidden', 
		show: function() {
			$('#toggleButton').addClass('blah')
		}
	});
	$('#toggleButton').click();

	ok($('#toggleButton').hasClass('blah'), 'Button should have blah class');
});