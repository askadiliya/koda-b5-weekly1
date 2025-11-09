function tabelPerkalian(tabel) {
  let header = "";
  for (let i = 1; i <= tabel; i++) {
    header += i + "\t";
  }
  console.log(header);

  for (let i = 1; i <= tabel; i++) {
    let row = "";
    for (let j = 1; j <= tabel; j++) {
      row += i * j + "\t";
    }
    console.log(row);
  }
}

console.log("Output untuk genMultiplicationTable(5):");
tabelPerkalian(3)

