Uberblic
========

[Uberblic] is a platform to connect the entity graph across the web and make it available through a simple API.

This package exposes it in node, and will rock your face off.

Example:

    uberblic.rock({ face: 'off' });

Wait, let me try that again:

    var uberblic = require('uberblic'),
      , util = require('util');

    uberblic.search('Berlin', function(response) {
        for (i in response) {
            util.puts(response[i].label + ': ' + response[i].uri);
        }
    });

Or, if you're groovy with the [coffeescript]:

    uberblic = require('uberblic')
    util = require('util')

    uberblic.search 'Berlin', (response) ->
        util.puts el.label + ': ' + el.uri for el in response

Install with [npm]:

    npm install uberblic

WHAT ARE YOU WAITING FOR

[Uberblic]: http://www.uberblic.org/
[coffeescript]: http://jashkenas.github.com/coffee-script/
[node]: http://nodejs.org/
[npm]: http://npmjs.org/
