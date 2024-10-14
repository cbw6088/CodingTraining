/**
 * 영어끝말잇기
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */

import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[n+1];
        int idx=1;
        List<String> record = new ArrayList<>();

        for (String word : words) {
            if (record.contains(word)) {
                return new int[] {idx, answer[idx]+1};
            } else if (record.size()>0){
                String lastWord = record.get(record.size()-1);
                if (lastWord.charAt(lastWord.length()-1) != word.charAt(0)) {
                    return new int[] {idx, answer[idx]+1};
                }
            }
            record.add(word);
            answer[idx]++;
            idx=idx==n?1:idx+1;
        }

        return new int[] {0,0};
    }
}