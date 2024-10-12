function solution(n) {
  let fibonacci = [0, 1];

  //n번쨰 피보나치까지만 구하자
  for (let i = 0; i < n - 1; i++) {
    fibonacci.push((fibonacci[i] + fibonacci[i + 1]) % 1234567);
  }
  return fibonacci[n];
}
