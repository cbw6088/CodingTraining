function solution(k, tangerine) {    
    var arr = [];
    for(let i of tangerine){
        arr[i] = (arr[i] || 0)+1;
    }
    arr[0] = 0 // 0에는 빈 값이 들어감 (k는 1이상)
    
    arr.sort((a,b) => b-a); // 내림차순
    
    var cnt=0; // 반복 횟수
    var num=0; // 크기를 누적해서 더하기
    
    for(let i of arr){
        if(num >= k) break;
        num += i;
        cnt++;
    }
    return cnt;
}