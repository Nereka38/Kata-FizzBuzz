export default class FizzBuzz {
    constructor (){

    }

        isDivisible(numb1) {
            if (numb1 % 3 === 0 && numb1 % 5 === 0) return "FizzBuzz"
            if (numb1 % 3 === 0) return "Fizz"
            if (numb1 % 5 === 0) return "Buzz"
        };
};