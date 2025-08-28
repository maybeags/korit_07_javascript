let fruits = ['사과', '바나나', '키위'];
console.log(fruits.toString());
// 결과값 : 사과,바나나,키위

console.log(fruits.join('/'));
// 결과값 : 사과/바나나/키위

let lastFruit = fruits.pop();
console.log(lastFruit);
// 결과값 : 키위
console.log(fruits);
// 결과값 : ['사과', '바나나']

let firstFruit = fruits.shift();
console.log(firstFruit);
// 결과값 : 사과
console.log(fruits);
// 결과값 : ['바나나']

// unshift()
console.log(fruits.unshift('레몬')); // 결과값 : 2
console.log(fruits);
// 결과값 : ['레몬', '바나나']

// splice()
let fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'] ;
fruits2.splice(2, 0, 'Lemon', 'Kiwi');
console.log(fruits2);
// 결과값 : ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

