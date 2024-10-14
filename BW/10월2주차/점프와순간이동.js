function solution(n) {
    var N=n;
    var K=0;
    
    while(N > 0){
        if(N%2 === 0) N /= 2; // 순간이동
        else{ // 한 칸 이동
            N--;
            K++;
        }
    }

    return K;
}