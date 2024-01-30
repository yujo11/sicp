export const square = (x: number) => x * x

export const cube = (x: number) => x * x * x

export const average = (x: number, y: number) => (x + y) / 2

export const averageDamp = (f: (x: number) => number) => {
  return (x: number) => average(x, f(x))
}

export const fixedPoint = (f: (x: number) => number, firstGuess: number) => {
  const closeEnough = (v1: number, v2: number) => Math.abs(v1 - v2) < 0.00001

  const tryWith = (guess: number): number => {
    const next = f(guess)
    return closeEnough(guess, next) ? next : tryWith(next)
  }

  return tryWith(firstGuess)
}

export const sqrt = (x: number) => {
  return fixedPoint(
    averageDamp((y) => x / y),
    1
  )
}

export const cubeRoote = (x: number) => {
  return fixedPoint(
    averageDamp((y) => x / square(y)),
    1
  )
}

export const deriv = (g: (x: number) => number) => {
  const dx = 0.00001
  return (x: number) => (g(x + dx) - g(x)) / dx
}

console.log(deriv(cube)(5)) // 75.00014999664018

export const fixedPointOfTransform = (
  g: (x: number) => number,
  transform: (g: (x: number) => number) => (x: number) => number,
  guess: number
) => {
  return fixedPoint(transform(g), guess)
}

const newSqrt = (x: number) => {
  return fixedPointOfTransform((y: number) => x / y, averageDamp, 1)
}
