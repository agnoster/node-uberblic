var uberblic = require('uberblic')
  , sys = require('sys')
  , util = require('util')
  ;

var tester = function(obj) {
	sys.puts(util.inspect(obj));
	for (i in obj) {
		sys.puts(i + ": '" + obj[i].label + "' " + obj[i].uri);
	}
	if (obj[0].uri == "http:\/\/uberblic.org\/resource\/4fcba759-966a-4e47-b920-43d7c5df3f1a#thing") {
		sys.puts("SUCCESS");
	} else {
		sys.puts("FAIL");
	}
};

var foo = uberblic.search({ query: "Berlin" }, tester);
var foo = uberblic.search("Berlin").on('complete', tester).on('error', ACK);

obj.click(fn).live('click', fn).bind('click', fn).on({success: fn,}
