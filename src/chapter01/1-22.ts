import delay from '../utils/delay'

const isPrime = (n: number): boolean => {
  if (n === 1) return false

  if (n === 2 || n === 3) return true

  for (let i = 4; i < n; i++) {
    delay(10)
    if (n % i === 0) return false
  }

  return true
}

function primeTest(n: number, startTime: number) {
  return isPrime(n)
    ? console.log('is prime', Date.now() - startTime)
    : console.log('is not prime', Date.now() - startTime)
}

primeTest(10_001, Date.now())
