// 1. Tuple, belirli sayıda elemandan oluşan bir veri yapısıdır.
// 2. Her bir elemanın farklı türlerde olabileceği bir yapı sağlar.
// 3. Genellikle bir grup değeri bir arada tutmak için kullanılır.
// 4. TypeScript, tuple elemanlarının türlerini tanımlayarak tip güvenliğini artırır.
var Id = 1;
var instructorName = "Alper";
var instructor = [1, "Alper"];
var user;
user = [1, "Alper", true, 20, "Admin"];
console.log(instructor, user);
var employee;
employee = [
    [1, "A"],
    [2, "B"],
    [3, "C"],
];
console.log(employee);
