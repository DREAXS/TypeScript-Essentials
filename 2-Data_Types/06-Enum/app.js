// 1. Enum, ilişkili sabit değerleri gruplamak için kullanılır.
// 2. Kodun okunabilirliğini artırır ve sabitlerin yönetimini kolaylaştırır.
var Media;
(function (Media) {
    Media[Media["Newspaper"] = 10] = "Newspaper";
    Media[Media["Newsletter"] = 11] = "Newsletter";
    Media[Media["Magazine"] = 12] = "Magazine";
    Media[Media["Book"] = 13] = "Book";
})(Media || (Media = {}));
console.log(Media.Magazine);
// enum PrintMedia {
//     Newspaper = "NEWSPAPER",
//     Newsletter = "NEWSLETTER",
//     Magazine = "MAGAZINE",
//     Book = "BOOK"
// }
// console.log(PrintMedia.Newsletter);
// console.log(PrintMedia['Newspaper']);
