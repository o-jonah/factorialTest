import { expect } from 'chai';
import factorial from './app.js';

describe("Factorial Function", function () {
  it("should return 1 for factorial(0)", function () {
    expect(factorial(0)).to.equal(1);
  });

  it("should return correct factorial for positive numbers", function () {
    expect(factorial(5)).to.equal(120);
    expect(factorial(3)).to.equal(6);
  });

  it("should throw an error for negative numbers", function () {
    expect(() => factorial(-3)).to.throw("Negative numbers are not allowed.");
  });
});