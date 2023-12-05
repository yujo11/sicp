/**
 * smallest_divisor 함수를 이용해서 199, 1999, 19999의 최소 약수를 각각 구하라.
 */

function smallest_divisor(n: number) {
  return find_divisor(n, 2)
}

function find_divisor(n: number, test_divisor: number) {
  if (Math.sqrt(test_divisor) > n) {
    return n
  }

  if (divides(test_divisor, n)) {
    return test_divisor
  }

  return find_divisor(n, test_divisor + 1)
}

function divides(a: number, b: number) {
  return b % a === 0
}

describe('01-22', () => {
  it('case 1', () => {
    expect(smallest_divisor(199)).toEqual(199)
  })

  it('case 2', () => {
    expect(smallest_divisor(1999)).toEqual(1999)
  })

  it('case 3', () => {
    expect(smallest_divisor(19999)).toEqual(7)
  })
})
