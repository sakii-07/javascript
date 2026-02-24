import {a,b,show} from "./demo1.js"
import {c} from "./demo2.js"
import {a as d} from "./demo3.js"

// when there are multiple variables then import all variables as * 
// for example , * as e

import * as e from "./demo1.js"
e.show()

console.log(a)
console.log(b);
console.log(c);
console.log(d);


show()

