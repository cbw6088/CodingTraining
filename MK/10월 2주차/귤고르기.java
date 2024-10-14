/**
 * 귤고르기
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/138476
 */
import java.util.*;

class Solution {
    public int solution(int k, int[] tangerine) {
        Map<Integer, Integer> map = new HashMap<>();
        int ans=0;
        for (int i: tangerine) {
            map.put(i, map.getOrDefault(i,0)+1);
        }

        List<int[]> arr = new ArrayList<>();

        for (Map.Entry<Integer, Integer> entry:map.entrySet()) {
            arr.add(new int[]{entry.getValue(), entry.getKey()});
        }

        Collections.sort(arr, (x,y)->y[0]-x[0]);


        for (int[] tmp : arr) {
            k -= tmp[0];
            ans++;
            if (k<=0) {
                break;
            }
        }

        return ans;
    }
}