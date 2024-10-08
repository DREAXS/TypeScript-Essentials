let firstNames: string[] = ["Alper", "Can", "Buse"];
// let firstNames: Array<string> = ['Alper', 'Can', 'Buse'];
console.log(firstNames);

let arr = [1, 3, "Apple", "Orange", "Banana", true, false];

let ids: Array<number>;
ids = [23, 34, 100, 124, 44];

let fruits: Array<string>;
fruits = ["Apple", "Orange", "Banana"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // output: Apple Orange Banana
}

// String ve ya Number tipli içerebilir

// let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana',true];
let values: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];
