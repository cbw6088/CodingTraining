//최대공약수 = 유클리드 호제법

const gcd = (a, b) => {
  if (a % b === 0) {
    return b;
  } else {
    return gcd(b, a % b);
  }
};
//최소공배수 = 두 수의 곱 / 최대 공약수

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

function solution(arr) {
  let answer = 1;
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}
