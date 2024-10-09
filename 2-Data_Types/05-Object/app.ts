// 1. Nesne, anahtar-değer çiftlerini içeren bir yapıdır.
// 2. Anahtarlar (key), genellikle string türündedir ve değeri (value) herhangi bir türde olabilir.
// 3. TypeScript, nesnelerin türlerini tanımlamak için `interface` veya `type` kullanmanıza olanak tanır.

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

let instrustor: Person;

instrustor = {
  firstName: "Alper",
  lastName: "Bilgin",
  age: 21,
  jobTitle: "Computer Engineer",
};

let person: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
};

person = {
  firstName: "X",
  lastName: "Y",
  age: 0,
  jobTitle: "Z",
};

console.log(instrustor);
console.log(instrustor.firstName + " " + instrustor.lastName);
