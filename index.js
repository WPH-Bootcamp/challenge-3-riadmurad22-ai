// code here, goodluck!!

"use strict";

const prompt = require("prompt-sync")({ sigint: true });

// --- Bagian 1: User Input Handling ---

function getValidNumberInput(promptMessage) {
  let input;
  let numberValue;

  while (true) {
    input = prompt(promptMessage);

    // Konversi eksplisit
    numberValue = Number(input);

    // Validasi
    if (!isNaN(numberValue)) {
      return numberValue;
    }

    console.log("Input tidak valid. Harap masukkan angka.");
  }
}

function getValidOperatorInput(promptMessage) {
  const validOperators = ["+", "-", "*", "/", "%", "**"];
  let operator;

  while (true) {
    operator = prompt(promptMessage).trim();

    if (validOperators.includes(operator)) {
      return operator;
    }

    console.log(
      `Operator tidak valid. Harap masukkan salah satu dari: ${validOperators.join(
        ", "
      )}`
    );
  }
}

// --- Bagian 2: Basic Arithmetic Operation (Functions) ---

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  // kalau dibagi 0
  if (b === 0) {
    return "Error: Division by zero!";
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

// --- Bagian 4: Data Type Analysis & Conditional Output Function ---

function analyzeResult(result) {
  console.log(`\n--- Analisis Hasil ---`);
  console.log(`Hasil Operasi: **${result}**`);
  console.log(`Tipe Data: **${typeof result}**`);

  // Pakai Nullish Coalescing Operator (??) untuk menangani undefined/null
  const checkedResult =
    result ?? "Result is undefined or null, something went wrong!";

  if (typeof checkedResult === "string") {
    // Jika hasilnya adalah string (misalnya, pesan error)
    console.log(`Pesan: ${checkedResult}`);
  } else if (typeof checkedResult === "number") {
    // Jika hasilnya adalah angka

    // 1. Cek Positif, Negatif, atau Nol (If/Else If/Else Chain)
    if (checkedResult > 0) {
      console.log("Sifat: Positif");
    } else if (checkedResult < 0) {
      console.log("Sifat: Negatif");
    } else {
      console.log("Sifat: Nol");
    }

    // 2. Cek Integer atau Floating Point
    if (Number.isInteger(checkedResult)) {
      console.log("Jenis Angka: Integer (Bilangan Bulat)");

      // 3. Cek Ganjil atau Genap (Ternary Operator)
      const parity = checkedResult % 2 === 0 ? "Even (Genap)" : "Odd (Ganjil)";
      console.log(`Paritas: **${parity}**`);

      // Contoh penggunaan && (AND) dan || (OR)
      if (checkedResult > 10 && checkedResult % 2 === 0) {
        console.log(
          "Kondisi Kompleks: Angka ini Positif dan lebih besar dari 10 dan Genap."
        );
      } else if (checkedResult === 0 || checkedResult === 1) {
        console.log("Kondisi Kompleks: Angka ini adalah Nol atau Satu.");
      }
    } else {
      console.log("Jenis Angka: **Floating-point (Desimal)**");
    }
  } else {
    // Output jika hasil adalah undefined atau null (setelah coalescing)
    console.log(`Pesan Default: ${checkedResult}`);
  }
  console.log(`-------------------------\n`);
}

// --- Bagian 3 & 5: Main Calculator Logic & Exit Mechanism ---

console.log("=== Calculator sederhana & Analisa Data ===");

// Main Loop (while(true))
while (true) {
  let result;

  // 1. Ambil input
  const num1 = getValidNumberInput("Masukkan angka pertama: ");
  const num2 = getValidNumberInput("Masukkan angka kedua: ");
  const operator = getValidOperatorInput(
    "Masukkan operator (+, -, *, /, %, **): "
  );

  // 2. Logika Utama (Switch Statement)
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = modulo(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
      break;
    default:
      // Seharusnya tidak tercapai karena ada validasi di getValidOperatorInput
      result = "Error: Invalid operator handled by validation.";
  }

  // 3. Analisis Hasil
  analyzeResult(result);

  // 4. Mekanisme Keluar (Exit Mechanism)
  const continueInput = prompt(
    "Apakah Anda ingin melakukan perhitungan lain? (y/n): "
  );

  // Cek case-insensitive
  if (continueInput.toLowerCase() === "n") {
    console.log(
      "Terima kasih telah menggunakan kalkulator sederhana ini. Sampai jumpa!"
    );
    break; // Keluar dari while(true) loop
  }
}
console.log("Program selesai.");
