import { identity, inc } from '../utils/functional'

const product = (
  term: (x: number) => number,
  a: number,
  next: (x: number) => number,
  b: number
): number => {
  const iter = (a: number, result: number): number => {
    if (a > b) return result

    return iter(next(a), result * term(a))
  }

  return iter(a, 1)
}

// 1-31. a)
const factorial = (n: number): number => {
  return product(identity, 1, inc, n)
}

const getPi = (n: number): number => {
  return (
    4 *
    (n + 1) *
    product((x) => (x * x) / ((2 * x - 1) * (2 * x + 1)), 1, inc, n)
  )
}

console.log(getPi(1000))
