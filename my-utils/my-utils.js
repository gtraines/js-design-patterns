var MyUtils = MyUtils || {};

(function() {
	
	// Add Object.create() function
	if (typeof Object.create !== 'function') {
		Object.create = function (o) {
			var F = function () {};
			F.prototype = o;
			return new F();
		};
    }
    
    // Add a function for adding methods to the Function prototype obj
	Function.prototype.method = function (name, func) {
		this.prototype[name] = func;
		return this;
	};
    
    // Add curry function
    Function.method('curry', function() {
		var slice = Array.prototype.slice;
		var args = slice.apply(arguments); // arguments is an "array-like" until we apply the slice
		var that = this;

		return function() {
			return that.apply(null, args.concat(slice.apply(arguments)));
		};
	});
	
	MyUtils = {
		
	};
})


var Aop = {
  around: function(fnName, advice, fnObj) {
    var originalFn = fnObj[fnName];
    fnObj[fnName] = function () {
      return advice.call(this, {fn:originalFn, args:arguments});
    };
  },
  
  next: function(targetInfo) {
    return targetInfo.fn.apply(this,targetInfo.args);
  }
};

Aop.before = function(fnName, advice, fnObj) {
  Aop.around(fnName,
    function(targetInfo) {
      advice.apply(this,targetInfo.args);
      return Aop.next(targetInfo);
    },
    fnObj);
};
