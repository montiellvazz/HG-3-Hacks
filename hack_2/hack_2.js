/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
 
let length = arr.length;

for (let idx = 0; idx < length; idx ++) {
    let actualKey = Object.keys(arr[idx]);

    result.push(arr[idx][actualKey]);
}

result.pop()
result.shift()

//export result
module.exports = result;