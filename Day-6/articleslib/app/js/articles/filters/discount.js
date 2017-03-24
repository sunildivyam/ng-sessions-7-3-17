var discountFunc = function() {
	return function(input, discountPercent) {
		if (typeof input !== 'number') {
			return;
		}

		if (typeof discountPercent !== 'number' || discountPercent <= 0) {
			return input;
		}

		return input - (discountPercent * input)/100;

	};
};
discountFunc.$inject = [];
module.exports = discountFunc;
