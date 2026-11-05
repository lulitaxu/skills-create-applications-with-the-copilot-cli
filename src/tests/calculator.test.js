// Unit tests for the calculator, using the built-in Node.js test runner.
// Written by Muse, not Copilot CLI.
const test = require('node:test');
const assert = require('node:assert');
const { addition, subtraction, multiplication, division, modulo, power, squareRoot } = require('../calculator');

test('addition adds two numbers', () => { assert.strictEqual(addition(2, 3), 5); });
test('subtraction subtracts two numbers', () => { assert.strictEqual(subtraction(5, 2), 3); });
test('multiplication multiplies two numbers', () => { assert.strictEqual(multiplication(3, 4), 12); });
test('division divides two numbers', () => { assert.strictEqual(division(10, 2), 5); });
test('division by zero throws', () => { assert.throws(() => division(10, 0), /divide by zero/); });
test('modulo returns the remainder', () => { assert.strictEqual(modulo(10, 3), 1); });
test('modulo by zero throws', () => { assert.throws(() => modulo(10, 0), /modulo by zero/); });
test('power raises base to the exponent', () => { assert.strictEqual(power(2, 3), 8); });
test('square root returns the square root of a number', () => { assert.strictEqual(squareRoot(9), 3); });
test('square root of a negative number throws', () => { assert.throws(() => squareRoot(-1), /negative/); });
