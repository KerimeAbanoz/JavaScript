// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

//! benim çözümüm
// let not = Number(prompt("Lütfen 0 ile 100 arasında bir not giriniz"));

// while (not < 0 || not > 100) {
//   alert("Girdiğiniz sayı 0 ile 100 arasında olmalıdır.");
//   not = Number(prompt("Lütfen 0 ile 100 arasında bir not giriniz"));
// }

// console.log("Teşekkürler, geçemediniz.");

//! hoca çözümü
// let not = +prompt("Lutfen 0-100 arasinda bir not girniz.");

// while (not < 0 || not > 100) {
//   console.log("Not 0-100 arasinda olmalidir");
//   not = prompt("Lutfen 0-100 arasinda bir not giriniz.");
// }

// console.log("Giridiginiz Not:", not);

// if (not < 0 || not > 100) {
//   alert("Not 0-100 arasinda olmalidir");
// }

// * ============================================
// *         DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO-WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz.

let not1;
do {
  not1 = +prompt("Lutfen 0-100 arasinda bir not girniz.");
  if (not1 < 0 || not1 > 100) {
    console.log("Not 0-100 arasinda olmaldir.");
    alert("Not 0-100 arasinda olmaldir.");
  }
} while (not1 < 0 || not1 > 100);

console.log("Giridiginiz Not:", not1);
