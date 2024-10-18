import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        int n = progresses.length;
        List<Integer> days = new ArrayList<>();
        List<Integer> res = new ArrayList<>();
        for (int i=0; i<n; i++) {
            days.add((int)Math.ceil((double)(100-progresses[i]) / speeds[i]));
        }

        int maxValue = days.get(0);
        int deploy=1;

        for (int i=1; i<days.size(); i++){
            if (maxValue < days.get(i)) {
                maxValue = days.get(i);
                res.add(deploy);
                deploy=1;
            } else {
                deploy++;
            }
        }
        res.add(deploy);

        int[] ans=new int[res.size()];

        for (int i=0; i<res.size(); i++) {
            ans[i]=res.get(i);
        }

        return ans;
    }
}