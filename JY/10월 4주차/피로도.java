import java.util.*;


class Solution {
    public static int ANSWER = 0 ;
    public static int exploration_dungeons(int curr, int[] dungeons){
        // 현재 피로도가 요구 피로도보다 낮으면 빠이
        if (curr < dungeons[0])
            return -1;
        // 그게 아니라면 현재 피로도 계산 후 반환 (최소 필요 피로도"는 항상 "소모 피로도"보다 크거나 같다.)
        return curr - dungeons[1];
    }
    
    public static void backtracking(int level, int[][] dungeons, int curr, int cnt, boolean[] visit){
        if (level == dungeons.length){
            return;
        }
        
        // 탐색 가능하면 탐색
        for(int i=0; i<dungeons.length; i++){
            if (visit[i] == false){
                int remain = exploration_dungeons(curr, dungeons[i]);
                if(remain == -1){
                    continue;
                }
                ANSWER = Math.max(ANSWER, cnt+1);
                visit[i] = true;
                backtracking(level+1, dungeons, remain, cnt+1, visit);
                visit[i] = false;
                      
            }
        }
    }
    public int solution(int k, int[][] dungeons) {
        int answer = -1;
        /*
        exploration_dungeons(현재 피로도, 던전정보)
        - 탐색을 확인하기 위한 현재 피로도와 던전에서 요구하는 피로도를 계산하는 함수
        
        backtracking(level, 던전, 현재피로도, 탐험한 개수)
        - 1번째 던전부터 8번째 던전까지 모두 탐색하면서 정답값에 최댓값 갱신
        */
        
        for(int i=0; i<dungeons.length; i++){
            boolean[] visit = new boolean[dungeons.length];
            backtracking(0, dungeons, k, 0, visit);
        }
        answer = ANSWER;

        return answer;
    }
}