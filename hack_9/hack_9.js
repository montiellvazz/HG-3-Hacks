/**
* en result, reflejar con un objeto literal la integración
* de los 2 objetos
*
* 
* output => {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"],
    alias:"Super Alias"
}
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};

let bar = {
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"],
    alias:"Super Alias"
}
let result;

const newElements = Object.assign(foo, bar);
result = newElements;

//export result
module.exports = result; 