import java.util.*;

class Solution {
    public int solution(int[] citations) {

        int res = citations.length;

        Arrays.sort(citations);

        for (int i=0; i<citations.length; i++) {
            if (res <= citations[i]) {
                return res;
            }
            res--;
        }

        return res;
    }
}