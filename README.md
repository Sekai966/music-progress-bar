# music-progress-bar
a simple flexiable music progress bar

# Result
* ======*===============
* ======/===============
* ======x===============
* ======x=====
* xxxxxx*xxxxxxxxxxxxxxx
* xxxxxx*xxxxxx
* %3 [xxxxxxx*xxxx]
* <xxxxxxx*xxxxx> 3%
* lovely progress bar here => xxxxxx*xxxxx
* lllllllllllllllllxlllllllllllll
* ▬🔘▬▬▬▬▬▬▬▬▬ [3%]
* ▬🔘▬▬▬▬▬▬▬▬▬ [00:00/02:26]
- And more !!

# V 1.0.0 is Here with big changes
see [here](CHANGELOG.md)

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


## Configuration
```
const { porgressBar } = require("music-progress-bar");

console.log(porgressBar({Options}));
```

### Some Examples
```
console.log(mp.porgressBar({start:1,end:10,width:10,bodyStyle:"=",currentStyle:"*"}, {}));
```

### Options

These are keys in the options object you can pass to the progress bar along with

- `start` Timestamp (3000) , `type : Timestamp`
- `end` Timestamp (30000), `type : Timestamp`
- `width` the displayed width of the progress bar defaulting to `20`, `type : Number`
- `bodyStyle` the displayed time line style defaulting to `▬`, `type : String`
- `currentStyle` the displayed current postion style defaulting to `🔘`, `type : String`


## Setttings ( {} )

- `format` Re desing the progress bar on your preferences 
``` 
porgressBar({start:1,end:10,width:10,bodyStyle:"=",currentStyle:"*"}, {format:" [ <bar> ] <precent> hi <%>"}) ==> [ ===*====== ] 3 hi %
```
- `richBar` show precent and bar in a cool way `type : boolean`
- `pattern` change bar pattern `type : string`

### Settings-options

* `format :`
- `<bar>` The progress bar
- `<precent>` The progress in %
- `<%>` The % symbol
- `<box>` The box bar !!

* `pattern :`
- `box` replaces the normal progress bar with a progress box xD
