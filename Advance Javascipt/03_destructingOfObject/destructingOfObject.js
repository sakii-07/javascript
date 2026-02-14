// Destructing of object
`Object destructuring means taking values from an object and storing them 
into variables easily using their property names.`

var obj = {id:101, name:"sakshi", age:21}

var {id, name, age} = obj

// rename the key
 var{id, name:empName} = obj