var util = require('util')
  , request = require('request');

var uberblic = module.exports = function() {
	var search = function(query, opts, callback) {
		util.puts("Q: " + query);
		var url = "http://platform.uberblic.org/api/v1/search?query=" + query;
		request({uri: url}, function(error, response, body) {
			//util.puts(JSON.stringify(response));
			callback(JSON.parse(body).results);
		});
		//callback({ "BLA": "OFOOO" });
	};

	return {
		search: search
	};
}();
