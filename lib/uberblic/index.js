var util = require('util')
  , url = require('url')
  , request = require('request');

var uberblic = module.exports = function() {
	var formatURL = function (method, opts) {
		return url.format({
			protocol: 'http:',
			host: 'platform.uberblic.org',
			pathname: '/api/v1/' + method,
			query: opts
		});
	};

	var search = function(opts, callback) {
		if (typeof opts !== 'object') opts = { query: opts };
		var uri = formatURL('search', opts);
		util.puts(uri);
		request({ uri: uri }, function(error, response, body) {
			data = JSON.parse(body);
			callback(data.results);
		});
	};

	var rock = function(rockables) {
		for (thing in rockables) {
			util.puts("Rocking " + thing + " " + rockables[thing]);
		}
	};

	return {
		search: search,
		rock: rock
	};
}();
