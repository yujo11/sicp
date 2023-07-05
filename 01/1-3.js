/**
 * 1-3. 세 개의 수를 받고 셋 중 가장 작은 것을 제외한 두 수의 제곱들을 합한 결과를 돌려주는 함수를 선언하라.
 */

const fn = (a, b, c) => {
  const min = Math.min(a, b, c);

  return arguments.reduce((acc, cur) => {
    if (cur === min) {
      return acc;
    }

    return acc + Math.pow(cur, 2);
  }, 1);
};
