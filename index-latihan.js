// code here, goodluck!!

let prompt = require("prompt-sync")();

function getValidNumberInput(prompMessage) {
  let num;
  let flag = 0;
  do {
    flag++;
    if (flag > 1)
      console.log("Input tidak valid, silakan masukkan angka yang benar.");
    num = prompt(prompMessage);
  } while (isNaN(num) || num.trim() === "");
  return parseFloat(num);
}

// 1 fungsi saja
function calculation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "**":
      return a ** b;
    default:
      return "Operator tidak valid";
  }
}

console.log("Program Calculator Sederhana");

while (true) {
  let angka = getValidNumberInput("Masukan angka: ");
  console.log("typeof angka:", typeof angka); // typeof check number type

  let angka2 = getValidNumberInput("Masukan angka kedua: ");
  console.log("typeof angka:", typeof angka); // typeof check number type

  let operator = prompt("Masukan operator (+, -, *, /, %, **): ");

  // store the result of calculation function
  let hasil = calculation(parseInt(angka), parseInt(angka2), operator);

  console.log(
    "Hasil calculator :",
    angka,
    " ",
    operator,
    " ",
    angka2,
    " = ",
    hasil
  );

  let question = prompt("Apakah anda ingin lanjut? (y/n): ");

  if (question.toLowerCase() === "n") {
    console.log("Terima kasih telah menggunakan kalkulator sederhana ini.");
    break;
  }
}
console.log("Program selesai.");
