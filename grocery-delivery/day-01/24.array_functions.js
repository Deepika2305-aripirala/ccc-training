let arr = [1,2,3,4,5];
arr.push(6);
console.log(arr.pop()); // removes last element
console.log(arr.shift()); //removes first element
console.log(arr); 
arr.unshift(1); //adds at beginning
console.log(arr);
console.log(arr.includes(2)) // check if elements exists
console.log(arr.indexOf(5)) //finds index
console.log(arr.reverse()) // reverses the array
console.log(arr.sort()) // sorts the array
console.log(arr.concat([6,7,8])) // merges array
console.log(arr.join("-")) // convert array to string
let doubled = arr.map(num => num * 2); //to transform
console.log(doubled);
let even = arr.filter(num => num % 2 === 0); // to filter the elements based on condition
console.log(even);
let value = arr.find(num => num > 3); //to find first match
console.log(value);
let sum = arr.reduce((total, num) => total + num, 0); //reduce to single value
console.log(sum);