function solution(want, number, discount) {
  // 원하는 제품과 수량을 딕셔너리로 생성
  const wantMap = new Map();
  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }

  let validDays = 0; // 회원 등록 가능한 날짜 수

  // 할인 목록을 슬라이딩 윈도우 방식으로 확인
  for (let start = 0; start <= discount.length - 10; start++) {
    const currentDiscount = new Map();

    // 10일 동안의 할인 제품 카운트
    for (let day = start; day < start + 10; day++) {
      const product = discount[day];
      currentDiscount.set(product, (currentDiscount.get(product) || 0) + 1);
    }

    // 모든 원하는 제품과 수량이 할인 목록에 포함되어 있는지 확인
    let allMatched = true;
    for (const [product, requiredAmount] of wantMap) {
      if ((currentDiscount.get(product) || 0) < requiredAmount) {
        allMatched = false;
        break;
      }
    }

    if (allMatched) {
      validDays++;
    }
  }

  return validDays;
}
