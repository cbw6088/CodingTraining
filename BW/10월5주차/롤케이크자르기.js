function solution(topping) {
    let answer = 0;
    const leftArr = new Array(topping.length).fill(0);
    const rightArr = new Map(); 
  
    // 우측 배열의 각 개수 저장
    for (const t of topping) {
      rightArr.set(t, (rightArr.get(t) || 0) + 1);
    }
  
    let leftCnt = 0;
    let rightCnt = rightArr.size;
    
    for (let i = 0; i < topping.length; i++) {
      const t = topping[i];
  
      // 좌측 개수 업데이트
      if (leftArr[t] === 0) leftCnt++;
      leftArr[t]++;
  
      // 우측 개수 업데이트
      if (rightArr.get(t) === 1) {
        rightArr.delete(t); // 해당 토핑이 마지막 개수라면 삭제
        rightCnt--;
      } else {
        rightArr.set(t, rightArr.get(t) - 1); // 해당 토핑의 개수 감소
      }
  
      // 고유한 토핑 수가 같으면 answer 증가
      if (leftCnt === rightCnt) {
        answer++;
      }
    }
  
    return answer;
  }
  