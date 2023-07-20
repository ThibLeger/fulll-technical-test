let n = process.argv[2];

// default value is no param specified
if (!n || Number.isNaN(n) || !Number.isInteger(n) ) {
    n = 100;
}

function fizzBuzz(n) {
    console.log(n);

    let string = "";

    for (let i = 1; i <= n; i++) {
        const divisibleBy3 = i%3 === 0;
        const divisibleBy5 = i%5 === 0;

       if (divisibleBy3) {
        string += "Fizz";
       }

       if (divisibleBy5) {
        string += "Buzz";
       }

       if (!divisibleBy3 && !divisibleBy5) {
        string += `${i}`;
       }
    }

    return string;
}

console.log(fizzBuzz(n));