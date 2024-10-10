// `if` ifadesi, bir koşulu kontrol etmek için kullanılır.
// Eğer koşul doğruysa, ilgili kod bloğu çalıştırılır.
// `else if`, birden fazla koşul kontrol etmek için kullanılır.
// İlk koşul yanlışsa, `else if` bloğu kontrol edilir.
// `else`, yukarıdaki koşulların hiçbiri doğru değilse çalışacak kod bloğunu belirtir.
var x = 15;
var y = 20;
if (x > y) {
    console.log("X Y'den büyüktür.");
}
else if (x < y) {
    console.log("X Y'den küçüktür.");
}
else {
    console.log("X ve Y birbirine eşittir.");
}
// x>y ? console.log("X Y'den büyüktür") : console.log("X Y'den küçüktür veya eşittir")
