function solution(arr1, arr2) {
    var col = arr1.length; // arr1의 세로 길이
    var row = arr2[0].length; // arr2의 가로 길이
    var len = arr2.length; // arr2의 세로 길이
    var newArr = new Array(col);   

    for (var i = 0; i < col; i++) {
        newArr[i] = new Array(row); // 2차원 배열 선언
        for (var j = 0; j < row; j++) {
            var sum = 0;
            for (var k = 0; k < len; k++) {
                sum += arr1[i][k] * arr2[k][j]; 
            }
            newArr[i][j] = sum; // 결과 계산
        }
    }
    return newArr;
}
