// Node.js CLI calculator app
// Supported operations: addition, subtraction, multiplication, division
// Extended operations: modulo, power (exponentiation), and square root
// Written by Muse, not Copilot CLI.

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot take square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = { addition, subtraction, multiplication, division, modulo, power, squareRoot };
