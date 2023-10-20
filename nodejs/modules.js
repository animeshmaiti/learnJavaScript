// const {hello,bye} = require('./module1');//common js

import greeting,{hello,bye} from './module2.js';//ES6 module syntax
hello();
bye('Shyam');
greeting();