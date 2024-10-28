function solution(priorities, location) {
    var arr = priorities;
    var maxIndex = [];
    var len = arr.length;
    var startIndex = 0;
    var str = String.fromCharCode(65 + location); // 알파벳 저장
    
    for(var i=0; i<len; i++){
        // -1을 제외한 가장 큰 값을 저장
        var maxData = Math.max(...arr.filter(value => value !== -1));
        // 현재 인덱스 부터 가장 큰 값의 인덱스 저장
        var currentIndex = arr.indexOf(maxData, startIndex);
        // 인덱스 0부터 가장 큰 값의 인덱스 저장
        var tempIndex = arr.indexOf(maxData);
        // 인덱스 크기 비교
        if (tempIndex !== -1 && tempIndex > currentIndex) {
            currentIndex = tempIndex;
        }
        // 가장 큰 인덱스 푸쉬
        maxIndex.push(currentIndex);
        // 푸쉬 후엔 현재 값 -1로 저장
        arr[currentIndex] = -1;
        
        startIndex = maxIndex[i] + 1;
        if(startIndex >= len) startIndex = 0;
    }
    
    console.log(maxIndex)
    
    // 알파벳 위치 찾기
    for(var i=0; i<maxIndex.length; i++){
        if(str === String.fromCharCode(65 + maxIndex[i])) return i+1
    }
    return ;
}