function palindrom(cek) {
  // Ubah input menjadi huruf kecil semua untuk perbandingan
  let inputLowerCase = cek.toLowerCase();

  let cekPalindrom = inputLowerCase.split("").reverse().join("");

  if (inputLowerCase === cekPalindrom) {
    return `${cek} adalah palindrom`;
  } else {
    return `${cek} baukan palindrom`;
  }
}

console.log(palindrom("mobil"));
