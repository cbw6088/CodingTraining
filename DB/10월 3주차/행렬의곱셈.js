function solution(arr1, arr2) {
  let answer = [];

  //   배열에 미리 0 채우는 것이 계산에 더 효율적
  //   let answer = Array.from({ length: arr1.length }, () => Array(arr2[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    let row = []; // 결과 행을 담을 배열
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0; // 각 원소의 결과를 저장할 변수
      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum); // 계산한 값을 현재 행에 추가
    }
    answer.push(row); // 완성된 행을 결과 배열에 추가
  }

  return answer;
}
