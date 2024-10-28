function getTwoString(str){
    var result = [];
    var lowerStr = str.toLowerCase(); // 소문자
    
    for(var i=0; i<str.length-1; i++){
        var towStr = lowerStr[i] + lowerStr[i+1]; // 앞 뒤 글자 저장
        
        // 유효성검사
        if (lowerStr[i] >= 'a' && lowerStr[i] <= 'z' &&
            lowerStr[i + 1] >= 'a' && lowerStr[i + 1] <= 'z') {
            result.push(towStr);
        }
    }
    return result;
}

// 교집합
function getIntersection(arr1, arr2) {
    let intersection = [];
    let visited = new Array(arr2.length).fill(false);

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !visited[j]) {
                intersection.push(arr1[i]);
                visited[j] = true;
                break;
            }
        }
    }

    return intersection.length;
}

function getUnion(arr1, arr2) {
    let union = [...arr1];
    let visited = new Array(arr1.length).fill(false);

    // arr2의 원소를 순회하며 합집합 구하기
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] === arr1[j] && !visited[j]) {
                visited[j] = true; // arr1에서 이미 사용한 요소로 표시
                found = true; 
                break;
            }
        }
        // arr1에서 찾지 못한 경우, 합집합에 추가
        if (!found) {
            union.push(arr2[i]);
        }
    }

    return union.length;
}

function solution(str1, str2) {
    var answer = 0;
    var twoStr1 = getTwoString(str1);
    var twoStr2 = getTwoString(str2);
    // 예외 케이스
    if(twoStr1.length === 0 && twoStr2.length === 0) return 65536;
    
    var interStr = getIntersection(twoStr1, twoStr2);
    var unionStr = getUnion(twoStr1, twoStr2);
    
    answer = Math.floor((interStr/unionStr) * 65536);
    return answer;
}