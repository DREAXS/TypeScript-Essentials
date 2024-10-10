// `for` döngüsü, belirli bir koşul sağlandığı sürece kod bloğunu tekrar etmek için kullanılır.
// Genellikle diziler veya belirli bir sayıda tekrarlama için idealdir.
// For döngüsünün genel yapısı üç bölümden oluşur:
// a. Başlangıç: Döngü değişkeninin tanımlandığı yerdir.
// b. Koşul: Döngünün ne zaman devam edeceğini belirler.
// c. Artış: Her döngü döngü değişkeninin nasıl değişeceğini belirtir.
for (var i = 0; i < 3; i++) {
    console.log("i degerim", i);
}
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
var str = "Alper Bilgin";
for (var item in arr) {
    console.log(item);
}
// `for...of`, diziler gibi iterable nesneleri döngü ile gezmek için kullanılır.
var fruits = ["elma", "muz", "portakal"];
for (var _a = 0, fruits_1 = fruits; _a < fruits_1.length; _a++) {
    var fruit = fruits_1[_a];
    console.log(fruit); // her meyve ismini yazdırır
}
