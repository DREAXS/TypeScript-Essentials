// `for` döngüsü, belirli bir koşul sağlandığı sürece kod bloğunu tekrar etmek için kullanılır.
// Genellikle diziler veya belirli bir sayıda tekrarlama için idealdir.
// For döngüsünün genel yapısı üç bölümden oluşur:
// a. Başlangıç: Döngü değişkeninin tanımlandığı yerdir.
// b. Koşul: Döngünün ne zaman devam edeceğini belirler.
// c. Artış: Her döngü döngü değişkeninin nasıl değişeceğini belirtir.

for (let i = 0; i < 3; i++) {
  console.log("i degerim", i);
}

let arr = [10, 20, 30, 40];

for (let item of arr) {
  console.log(item);
}

let str = "Alper Bilgin";

for (let item in arr) {
  console.log(item);
}

// `for...of`, diziler gibi iterable nesneleri döngü ile gezmek için kullanılır.

const fruits = ["elma", "muz", "portakal"];

for (const fruit of fruits) {
  console.log(fruit); // her meyve ismini yazdırır
}
