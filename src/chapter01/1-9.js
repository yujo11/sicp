/**
 * 1-9.
 * 다음 두 함수는 주어진 인수를 1증가하는 inc와 1감소하는 dec를 이용해서 두양의 정수의 덧셈을 구현한다.
 * function plus(a, b) {
 *   return a === 0 ? b : inc(plus(dec(a), b));
 * }
 *
 * function minus(a, b) {
 *   return b === 0 ? a : plus(dec(a), inc(b));
 * }
 *
 * plus(4,5); 를 평가할 때 함수가 생성하는 과정을 치환 모형으로 표현하라.
 * 이 과정들은 반복적인가 아니면 재귀인가?
 *
 */

/**
 * plus(4,5)를 평가하는 과정은 다음과 같다.
 *
 * 1. plus(4, 5) => inc(plus(3, 5))
 * 2. inc(plus(3, 5)) => inc(inc(plus(2, 5)))
 * 3. inc(inc(plus(2, 5))) => inc(inc(inc(plus(1, 5))))
 * 4. inc(inc(inc(plus(1, 5)))) => inc(inc(inc(inc(plus(0, 5)))))
 * 5. ... (생략)
 *
 * 이렇게 a가 0으로 평가 받기 전까지 반복적으로 자기자신을 호출하기 때문에 재귀적인 과정이다.
 */
