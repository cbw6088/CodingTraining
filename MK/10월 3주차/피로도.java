import java.util.*;
class Solution {

    public List<String> arr = new ArrayList<>();

    public int solution(int k, int[][] dungeons) {
        int res = 0;
        bt(dungeons.length, 0, new StringBuilder());

        for (String e : arr) {
            int cnt=0;
            int limit=k;
            for (char c : e.toCharArray()) {
                if (limit < dungeons[c-'0'][0]) {
                    break;
                } else {
                    limit -= dungeons[c-'0'][1];
                    cnt++;
                }
            }
            res=Math.max(cnt, res);
        }


        return res;
    }

    public void bt(int num, int level, StringBuilder s) {
        if (level == num) {
            arr.add(s.toString());
            return;
        }

        for (int i=0; i<num; i++) {
            if (!s.toString().contains(String.valueOf(i))) {
                bt(num, level+1, s.append(String.valueOf(i)));
            }
        }

    }
}