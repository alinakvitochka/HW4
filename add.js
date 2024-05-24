function isPrime(number) {
    if (number == 2){
        console.log("Число N є простим числом")
        return   
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            console.log("Число N  не є простим числом")
            return 
        }
    }

    console.log("Число N  є простим числом")
}



function PerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number - 1; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (number === sum) {
        console.log(number + '-Совершенное число!');
    } else {
        console.log(number + '-not Совершенное число!');
    }
}

PerfectNumber(14)







function Tree(levels) {
    for (let i = 1; i <= levels; i++) {
        let space = ' '.repeat(levels - i);
        let stars = '*'.repeat(2 * i - 1)
        console.log(space + stars);
    }
}

 Tree(4)
