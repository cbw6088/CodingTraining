function solution(scoville, K) {
    scoville.sort((a, b) => a - b);
    
    let mixCount = 0;

    while (scoville.length > 1 && scoville[0] < K) {
        const first = scoville.shift();
        const second = scoville.shift();

        const newScoville = first + second * 2;

        scoville.push(newScoville);
        scoville.sort((a, b) => a - b); // 삽입 후 오름차순 정렬

        mixCount++;
    }

    // 모든 음식의 스코빌 지수가 K 이상인지 확인
    return scoville[0] >= K ? mixCount : -1;
}
