// Arrays = variables that hold multiple values

const numbers = new Array(1,2,3,4,5,6,7,8);
console.log(numbers);

const fruits = ['appples', 'oranges', 'pears' ];
console.log(fruits);
console.log(fruits[1]);

fruits[3] = 'grapes';
console.log(fruits[3]);

fruits.push('mangoes');

fruits.unshift('strawberries');

fruits.pop();

console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('oranges'));