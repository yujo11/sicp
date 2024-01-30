import { display } from '../utils/display'
import { gcd } from '../utils/gcd'
import { pair } from '../utils/pair'

export const makeRat = (n: number, d: number) => {
  const g = gcd(n, d)

  return pair(n / g, d / g)
}

describe('2-1 makeRat', () => {
  test('makeRat(1, 2) returns [1, 2]', () => {
    expect(makeRat(1, 2)).toEqual([1, 2])
  })

  test('makeRat(2, 4) returns [1, 2]', () => {
    expect(makeRat(2, 4)).toEqual([1, 2])
  })

  test('makeRat(2, 3) returns [2, 3]', () => {
    expect(makeRat(2, 3)).toEqual([2, 3])
  })

  test('makeRat(-4, -6) returns [2, 3]', () => {
    expect(makeRat(-4, -6)).toEqual([2, 3])
  })

  test('makeRat(-4, 6) returns [-2, 3]', () => {
    expect(makeRat(-4, 6)).toEqual([-2, 3])
  })

  test('makeRat(4, -6) returns [-2, 3]', () => {
    expect(makeRat(4, -6)).toEqual([-2, 3])
  })
})
