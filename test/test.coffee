uberblic = require('uberblic')
util = require('util')

uberblic.search 'Berlin', (response) ->
    util.puts el.label + ':\t' + el.description.substr(0,70) + '...' for el in response

uberblic.lookup 'http://en.wikipedia.org/wiki/Berlin', (response) ->
    util.puts "\nFused resources for wikipedia/Berlin:"
    util.puts el.uri + ' -> ' + el.source_uri for el in response
    util.puts ""

uberblic.resource 'e44df6e8-6a7f-4358-84a1-59f0754f6634', (response) ->
    util.puts util.inspect response

uberblic.rock face: "off"


