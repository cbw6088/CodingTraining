import java.util.*;

class Solution {
    public int solution(int[] elements) {
        Set<Integer> set = new HashSet<>();
        List<Integer> nums = new ArrayList<>();
        int n = elements.length;
        for (int i=0; i<elements.length*2; i++) {
            nums.add(elements[i%n]);
        }

        for (int i=0; i<n; i++) {
            int tmp=0;
            for (int j=0; j<n; j++) {
                tmp+=nums.get(i+j);
                set.add(tmp);
            }
        }

        return set.size();
    }
}