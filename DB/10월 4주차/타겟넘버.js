function solution(numbers, target) {
  let count = 0;

  function targetNumber(index, sum) {
    if (index === numbers.length) {
      if (sum === target) count++;
      return;
    }

    targetNumber(index + 1, sum + numbers[index]);
    targetNumber(index + 1, sum - numbers[index]);
  }

  targetNumber(0, 0);
  return count;
}
