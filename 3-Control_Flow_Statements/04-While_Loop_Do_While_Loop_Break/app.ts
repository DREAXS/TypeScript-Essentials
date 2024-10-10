// `while` döngüsü, belirli bir koşul doğru olduğu sürece kod bloğunu tekrar etmek için kullanılır.
// Koşul her döngü başlangıcında kontrol edilir.
// `while` döngüsü, koşul sağlandığı sürece çalışır.
// Eğer koşul baştan yanlışsa, döngü hiç çalışmaz.
// Döngü içinde koşulu değiştiren bir ifade olmalıdır, aksi takdirde sonsuz döngü oluşur.
// Eğer döngü içinde koşulu etkileyen bir değişiklik olmazsa, sonsuz döngü meydana gelir.
// `break`, döngüyü sonlandırmak için, `continue` ise mevcut iterasyonu atlamak için kullanılır.

let counter = 10;

while (counter < 5) {
  console.log(counter);
  counter++;

  if (counter == 3) {
    break;
  }
}

do {
  console.log(counter);
  counter++;
} while (counter < 5);
