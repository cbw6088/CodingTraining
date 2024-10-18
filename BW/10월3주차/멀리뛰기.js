// 출력 예시와 문제 스타일이 이 전 피보나치와 비슷한 점에서 착안

function solution(n) {
    var fibo = [];
    fibo[0] = 1, fibo[1] = 1;
    
    for(i=2; i<=n; i++){
        fibo[i] = (fibo[i-1] + fibo[i-2])%1234567;
    }

    return fibo[n];
}