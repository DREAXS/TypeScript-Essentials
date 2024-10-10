// // 1. Tip Assertion Nedir?
// // TypeScript'te, bir değişkenin tipini belirtmek için kullanılan bir yöntemdir.
// // Geliştirici, değişkenin belirli bir türde olduğunu bildiğinde
// // TypeScript'e bu bilgiyi iletebilir.
// let x: any = "123"; // x değişkeni any tipinde, başlangıç değeri string
// // 2. İki Yöntemle Tip Assertion
// // Tip assertion için iki farklı yöntem vardır:
// // a. "as" Anahtar Kelimesi
// let y = x as number; // x'i number tipine dönüştürüyoruz
// // b. Köşeli Parantez ile Assertion
// let z = <number>x; // Bu da x'i number tipine dönüştürüyor
// // 3. Tip Assertion Kullanım Senaryoları
// // Tip assertion, özellikle unknown veya any tipinde bir değişkenle çalışırken
// // doğru tipte olduğundan emin olduğunuzda kullanılır.
// let someValue: unknown = "Hello, TypeScript!";
// // Eğer someValue'nin bir string olduğunu biliyorsanız, aşağıdaki gibi kullanabilirsiniz:
// let strLength: number = (someValue as string).length; // string'e dönüştürerek uzunluğunu alıyoruz
// // 4. Hata Kontrolü
// // Tip assertion, derleme zamanında tip kontrolünü etkilemez,
// // bu nedenle yanlış bir assertion hataya yol açabilir.
// // Dikkatli kullanılmalıdır.
// let num: any = "not a number";
// // let number: number = <number>num; // Bu hata verir çünkü num bir string'dir
// // 5. Arayüz ve Nesne İçin Tip Assertion
// // Tip assertion, arayüz (interface) veya nesne yapılarında da kullanılabilir.
// interface User {
//   username: string;
//   age: number;
// }
// let userData = {} as User; // Boş bir nesneyi User tipine dönüştürüyoruz
// userData.username = "Ali"; // username özelliğini atıyoruz
// userData.age = 30; // age özelliğini atıyoruz
// // 6. Kullanım Önerileri
// // Tip assertion kullanırken, her zaman tipin doğruluğundan emin olun.
// // Aksi takdirde çalışma zamanında hatalarla karşılaşabilirsiniz.
var value = "TypeScript is great!";
// Doğru bir dönüşüm yapılmadığında hata alabilirsiniz.
var x = 123;
// x değişkenini number tipine dönüştürüyoruz (type assertion)
var y = x;
// x'in tipini konsola yazdırıyoruz (any olduğu için "number" olarak gösterir)
console.log(typeof x);
// Employee tipinde boş bir nesne oluşturuyoruz (type assertion ile)
var employee = {};
// employee değişkeninin tipini konsola yazdırıyoruz (object olarak gösterir)
console.log(typeof employee);
employee.name = "Alper";
employee.code = 12345;
// employee nesnesini konsola yazdırıyoruz (name ve code özellikleri ile birlikte)
console.log(employee);
