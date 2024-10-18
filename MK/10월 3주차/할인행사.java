import java.util.*;

class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        int res = 0;

        int n = discount.length;

        Map<String, Integer> map = new HashMap<>();

        for (int i=0; i<want.length; i++) {
            map.put(want[i], number[i]);
        }

        for (int i=0; i<n; i++) {
            if (i+10 > n || !map.containsKey(discount[i])) {
                continue;
            }

            Map<String, Integer> tmp = new HashMap<>();

            for (int j=i; j<i+10; j++) {
                tmp.put(discount[j], tmp.getOrDefault(discount[j],0)+1);
            }

            if (map.equals(tmp)) {
                res++;
            }


        }

        return res;
    }
}