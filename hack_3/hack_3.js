/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

let idx = 0;
let length = arr.length;

while (idx < length) {
    const actualKey = Object.keys(arr[idx]);
    result.push(arr[idx][actualKey])
    idx ++;
}

result.splice(1, 1);
result.splice(2, 1);

//export result
module.exports = result; 