// 1. `never`, asla bir değer döndürmeyecek olan fonksiyonları belirtmek için kullanılan bir türdür.
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
throwError("Hata");
//    - Sonsuz bir döngüde kalan bir fonksiyon da `never` türünde olabilir.
//      function infiniteLoop(): never {
//        while (true) {}
//      }
//  - `void`: Bir fonksiyonun değer döndürmediğini belirtirken, `never` bu fonksiyonun asla sonuçlanmayacağını ifade eder.
//  - `never`, `any` veya `unknown` türleriyle karşılaştırıldığında, daha katı ve güvenlidir; çünkü asla bir değer kabul etmez.
// let something: void = null;
// let nothing: never = null;
