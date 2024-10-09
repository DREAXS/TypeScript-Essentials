// 1. `any` türü, TypeScript'te bir değişkenin herhangi bir türde değer almasını sağlar.
// 2. Bu, dinamik bir tip sistemine izin verir.

let someThing: any = "Hello";
someThing = 45;
someThing = true;
someThing = {
  firstName: "Alper",
  lastName: "Bilgin",
};
console.log(someThing);

let arr: any[] = ["A", 1, true];
console.log(arr);
