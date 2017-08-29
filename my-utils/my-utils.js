var myUtils = myUtils || {};

(function() {
	
	// Add Object.create() function
	if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
    }
}
	myUtils = {
		
	};
	
	
})
