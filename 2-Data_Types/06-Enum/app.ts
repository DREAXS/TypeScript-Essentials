// 1. Enum, ilişkili sabit değerleri gruplamak için kullanılır.
// 2. Kodun okunabilirliğini artırır ve sabitlerin yönetimini kolaylaştırır.

enum Media {
  Newspaper = 10, //10
  Newsletter, //11
  Magazine, //12
  Book, //13
}

console.log(Media.Magazine);

// enum PrintMedia {
//     Newspaper = "NEWSPAPER",
//     Newsletter = "NEWSLETTER",
//     Magazine = "MAGAZINE",
//     Book = "BOOK"
// }

// console.log(PrintMedia.Newsletter);
// console.log(PrintMedia['Newspaper']);
