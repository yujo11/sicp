const cube = (x: number): number => x * x * x

const identity = <T>(x: T): T => x

const p = (x: number): number => 3 * x - 4 * cube(x)

const sine = (angle: number): number => {
  if (!(Math.abs(angle) > 0.1)) return angle

  return p(sine(angle / 3))
}

const sumIntegers = (a: number, b: number): number => {
  if (a > b) return 0

  return a + sumIntegers(a + 1, b)
}

const sumCubes = (a: number, b: number): number => {
  if (a > b) return 0

  return cube(a) + sumCubes(a + 1, b)
}

const piSum = (a: number, b: number): number => {
  if (a > b) return 0

  return 1 / (a * (a + 2)) + piSum(a + 4, b)
}

function sum(
  term: (x: number) => number,
  a: number,
  next: (x: number) => number,
  b: number
): number {
  function iter(a: number, result: number): number {
    if (a > b) return result

    return iter(next(a), result + term(a))
  }

  return iter(a, 0)
}

describe('1-30', () => {
  test('sum 01', () => {
    expect(sum(identity, 1, identity, 10)).toBe(55)
  })

  test('sum 02', () => {
    expect(sum(cube, 1, identity, 10)).toBe(3025)
  })
})
