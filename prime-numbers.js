let checks = 0;
let checksOptimized = 0;
const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

function isPrime(number) {
    const half = number / 2;
    for (let i = 2; i < number; i++) {
        checks++;
        const iDividesNumber = number % i === 0
        if (iDividesNumber) {
            return false;
        }
        if (i > half) return true;
    }

    return true;
}

function isPrimeOptimized(number) {
    const half = number / 2;

    for (let prime of primes) {
        checksOptimized++;
        const iDividesNumber = number % prime === 0
        if (iDividesNumber) {
            return false;
        }
        if (prime > half) return true;
    }

    return true;
}

function primeLessThan100() {
    const primes = []
    for (let i = 2; i < 100; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    return primes;
}

console.time('primes')
console.log(primeLessThan100().toString())
console.timeEnd('primes')

