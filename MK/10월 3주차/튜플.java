import java.util.*;

class Solution {
    public int[] solution(String s) {
        Map<Integer, Integer> map = new HashMap<>();

        String[] arr = s.split(",");

        for (String c : arr) {
            Integer cs = Integer.valueOf(c.replaceAll("[{}]", ""));
            map.put(cs, map.getOrDefault(cs,0)+1);
        }

        List<Map.Entry<Integer, Integer>> list = new ArrayList<>(map.entrySet());
        list.sort(Map.Entry.<Integer, Integer>comparingByValue().reversed());

        int[] ans = new int[list.size()];
        int idx=0;
        for (Map.Entry<Integer, Integer> entry : list) {
            ans[idx++]=entry.getKey();
        }

        return ans;
    }
}