/**
 * 1-4. 앞에서 본 함수 적용 평가 묘형은 함수 표현식이 복합 표현식인 경우도 허용한다. 이 점을 고려해서 a_plus_abs_b 함수의 작동 방식을 서술하라
 */

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function a_plus_abs_b(a, b) {
  return b >= 0 ? plus(a, b) : minus(a, b);
}

/**
 * b가 0보다 크거나 같으면 a와 b의 합을 반환하고 그렇지 않으면 a와 b의 차를 반환한다.
 */
