function solution(numbers) {
    var answer = new Array(numbers.length).fill(-1);
    var stack = [];

    for (var i = 0; i < numbers.length; i++) {
        for (var j = stack.length - 1; j >= 0; j--) {
            // 뒤의 값이 더 큰 경우
            if (numbers[stack[j]] < numbers[i]) {
                answer[stack[j]] = numbers[i];
                stack.pop();
            } else {
                break;
            }
        }
        // 인덱스를 스택에 추가
        stack.push(i);
    }

    return answer;
}
