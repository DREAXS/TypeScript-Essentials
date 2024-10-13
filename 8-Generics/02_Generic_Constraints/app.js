// 1. **Generik Fonksiyonlar**: `merge` fonksiyonu, TypeScript'in generik yapısını kullanarak iki nesneyi birleştiren bir fonksiyondur. `U` ve `V` generik tür parametreleri, herhangi bir nesne türünü temsil eder.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 2. **Nesne Birleştirme**: Fonksiyon, iki nesneyi alır ve bu nesnelerin tüm özelliklerini bir araya getirerek yeni bir nesne oluşturur. Bu işlem, JavaScript'in yaygın bir özelliği olan nesne yayma (`...`) operatörü kullanılarak gerçekleştirilir.
// 3. **Tür Sınırlamaları**: `U extends object` ve `V extends object` ifadesi, yalnızca nesne türlerinde geçerli olan bir fonksiyon yazılmasını sağlar. Bu sayede, sayı veya string gibi temel türlerin geçerli olmaması sağlanır.
// 4. **Fonksiyon Kullanımı**: `merge` fonksiyonu, iki nesne geçerek çağrılır. İlk nesne olarak bir isim içeren bir nesne, ikinci nesne olarak ise yaş içeren başka bir nesne verilmiştir.
// 5. **Sonuç**: Fonksiyonun çıktısı, iki nesnenin birleştirilmiş hali olan yeni bir nesnedir. Bu örnekte, `name` ve `age` özelliklerini içeren bir nesne oluşturulmuştur.
// 6. **Konsola Yazdırma**: Son olarak, birleştirilmiş nesne `console.log` ile konsola yazdırılır; bu, nesnenin içeriğini gösterir.
// İki nesneyi birleştiren fonksiyon
function merge(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// Örnek nesneleri birleştiriyoruz.
var person = merge({ name: "Alper Bilgin" }, // Değiştirildi
{ age: 21 } // Doğru nesne türü
);
console.log(person);
