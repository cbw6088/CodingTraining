function solution(n, left, right) {
    var answer = [];
    for(left; left <= right; left++) {
        let quot = parseInt(left / n);
        let mod = left % n;
        let maxValue = (quot > mod) ? quot : mod;
        answer.push(maxValue + 1);
    }
    return answer;
}

/*
패턴 찾기
n=3 -> 123 223 333
n=4 -> 1234 2234 3334 4444

총 길이는 n*n

left는 left/n, left%n
right는 right/n, right%n
각 더 큰 값 +1
*/