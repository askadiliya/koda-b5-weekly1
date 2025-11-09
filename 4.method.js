// // // // //penggunaan forEach
// // // // //melakukan perulangan pada array
// // // // //tidak perlu menulis lonsol.log berkali kali

// // // // const array = ["Mobil", "Motor", "Sepeda"];
// // // // array.forEach((element) => console.log(element));

// // // // // tidak menggunakan forEach
// // // // // kode menjadi panjang dan tidak ringkas
// // // // console.log(array[0]);
// // // // console.log(array[1]);
// // // // console.log(array[2]);

// // // // // reduce() digunakan untuk menghitung atau menggabungkan array
// // // // const angka = [1, 2, 3, 4];
// // // // const total = angka.reduce((acc, value) => acc + value, 0);
// // // // console.log(total); // 10

// // // // const angka = [5, 6, 7, 8];
// // // // let total = 0;

// // // // for (let i = 0; i < angka.length; i++) {
// // // //   total += angka[i];
// // // // }
// // // // console.log(total);

// // // // find()
// // // // digunakan untuk mencari 1 data pertama yang memenuhi kondisi
// // // const angka = [5, 8, 12, 20];

// // // const hasil = angka.find((n) => n > 10);

// // // console.log(hasil);

// // // //tanpa find()
// // // const angka = [5, 8, 12, 20];

// // // let hasil = undefined; // jika tidak ditemukan

// // // for (let i = 0; i < angka.length; i++) {
// // //   if (angka[i] > 10) {
// // //     hasil = angka[i];
// // //     break; // langsung berhenti, sama seperti find()
// // //   }
// // // }

// // // console.log(hasil); // 12

// // // menggunakan includes()
// // // memeriksa apakah suatu elemen ada di dalam array dan memberi tau ya atau tidak

// // const daftarBelanja = ["Apel", "Roti", "Telur", "Keju"];

// // const itemDicari = "Susu";
// // const apakahAda = daftarBelanja.includes(itemDicari);
// // console.log(`Apakah "${itemDicari}" ada dalam daftar? ${apakahAda}`);

// // if (apakahAda) {
// //   console.log("Ya, Susu sudah ada di daftar belanja.");
// // } else {
// //   console.log("Tidak, Susu belum ada. Mari kita tambahkan!");
// //   daftarBelanja.push(itemDicari);
// //   console.log("Daftar belanja terbaru:", daftarBelanja);
// // }
// // // tidak menggunakan includs()
// // // menggunakan for
// // // membandingkan item satupersatu

// // const daftarBelanja = ["Apel", "Roti", "Telur", "Keju"];
// // const itemDicari = "Susu";
// // let apakahAda = false;

// // for (let i = 0; i < daftarBelanja.length; i++) {
// //   if (daftarBelanja[i] === itemDicari) {
// //     apakahAda = true;
// //     break;
// //   }
// // }

// // console.log(`Apakah "${itemDicari}" ada dalam daftar? ${apakahAda}`);

// // if (apakahAda) {
// //   console.log("Ya, Susu sudah ada di daftar belanja.");
// // } else {
// //   console.log("Tidak, Susu belum ada. Mari kita tambahkan!");
// //   daftarBelanja.push(itemDicari);
// //   console.log("Daftar belanja terbaru:", daftarBelanja);
// // }
// // const daftarBelanja = ["Apel", "Roti", "Telur", "Keju"];
// // const itemDicari = "Susu";
// // let apakahAda = false;

// // for (let i = 0; i < daftarBelanja.length; i++) {
// //   if (daftarBelanja[i] === itemDicari) {
// //     apakahAda = true;
// //     break;
// //   }
// // }

// // console.log(`Apakah "${itemDicari}" ada dalam daftar? ${apakahAda}`);

// // if (apakahAda) {
// //   console.log("Ya, Susu sudah ada di daftar belanja.");
// // } else {
// //   console.log("Tidak, Susu belum ada. Mari kita tambahkan!");
// //   daftarBelanja.push(itemDicari);
// //   console.log("Daftar belanja terbaru:", daftarBelanja);
// // }

// // slice() untuk mengambil potongan data dari suatu array atau string tanpa mengubah sumber aslinya.

// const buah = ["Apel", "Pisang", "Mangga", "Jeruk", "Anggur"];
// const irisanBuah = buah.slice(1, 3);

// console.log("Irisan yang diambil:", irisanBuah);
// console.log("Array asli tetap sama:", buah);
// console.log("Dua terakhir:", duaTerakhir);

//tanpa clice
const buah = ["Apel", "Pisang", "Mangga", "Jeruk", "Anggur"];
const startIndex = 1;
const endIndex = 3; // berhenti sebelum indeks ini
const irisanBuahManual = [];

for (let i = startIndex; i < endIndex; i++) {
  //elemen dari array asli ke array baru
  irisanBuahManual.push(buah[i]);
}

console.log("Irisan yang diambil secara manual:", irisanBuahManual);
//  [ 'Pisang', 'Mangga' ]
console.log("Array asli tetap sama:", buah);
// Output: [ 'Apel', 'Pisang', 'Mangga', 'Jeruk', 'Anggur' ]
