import java.util.*;

class Solution {
    public static class Process{
        int idx;
        int priority;

        public Process(int idx, int priority){
            this.idx = idx;
            this.priority = priority;
        }
    }
    public int solution(int[] priorities, int location) {
        // 미리 정렬 하기 
        List<Integer>arrList = new ArrayList<>();
        Queue<Process> q = new LinkedList<>();
        for(int i=0; i<priorities.length; i++){
            arrList.add(priorities[i]);
            q.add(new Process(i, priorities[i]));
        }
        /*
        [1, 1, 9, 1, 1 ,1]
        [9, 1, 1, 1, 1 ,1]
        */
                
        arrList.sort((a,b ) -> b-a);

        int answer = 0;
        
        // 큐를 돌면서 가장 큰 수부터 빼주고 아니면 뒤에 삽입
        while (!q.isEmpty()){
            Process p = q.poll();

            if(p.priority == arrList.get(answer)){
                answer++;
                if(p.idx == location){
                    break;
                }
                continue;
            }
            q.add(p);
        }
        return answer;
    }
}