import { deriv, fixedPoint } from './example'

const newTonTransform = (g: (x: number) => number) => {
  return (x: number) => x - g(x) / deriv(g)(x)
}

const newTonsMethod = (g: (x: number) => number, guess: number) => {
  return fixedPoint(newTonTransform(g), guess)
}

const cubic = (a: number, b: number, c: number) => {
  return (x: number) => x * x * x + a * x * x + b * x + c
}

describe('newtonsMethod를 사용해서 x^3 + ax^2 + bx + c 영점들을 근사할 수 있는 cubic함수 작성', () => {
  test('x^3 - 2x^2 - 24x - 64의 영점들을 근사할 수 있다.', () => {
    expect(newTonsMethod(cubic(1, 1, -3), 1)).toBeCloseTo(-4, 5)
  })
})
