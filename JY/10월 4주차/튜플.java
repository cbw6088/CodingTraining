import java.util.*;

class Solution {
    public int[] solution(String s) {
        int[] answer = {};
        HashMap<Integer, Integer> hash = new HashMap<>();
        // STEP1. 문자열 처리
        List<Integer>answerList = new ArrayList<>();
        String[] strList = s.split("\\}");
        
        for(String str: strList){
            String subString = str.substring(2);
            
            // STEP2. 해시에 삽입
            String[] newList = subString.split(",");
            for(String newStr : newList){
                int key = Integer.parseInt(newStr);
                if (hash.getOrDefault(key, 0) == 0){
                    hash.put(key, 1);
                }else{
                    hash.put(key, hash.get(key)+1);
                }
            }
        }
        // STEP3. 자주 등장한 순으로 정렬
        hash.entrySet()
            .stream()
            .sorted(Map.Entry.<Integer, Integer>comparingByValue().reversed()) 
            .forEach(entry -> 
                     answerList.add(entry.getKey())
                    );
        
        // STEP4. 정답 넘기기
        answer = new int[answerList.size()];
        for(int i=0; i<answerList.size(); i++){
            answer[i] = answerList.get(i);
        }
       
        
        return answer;
    }
}