const fizzBuzz = require("../src/fizzbuzz")

test('n divisible par 3', () => {
    let n = 6;
    expect(fizzBuzz(n)).toBe("Fizz");
})
test('n divisible par 5', () => {
    let n = 10;
    expect(fizzBuzz(n)).toBe("Buzz");
})
test('n divisible par 3 et 5', () => {
    let n = 15;
    expect(fizzBuzz(n)).toBe("FizzBuzz");
})
test('n NON divisible par 3 et 5', () => {
    let n = 2;
    expect(fizzBuzz(n)).toBe("");
})
