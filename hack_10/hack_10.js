/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

result = Object.assign({}, foo)

let newName = result.name;
result.name = newName[0].toUpperCase() + newName.slice(1);



result.roles.push(roleSuperUser, roleUser);
let newRoles = result.roles[0];
result.roles[0] = newRoles.toUpperCase();



let newSkills = result.skills;
newSkills.splice(0, 0, skills[0], skills[1]);
newSkills.splice(5, 0, skills[2]);
newSkills.push(skills[3]);

/*
result.skills = newSkills.map (function (newSkills) {
    newSkills.charAt(0).toUpperCase() + newSkills.slice(1);
})
*/
result.skills = newSkills.map(newSkills => newSkills.charAt(0).toUpperCase() + newSkills.slice(1));
result.skills[3] = newSkills[3].toUpperCase();
result.skills[4] = newSkills[4].toUpperCase();



let idx = 0; 

for (idx in levels) { 
    levels[idx].LEVEL = levels[idx].LEVEL.replace("l-", "L");
    result.levels = levels;
}


delete result.alias;

console.log(newSkills)
console.log(result)

//export result
module.exports = result; 