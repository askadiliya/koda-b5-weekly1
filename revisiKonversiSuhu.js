function konversiSuhu(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32; //  rumus: (C * 9/5) + 32
  return fahrenheit;
}
console.log(konversiSuhu(69));

function fahrenheitKeCelcius(fahrenheit) {
  const celcius = ((fahrenheit - 32) * 5) / 9; // rumus: (F - 32) * 5/9
  return celcius;
}

console.log(fahrenheitKeCelcius(100));
