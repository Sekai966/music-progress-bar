# progress-bar
a simple flexiable progress bar

# Results
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

# V 1.0.2 is Here with changes
See [Changelog](CHANGELOG.md) !

## Features
* Easy to use.
* Fast.
* You can change everything [style, witdh, ...].


## Requirements

* Nothing ;)


## Changelog

See [Changelog](CHANGELOG.md) !

### Supports :
* node.js


## Configuration
```
const { porgressBar } = require("music-progress-bar");

console.log(porgressBar({Options},{Settings}));
```

### Some Examples
```
console.log(mp.porgressBar({currentPositon:1,endPositon:10,width:10,barStyle:"=",currentStyle:"*"}, {}));
```

### Options

These are keys in the options object you can pass to the progress bar along with.

- `currentPositon` Timestamp (3000) , `type : Timestamp`.
- `endPositon` Timestamp (30000), `type : Timestamp`.
- `width` the displayed width of the progress bar defaulting to `20`, `type : Number`.
- `barStyle` the displayed bar style defaulting to `▬`, `type : String`.
- `currentStyle` the displayed current postion style defaulting to `🔘`, `type : String`.


## Setttings {}

- `format` Re desing the progress bar on your preferences.
``` 
porgressBar({start:1,end:10,width:10,bodyStyle:"=",currentStyle:"*"}, {format:" [ <bar> ] <precent> hi <%>"}) ==> [ ===*====== ] 3 hi %
```
- `endOnCurrent` Ends the progress bar when the current postion is reached.
```
without endOnCurrent
% 66 [=====*====]

with endOnCurrent
% 66 [=====*]
```
- `richBar` show precent and bar in a cool way `type : boolean`.
- `pattern` change bar pattern `type : string`.

### Settings-options

* `format :`
- `<bar>` The progress bar.
- `<nocurrentbar>` the no current postion progress bar.
- `<precent>` The progress in %.
- `<%>` The % symbol.
- `<box>` The box bar !!

* `endOnCurrent`
- `true` Enables endOnCurrent.

* `richBar :`
- `true` Enables richBar.

* `pattern :`
- `box` replaces the normal progress bar with a progress box xD.
