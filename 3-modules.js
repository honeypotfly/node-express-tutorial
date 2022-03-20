// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated Code (only share the minimum)

// Refer to 4-names.js and 5-utils.js for the modules we import
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-module')
require('./7-mind-grenade')

//console.log(data)
//sayHi('susan')
//sayHi(names.john)
//sayHi(names.peter)