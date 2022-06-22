/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];

let obj = Object.entries(foo)
let length = obj.length;

for (let idx = 0; idx < length; idx ++) {
    result.push([obj[idx]])
}


//export result
module.exports = result; 