import java.util.*;

class Solution {
    public int solution(int cacheSize, String[] cities) {

        int res = 0;

        if (cacheSize == 0) {
            return 5 * cities.length;
        }

        Queue<String> dq = new ArrayDeque<>();

        for (String city:cities) {
            city = city.toLowerCase();
            if (!dq.contains(city)) {
                if (!(dq.size() == cacheSize)) {
                    dq.offer(city);
                } else {
                    dq.poll();
                    dq.offer(city);
                }
                res+=5;
                continue;
            }
            dq.remove(city);
            dq.offer(city);
            res++;
        }
        return res;

    }
}