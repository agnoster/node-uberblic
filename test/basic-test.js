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

var foo = uberblic.search("Berlin", {}, tester);
