# DOS/386 Loading Animation

Based off of [BOOTSTRA.386](https://github.com/kristopolous/BOOTSTRA.386), a Bootstrap theme by [Chris McKenzie](https://github.com/kristopolous). I thought that the screen loading animation was cool and wanted to make a seperate lightweight version.

## Getting Started

Import the package and styles into wherever your code creates HTML and run the `init386()` function.

```javascript
import init386 from '386-animation';
import '386-animation/386.css';
```
or
```javascript
var init386 = require('386-animation');
require('386-animation/386.css);
```

Then initialize it!
```javascript
// Inside your code
init386();
```

The function also takes an object of options as a parameter.
```javascript
// Default options
init386({
  fastLoad: false // will skip the animation.
  speedFactor: 1 // the speed of the loading animation.
  background: '#000084' // CSS value for the body background before loading animation has compoleted
  cursorColor: '#FAFAFA' // The colour of the terminal cursor/bar.
});
```

### Installing

Simply add this package to your project using your package manager.

```
yarn add 386-animation
npm install 386-animation
```

## Built With

Pure vanilla JS!

## Authors

* **Chris McKenzie** - *Initial work* - [kristopolous](https://github.com/kristopolous)

* **Wesley Moses** [wes337](https://github.com/wes337)
