// 1. `any` türü, TypeScript'te bir değişkenin herhangi bir türde değer almasını sağlar.
// 2. Bu, dinamik bir tip sistemine izin verir.
var someThing = "Hello";
someThing = 45;
someThing = true;
someThing = {
    firstName: "Alper",
    lastName: "Bilgin",
};
console.log(someThing);
var arr = ["A", 1, true];
console.log(arr);
