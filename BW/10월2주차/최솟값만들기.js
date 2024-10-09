function solution(A,B){
    var answer = 0;

    /* 가장 작은 수 * 가장 큰 수 */
    var a = A.sort((a,b) => a-b); // 오름차순
    var b = B.sort((a,b) => b-a); // 내림차순
    
    for(i=0; i<a.length; i++){
        answer += a[i]*b[i];
    }

    return answer;
}