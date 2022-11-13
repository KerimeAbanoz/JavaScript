// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

//**************** IF-ELSE *******************

console.log("****** CONDITIONS *******");

//? ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//? yada 0 oldugunu tespit ederek yazdiriniz.

//? Benim çözümüm:

// const sayi = prompt("Rakamla bir sayi giriniz");

// if (sayi > 0) {
//   console.log(`${sayi} sayısı pozitiftir.`);
// } else if (sayi == 0) {
//   console.log(`${sayi} sayısı sıfıra eşittir.`);
// } else if (sayi < 0) {
//   console.log(`${sayi} sayısı negatiftir.`);
// } else {
//   console.log(`${sayi} bir sayı değildir.`);
// }
// console.log(sayi, `girdisinin türü:`, typeof sayi);

//? hocanın çözümü:

// const sayi = Number(prompt("Bir sayi giriniz:"));
// if (sayi > 0) {
//   console.log(`${sayi} pozitiftir.`);
// } else if (sayi == 0) {
//   console.log(`${sayi}'a esittir.`);
// } else {
//   console.log(`${sayi} negatiftir.`);
// }
// console.log(sayi, typeof sayi);

//? ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//? yazdiriniz.
// ? Alınan değeri number yapabilmek için başına + koyulur
// const n1 = +prompt("Sayi1:");
// const n2 = +prompt("Sayi2:");
// const n3 = +prompt("Sayi3:");

// //* 1.Yontem
// if (n1 >= n2 && n1 >= n3) {
//   console.log(`${n1} en buyuk sayidir`);
// } else if (n2 >= n1 && n2 >= n3) {
//   console.log(`${n2} en buyuk sayidir`);
// } else if (n3 >= n1 && n3 >= n2) {
//   console.log(`${n3} en buyuk sayidir`);
// }

// //* 2.Yontem
// let enBuyuk = n1;

// if (n2 >= enBuyuk) {
//   enBuyuk = n2;
// }
// if (n3 >= enBuyuk) {
//   enBuyuk = n3;
// }
// console.log(`${enBuyuk} en buyuktur`);

//! ODEV1:
// !Dort Islem Hesap Makinasi
//! iki sayı ve bir operatör(işlem ne ise +-/x falan) kullanıcıdan alıp sonucu yazdıracak

//**************** SWITCH-CASE *******************

//! ODEV2
//! Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

//! Program
//! Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.

// ? benim çözümüm

// const gun = prompt("haftanın bir gününü giriniz:").toLowerCase();

// switch (gun) {
//   case "pazartesi":
//   case "sali":
//   case "carsamba":
//   case "persembe":
//     console.log(`Programınızda InClass aktivitesi var`);
//     break;
//   case "cuma":
//     console.log(`Programınızda Teamwork aktivitesi var`);
//     break;
//   case "cumartesi":
//     console.log(`Programınızda InClass ve Workshop aktivitesi var`);
//     break;
//   case "pazar":
//     console.log(`Programınızda Self-Study aktivitesi var`);
//     break;
//   default:
//     console.log(`Girdiğiniz değer haftanın bir günü değildir.`);
// break;
// }

// ? hoca çözümü
// const gun = prompt("Lutfen bir gun giriniz: ").toLowerCase();
// switch (gun) {
//   case "pazartesi":
//   case "sali":
//   case "carsamba":
//   case "persembe":
//     console.log("Inclass");
//     break;
//   case "cuma":
//     console.log("Teamwork");
//     break;
//   case "cumartesi":
//     console.log("Inclass ve workshop");
//     break;
//   case "pazar":
//     console.log("Self study.");
//     break;
//   default:
//     console.log("Yanlis gun girildi");
// }
//**************** TERNARY *******************

// //? ORNEK5: Kaldi-Gecti
// const not = +prompt("Notunuzu giriniz:");
// // let sonuc = not >= 50 ? "Gecti" : "Kaldi";
// // console.log(sonuc);
// console.log(not >= 50 ? "Gecti" : "Kaldi");

// //? ORNEK6:
// const yas = 17;
// const cinsiyet = "erkek";
// const saglikli = false;

// yas >= 18 && cinsiyet === "erkek" && saglikli
//   ? console.log("askerlik yapmali")
//   : console.log("Askerlik yapmasina gerek yok");

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

//?kendi çözümüm
// const maas = Number(prompt("Lütfen mevcut maasınızı giriniz:"));
// const asgari = 5500;
// const zamliMaas = maas >= asgari ? maas * 1.1 : maas * 1.5;
// console.log(`Mevcut maaşınız ${maas} olup zam sonrasında ${zamliMaas} olarak güncellenmiştir.`)

// ? hoca çözümü
// const maas = Number(prompt("Maasinizi giriniz"));
// const asgariUcret = 5500;
// const zamliMaas = maas >= asgariUcret ? maas * 1.1 : maas * 1.5;
// console.log("NORMAL MAAS:", maas, "ZAMLI MAAS:", Math.trunc(zamliMaas));

//! ODEV4: Console’dan kişinin gelir ve gider miktarını alan
//! eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//! değilse  Kredi Verilemez 🥺
//! şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

//?kendi çözümüm
// const gelir = Number(prompt("Lütfen mevcut aylık gelirinizi giriniz:"));
// const gider = Number(prompt("Lütfen mevcut aylık giderinizi giriniz:"));
// const asgari = 5500;
// const karar = gelir - gider >= asgari ? "Tebrikler! Kredi almaya hak kazandınız" : "Üzgünüz, tekrar deneyebilirsiniz.";
// console.log(karar)

// ? hoca çözümü
// const gider = Number(prompt("Giderlerinizi giriniz"));
// const gelir = Number(prompt("Gelirleriniz giriniz"));
// const kredi = gelir - gider >= 5000 ? "KREDI ALABILIR 🤑" : " KREDI ALAMAZ 🥺";
// console.log(kredi);
