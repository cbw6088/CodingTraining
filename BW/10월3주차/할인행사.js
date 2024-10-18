/* 죄송합니다.. 8.3점입니다... */
/* 죄송합니다.. 8.3점입니다... */
/* 죄송합니다.. 8.3점입니다... */
/* 죄송합니다.. 8.3점입니다... */
/* 죄송합니다.. 8.3점입니다... */
/* 죄송합니다.. 8.3점입니다... */

function findItem(discountMap, newArr, count) {
    if (discountMap.has(newArr)) {
        discountMap.set(newArr, discountMap.get(newArr) + 1);
    } else {
        discountMap.set(newArr, 1);
    }

    // 현재 제품의 수량이 원하는 수량을 초과하지 않는지 체크
    return discountMap.get(newArr) <= count;
}

function solution(want, number, discount) {
    var row = 2;
    var col = want.length;
    var arr = new Array(col);
    
    /* 2차원 배열로 want, number 각각 저장 */
    for (var i = 0; i < want.length; i++) {
        arr[i] = new Array(row).fill(0);
        arr[i][0] = want[i];
        arr[i][1] = number[i];
    }
    
    var answer = 0;
    
    for (var i = 0; i <= discount.length - 10; i++) {
        var newArr = arr.slice();
        var discountMap = new Map();

        for (var j = i; j < i + 10; j++) {
            for (var k = 0; k < want.length; k++) {
                if (findItem(discountMap, newArr[k][0], newArr[k][1])) {
                    continue;
                } else {
                    break;
                }
            }
        }
        
        // 원하는 수량을 모두 충족하면 answer 증가
        var flag = true;
        for (var k = 0; k < want.length; k++) {
            if (discountMap.get(newArr[k][0]) !== newArr[k][1]) {
                flag = false;
                break;
            }
        }
        
        if (flag) answer++;
    }

    return answer;
}
