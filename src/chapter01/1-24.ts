import delay from '../utils/delay'

const expmod = (base: number, exp: number, m: number): number => {
  if (exp === 0) return 1

  if (exp % 2 === 0) {
    return Math.pow(expmod(base, exp / 2, m), 2) % m
  }

  return (base * expmod(base, exp - 1, m)) % m
}

const fermatTest = (n: number): boolean => {
  const tryIt = (a: number): boolean => expmod(a, n, n) === a

  return tryIt(1 + Math.floor(Math.random() * (n - 1)))
}

let i = 0
// 페르마 판정법
const fastIsPrime = (n: number, times: number): boolean => {
  console.log(i++)

  delay(50)
  if (times === 0) return true

  if (fermatTest(n)) {
    return fastIsPrime(n, times - 1)
  }

  return false
}

const isPrime = (n: number): boolean => {
  if (n === 1) return false

  if (n === 2 || n === 3) return true

  for (let i = 4; i < n; i % 2 === 0 ? i++ : (i += 2)) {
    delay(50)
    if (n % i === 0) return false
  }

  return true
}

function primeTest(n: number, startTime: number) {
  return isPrime(n)
    ? console.log('is prime', Date.now() - startTime)
    : console.log('is not prime', Date.now() - startTime)
}

function fastPrimeTest(n: number, startTime: number) {
  return fastIsPrime(n, 10)
    ? console.log('is prime', Date.now() - startTime)
    : console.log('is not prime', Date.now() - startTime)
}

primeTest(10_001, Date.now())
fastPrimeTest(10_001, Date.now())

primeTest(100_001, Date.now())
fastPrimeTest(100_001, Date.now())

primeTest(1_000_001, Date.now())
fastPrimeTest(1_000_001, Date.now())

fastPrimeTest(100_120_111_000_121, Date.now())
