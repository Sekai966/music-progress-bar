# music-progress-bar
a simple flexiable music progress bar

# Result
* ======*===============
* ======/===============
* ======x===============
* ======x=====
* xxxxxx*xxxxxxxxxxxxxxx
* xxxxxx*xxxxxx


## Features
* Easy to use
* Fast
* You can change everything [style, witdh, ...]


## Requirements

* Nothing


## Changelog

Please see [here](CHANGELOG.md)

### Supports :
* node.js


## configuration
`
const { porgressBar } = require("music-progress-bar");

console.log(porgressBar(current pos, ending pos, bar width, "time line style", "Current time style"));
`

### Options

These are keys in the options object you can pass to the progress bar along with

- `start` Timestamp (3000)
- `end` Timestamp (30000)
- `width` the displayed width of the progress bar defaulting to `20`
- `bodyStyle` the displayed time line style defaulting to `=`
- `currentStyle` the displayed current postion style defaulting to `*`
