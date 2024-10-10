// 1. Tip Çıkarımı Nedir?
// TypeScript, değişkenlerin tiplerini otomatik olarak belirleyebilir. Bu,geliştiricinin her değişken için tip belirtmesine gerek kalmadan yapılır.

// 2. Değişken Tanımlarken İlk Değer Belirtmek
// Eğer bir değişken tanımlanırken bir başlangıç değeri verilirse, TypeScript bu değere göre tip çıkarımı yapar.

let sayac = 0;
// let sayac : number = 0;

// sayac değişkeninin tipini konsola yazdırıyoruz
console.log(typeof sayac);

// function increment (counter : number){
//     return counter++; // counter'ı arttırıp döndürüyoruz (önce döner, sonra arttırır)
// }

// "increment " fonksiyonu number tipinde değer alır ve number tipinde değer döndürür.
function increment(counter: number): number {
  return counter++;
}

// let a ="text";
// let b = 1234 ;
// a=b; // a değişkenine b'yi atamaya çalışıyoruz (tip uyuşmazlığı)

function sum(a: number, b: number) {
  return a + b;
}

let total: number = sum(10, 15);
// sum fonksiyonunun sonucunu string tipinde bir değişkene atamaya çalışıyoruz (tip uyuşmazlığı)
// let totalSum:string= sum(10,15);
