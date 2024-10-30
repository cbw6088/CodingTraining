import java.util.*;

class Solution {
    public static int answer= 0 ;
    public void bt(int level, int[] numbers, int target, int score){
        if(level == numbers.length){
            if(score == target)
                answer++;
            return;
        }
            bt(level+1, numbers, target, numbers[level] + score);
            bt(level+1, numbers, target,  score-  numbers[level]);
    }
    public int solution(int[] numbers, int target) {
        
        bt(0, numbers, target, 0);
        return answer;
    }
}