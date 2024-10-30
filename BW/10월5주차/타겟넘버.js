var cnt = 0; // 전역변수 (참조 안됨?)

function DFS(numbers, target, sum, idx){
    if(idx === numbers.length){ // 종료 조건
        if(sum === target) cnt++;
        return;
    }
    
    DFS(numbers, target, sum+numbers[idx], idx+1); // 더하기
    DFS(numbers, target, sum-numbers[idx], idx+1); // 빼기
}

function solution(numbers, target) {
    var tree = numbers;
    DFS(numbers, target, 0, 0, 0);
    return cnt;
}