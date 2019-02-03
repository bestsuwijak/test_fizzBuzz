const fizzBuzz = require('./fizzBuzz')
test('a = 2 return is 2', () => {
    expect(fizzBuzz(2)).toBe("2")
})

test('a = 3 return is Fizz', () =>{
    expect(fizzBuzz(3)).toBe("Fizz")
})

test('a = 5 return is Buzz', () => {
    expect(fizzBuzz(5)).toBe("Buzz")
})

test('a = 15 return is FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
})

test('a = 18 return is Fizz', () => {
    expect(fizzBuzz(18)).toBe("Fizz")
})

test('a = 30 return is FizzBuzz', () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz")
})

test('a = 31 return is Fizz', () => {
    expect(fizzBuzz(31)).toBe("Fizz")
})

test('a = 35 return is FizzBuzz', () => {
    expect(fizzBuzz(35)).toBe("FizzBuzz")
})

test('a = 50 return is Buzz', () => {
    expect(fizzBuzz(50)).toBe("Buzz")
})

test('a = 51 return is FizzBuzz', () => {
    expect(fizzBuzz(51)).toBe("FizzBuzz")
})

test('a = 53 return is FizzBuzz', () => {
    expect(fizzBuzz(53)).toBe("FizzBuzz")
})

test('a = 61 return is 61', () => {
    expect(fizzBuzz(61)).toBe("61")
})

test('a = 75 return is FizzBuzz', () => {
    expect(fizzBuzz(75)).toBe("FizzBuzz")
})