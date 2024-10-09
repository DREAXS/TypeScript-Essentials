// 1. Tuple, belirli sayıda elemandan oluşan bir veri yapısıdır.
// 2. Her bir elemanın farklı türlerde olabileceği bir yapı sağlar.
// 3. Genellikle bir grup değeri bir arada tutmak için kullanılır.
// 4. TypeScript, tuple elemanlarının türlerini tanımlayarak tip güvenliğini artırır.

let Id: number = 1;
let instructorName: string = "Alper";

let instructor: [number, string] = [1, "Alper"];

var user: [number, string, boolean, number, string];
user = [1, "Alper", true, 20, "Admin"];

console.log(instructor, user);

let employee: [number, string][];
employee = [
  [1, "A"],
  [2, "B"],
  [3, "C"],
];
console.log(employee);
