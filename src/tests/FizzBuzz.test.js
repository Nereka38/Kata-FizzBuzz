import FizzBuzz from "../scripts/FizzBuzz.js";



describe('FizzBuzz', () => {
    test('should return Fizz if the number is divisible for 3', () => {
        //given
        let numb1 = 3;
        const fizzBuzz = new FizzBuzz;
        //when
        const result = fizzBuzz.isDivisible(numb1);
        //then
        expect(result).toBe("Fizz")
    });

    test('should return Buzz if the number is divisible for 5', () => {
        //given
        let numb1 = 5;
        const fizzBuzz = new FizzBuzz;
        //when
        const result = fizzBuzz.isDivisible(numb1);
        //then
        expect(result).toBe("Buzz")
    });

    test('should return Buzz if the number is divisible for 3 y 5', () => {
        //given
        let numb1 = 15;
        const fizzBuzz = new FizzBuzz;
        //when
        const result = fizzBuzz.isDivisible(numb1);
        //then
        expect(result).toBe("FizzBuzz")
    });
});