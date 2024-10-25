function isValid(cacheSize, city, LRU) {
    var flag = false;

    for (var i = 0; i < LRU.length; i++) {
        if (city === LRU[i]) {
            LRU.splice(i, 1);  // 해당 도시 제거
            LRU.push(city);    // 최신으로 갱신
            flag = true;       // hit 발생
            break;
        }
    }
    return flag;
}

function solution(cacheSize, cities) {
    var answer = 0;
    var LRU = [];
    var runningTime = 0;
    cities = cities.map(city => city.toLowerCase());

    if (cacheSize === 0) {  // 캐시 크기가 0일 경우
        return cities.length * 5;
    }

    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];

        if (isValid(cacheSize, city, LRU)) {
            runningTime += 1;
        } else {
            if (LRU.length === cacheSize) {
                LRU.shift();  // LRU배열에 따라 가장 오래된 항목 제거
            }
            LRU.push(city);  // 새로운 도시 추가
            runningTime += 5;
        }
    }

    return runningTime;
}
