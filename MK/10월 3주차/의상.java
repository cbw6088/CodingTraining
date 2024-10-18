import java.util.*;

class Solution {
    public int solution(String[][] clothes) {

        int ans=1;

        Map<String, Integer> map = new HashMap<>();

        for (String[] cloth : clothes) {
            map.put(cloth[1], map.getOrDefault(cloth[1], 0)+1);
        }

        for (Integer num : map.values()) {
            ans *= (num+1);
        }
        return ans-1;
    }
}