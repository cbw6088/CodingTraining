import java.util.*;


class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        
        //step.1 모든 단어를 순회
        HashMap<String, Boolean>english = new HashMap<>();
        String word = "";
        int flag = 0;
        int turn = 0;
        int person = 0;
        for(int i=0; i<words.length; i++){
            // step.2 : 끝말잇기 확인
            turn = (i/n) +1;
            person = (person%n) + 1;
            if(i == 0){
                word = words[i];
            }
            else{
                if(word.charAt(word.length()-1) == words[i].charAt(0)){
                    word = words[i];
                }else{flag = 1; break;}
            }
            // step.3 : 끝말잇기 단어에 추가
            if(english.get(word) == null){
                english.put(word, true);
            }else{flag = 2; break;}
            
        }// for문
        if(flag != 0){ // 끝말잇기 규칙이 어긋난 경우
            answer[0] = person;
            answer[1] = turn;
        }
        return answer;
    }
}