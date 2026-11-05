// Node.js CLI calculator app
// Supported operations: addition, subtraction, multiplication, division
// (extended in a later step with modulo, power, and square root)
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

module.exports = { addition, subtraction, multiplication, division };
