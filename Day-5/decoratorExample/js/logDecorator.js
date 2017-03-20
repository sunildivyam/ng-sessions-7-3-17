angular.module('decoratorExample')
.decorator('$log', ['$delegate', function($delegate) {
	var newLogServiceObj = {
		types: ['log', 'info', 'warn', 'error', 'debug'],
		log: function(msg) {
			logMsg(msg, 'log');
		},
		info: function(msg) {
			logMsg(msg, 'info');
		},
		warn: function(msg) {
			logMsg(msg, 'warn');
		},
		error: function(msg) {
			logMsg(msg, 'error');
		},
		debug: function(msg) {
			logMsg(msg, 'debug');
		},
		stack: []
	};

	function logMsg(msg, type) {
		newLogServiceObj.stack.push({type: type, message: msg.toString()});
		if ($delegate && $delegate[type]) {
			$delegate[type](msg);
		}
	}

	return newLogServiceObj;
}]);