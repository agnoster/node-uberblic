var util = require('util')
  , url = require('url')
  , request = require('request');

var uberblic = module.exports = function() {
	var formatURL = function (method, opts) {
		return url.format({
			protocol: 'http:',
			host: 'beta2.uberblic.com',
			pathname: '/api/v2/' + method,
			query: opts
		});
	};

	var search = function(opts, callback) {
		if (typeof opts !== 'object') opts = { query: opts };
		var uri = formatURL('search', opts);
		request({ uri: uri }, function(error, response, body) {
			data = JSON.parse(body);
			callback(data.results);
		});
	};

	var lookup = function(opts, callback) {
		if (typeof opts !== 'object') opts = { q: opts };
		var uri = formatURL('lookup', opts);
		request({ uri: uri }, function(error, response, body) {
			data = JSON.parse(body);
			callback(data.fused_resource);
		});
	};

	var resource = function(opts, callback) {
		if (typeof opts !== 'object') opts = { guid: opts };
		var uri = 'http://beta2.uberblic.com/resource/'+opts.guid+'.json';
		util.puts(uri);
		request({ uri: uri }, function(error, response, body) {
			data = JSON.parse(body);
			callback(data);
		});
	};

	var rock = function(rockables) {
		for (thing in rockables) {
			util.puts("Rocking " + thing + " " + rockables[thing]);
		}
	};

	return {
		search: search,
		lookup: lookup,
		resource: resource,
		rock: rock
	};
}();
