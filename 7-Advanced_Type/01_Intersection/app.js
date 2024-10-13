// 1. Tanım: Intersection, iki veya daha fazla türü birleştirerek yeni bir tür oluşturur.
// 2. Söz Dizimi: "&" operatörü kullanılarak iki veya daha fazla tür birleştirilir.
// 3. Kullanım Amaçları: Farklı türlerin özelliklerini bir arada kullanmak için idealdir.
// 4. Örnek: `type A = { x: number }; type B = { y: string }; type C = A & B;` şeklinde tanımlanabilir.
// 5. Özellikler: Intersection türü, birleştirilen tüm türlerin özelliklerini içerir.
// 6. Uygulama: Bir fonksiyon, intersection türündeki nesneleri parametre olarak alabilir.
// 7. Esneklik: Birden fazla türü bir arada kullanarak daha karmaşık yapılar oluşturulabilir.
// 8. Tip Güvenliği: Intersection, belirli bir yapıya uygun nesnelerin kullanıldığından emin olmaya yardımcı olur.
// 9. Kullanım Alanları: Genellikle API yanıtları, veri modelleme ve bileşenlerin türlerini tanımlamak için kullanılır.
// 10. Örnek Kullanım: `function process(obj: A & B) { console.log(obj.x, obj.y); }` gibi fonksiyonlar tanımlanabilir.
// Employee nesnesi oluşturuluyor.
var employee = {
    id: 54,
    name: "Alper Bilgin", // Değiştirildi
    email: "sdasd@hotmail.com",
    phone: "345435345324",
};
// Employee nesnesini konsola yazdır.
console.log(employee);
// Customer nesnesi oluşturuluyor.
var customer = {
    credit: 2121,
    email: "asdas@hotmail.com",
    name: "Alper Bilgin", // Değiştirildi
    phone: "3423423324",
};
// Customer nesnesini konsola yazdır.
console.log(customer);
