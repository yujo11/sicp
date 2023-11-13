/**
 * 1-11.
 * 만일 n < 3이면 f(n) = n이고, 그렇지 않으면 f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3)이다.
 */

export {}

const f = (n: number): number => {
  if (n < 3) {
    return n
  }

  return f(n - 1) + 2 * f(n - 2) + 3 * f(n - 3)
}

describe('01-11', () => {
  it('f', () => {
    expect(f(1)).toBe(1)
    expect(f(2)).toBe(2)
    expect(f(3)).toBe(4)
    expect(f(4)).toBe(11)
    expect(f(5)).toBe(25)
  })
})
