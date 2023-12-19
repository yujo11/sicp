import delay from '../utils/delay'

const isPrime = (n: number): boolean => {
  delay(1000)

  if (n === 1) return false

  if (n === 2 || n === 3) return true

  for (let i = 4; i < n; i++) {
    if (n % i === 0) return false
  }

  return true
}

function primeTest(n: number, startTime: number) {
  return isPrime(n)
    ? console.log('is prime', Date.now() - startTime)
    : console.log('is not prime', Date.now() - startTime)
}

primeTest(1_000, Date.now())
