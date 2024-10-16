// A와 B를 2로 나누고 올림
// 두 값이 동일해지는 순간 대결
// 1 2 3 4 5 6 7 8
// 1 2 3 4
// 1 2

function solution(n,a,b)
{
    var answer = 0;
    var A = Math.ceil(a/2);
    var B = Math.ceil(b/2);
    var cnt = 1;
    
    while(true){
        if(A === B) break;
        
        A = Math.ceil(A/2);
        B = Math.ceil(B/2);
        cnt++;
    }

    return cnt;
}