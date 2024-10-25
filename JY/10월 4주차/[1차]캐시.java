import java.util.*;

class Solution {
    public int solution(int cacheSize, String[] cities) {
        LinkedList<String> cache = new LinkedList<>();
        int answer = 0;

        if (cacheSize == 0) {
            return cities.length * 5;
        }

        for (String city : cities) {
            city = city.toUpperCase();

            if (cache.contains(city)) {
                // 캐시 히트의 경우
                cache.remove(city);
                cache.add(city);
                answer += 1;
            } else {
                // 캐시 미스의 경우
                if (cache.size() < cacheSize) {
                    cache.removeFirst(); // LRU 원소 제거
                }
                cache.add(city);
                answer += 5;
            }
        }

        return answer;
    }
}
