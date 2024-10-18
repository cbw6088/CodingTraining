function solution(elements) {
    var arr = elements;
    var answer = new Set();  // 중복을 제거
    var add = 0;
    
    var circle = arr.concat(arr); // 원형배열을 계산하기 위해 배열을 이어붙임
    
    for (let length = 1; length <= arr.length; length++) {
        for (let start = 0; start < arr.length; start++) {
            add = 0;
            // 수열 합 계산
            for (let k = start; k < start + length; k++) {
                add += circle[k];
            }
            // Set에 추가
            answer.add(add);
        }
    }

    console.log(answer.size);
    return answer.size;
}
