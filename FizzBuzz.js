for (let fizz = 1; fizz < 101; fizz++){
    if( fizz % 3 === 0)  console.log("FIZZ:",fizz)
}

let buzz = 0
while (buzz < 101) {
    buzz++;
    if (buzz % 5 === 0) console.log("BUZZ:",buzz);
}

let fizzBuzz = 0
do {
    fizzBuzz++;
    if (fizzBuzz % 5 === 0 && fizzBuzz % 3 === 0)
    console.log("FIZZBUZZ:",fizzBuzz);
} while (fizzBuzz < 101)


let fizzBuzz = 0
let fizz = 0
let buzz = 0
while (buzz < 101) {
    fizzBuzz++;
    fizz++;
    buzz++;
    if (buzz % 5 === 0) console.log("BUZZ:",buzz);
    if( fizz % 3 === 0)  console.log("FIZZ:",fizz);
    if (fizzBuzz % 5 === 0 && fizzBuzz % 3 === 0)
    console.log("FIZZBUZZ:",fizzBuzz);
}
