uberblic = require('uberblic')
util = require('util')

uberblic.search 'Berlin', (response) ->
    util.puts el.label + ': ' + el.uri for el in response

uberblic.rock face: "off"
