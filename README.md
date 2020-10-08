# music-progress-bar
a simple flexiable music progress bar

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

console.log(porgressBar(10, 30, 20, "=", "*"));

`

## docs
porgressBar(inputs)

inputs 
(current pos, ending pos, bar width, "time line style", "Current time style")
