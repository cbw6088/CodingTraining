function solution(n, t, m, p) {
    let answer = '';
    let num = 0;
    let cnt = 0;

    while(answer.length < t){
        // n진수로 변환하고 대문자로 변환
        const current = num.toString(n).toUpperCase();
        
        // 변환된 숫자 문자열의 각 자릿수를 순서대로 확인
        for(let i = 0; i < current.length; i++){
            if(cnt % m === p - 1){
                answer += current[i];
                if(answer.length === t) break; // 종료 조건
            }
            cnt++; // 말할 차례 증가
        }
        num++; // 다음 숫자로 이동
    }

    return answer;
}
