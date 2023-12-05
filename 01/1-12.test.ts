/**
 * 1-12.
 * 다음과 같은 패턴으로 배치된 수들을 파스칼의 삼각형이라고 부른다.
 * 1
 * 1 1
 * 1 2 1
 * 1 3 3 1
 * 1 4 6 4 1
 * 1 3 3 1
 * 1 2 1
 * 1 1
 * 1
 *
 * 이 삼각형의 두 빗변(양쪽 가장자리)에 해당하는 성분드릉ㄴ 모두 1이고 그 안쪽 수들은 각각 윗 행에 있는 두 수의 합이다.
 * 파스칼의 삼각형 성분들을 재귀적 과정으로 계산하는 함수를 작성하라.
 *
 * https://leetcode.com/problems/pascals-triangle/ 로 풀어보기
 */

const triangle = (n: number): number[][] => {
  if (n === 1) {
    return [[1]]
  }

  const prev = triangle(n - 1)
  const last = prev[prev.length - 1]

  const next = [1]
  for (let i = 0; i < last.length - 1; i++) {
    next.push(last[i] + last[i + 1])
    console.log(n, next)
  }

  next.push(1)

  return [...prev, next]
}

// const triangle = (n: number): number[][] => {
//   if (n === 1) {
//     return [[1]]
//   }

//   const prev = triangle(n - 1)

//   console.log('prev', prev)

//   return [...prev, ...triangle(n - 1)]
// }

describe('01-12', () => {
  it('case 1', () => {
    expect(triangle(1)).toEqual([[1]])
  })

  it('case 2', () => {
    expect(triangle(2)).toEqual([[1], [1, 1]])
  })

  it('case 3', () => {
    expect(triangle(3)).toEqual([[1], [1, 1], [1, 2, 1]])
  })

  it('case 4', () => {
    expect(triangle(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]])
  })

  it('case 5', () => {
    expect(triangle(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ])
  })
})
