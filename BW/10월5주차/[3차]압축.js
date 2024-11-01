function solution(msg) {
    var answer = [];
    var alphabet = new Map();
    var idx = 27;

    // A~Z 저장
    for (var i = 0; i < 26; i++) {
        var str = String.fromCharCode(65 + i);
        alphabet.set(str, i + 1);
    }

    for (var i=0; i < msg.length; i++) {
        var w = msg[i];
        var c = '';

        // 다음 글자가 포함된게 배열에 있는 경우
        while (i + 1 < msg.length && alphabet.has(w + msg[i + 1])) {
            w += msg[++i];
        }

        // 색인 번호 추가
        answer.push(alphabet.get(w));

        // 다음 글자가 남아있다면 w+c를 추가
        if (i + 1 < msg.length) {
            c = msg[i + 1];
            alphabet.set(w + c, idx++);
        }
    }

    return answer;
}