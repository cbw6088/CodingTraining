import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        int ans=0;
        int n=priorities.length;

        Queue<int[]> q=new LinkedList<>();
        PriorityQueue<Integer> heap=new PriorityQueue<>((x,y)->y-x);

        for (int i=0; i<n; i++) {
            q.offer(new int[] {i, priorities[i]});
            heap.offer(priorities[i]);
        }

        while (!q.isEmpty()) {
            int[] vals = q.poll();
            int cur=heap.poll();
            if (vals[1] != cur) {
                heap.offer(cur);
                q.offer(vals);
            } else {
                if (vals[0]==location) {
                    break;
                }
                ans++;
            }
        }
        return ans+1;
    }

}