import java.util.*;
/*
- 영문자만 유효
- 대문자 변환
- 2글자씩 스플릿
*/

class Solution {
    public static int MOD = 65536;
    

    public static Map<String, Integer> split_word(String str){
        Map<String, Integer> hash = new HashMap<>();
        
        
        for(int i=0; i<str.length()-1; i++){
            boolean flag = true;
            String subString = str.substring(i, i+2);
            
            for(int j=0; j<subString.length(); j++){
                if(!Character.isAlphabetic(subString.charAt(j)))
                    flag = false;
            }
            if(flag){
                hash.put(subString, hash.getOrDefault(subString, 0) +1);
            }
        }
                
        return hash;
    }
    public int solution(String str1, String str2) {
        int answer = 0;
        str1 = str1.toUpperCase();
        str2 = str2.toUpperCase();
        
        // 2글자씩 스플릿
        Map<String, Integer> hash1 = split_word(str1);
        Map<String, Integer> hash2 = split_word(str2);
        
        
        int[] sum = {0, 0};  // 
        //합집합
        Map<String, Integer> union = new HashMap<>(hash1);
        hash2.forEach((key, value) -> {
            union.merge(key, value, Math::max);
        });
        
        //교집합
        Map<String, Integer> intersection = new HashMap<>();
        hash1.forEach((key, value) ->{
            if(hash2.containsKey(key))
                intersection.put(key, Math.min(value, hash2.get(key)));
        });
        
        
        union.forEach((key, value) -> {
            sum[0]+=value;
            
        });
                
        intersection.forEach((key, value) -> {
            sum[1]+=value;
        });
        
        if (sum[0] == 0) {
            return MOD; // 자카드 유사도 1.0에 해당하는 65536 반환
        }
        
        double temp = ((double)sum[1] / (double)sum[0]) * MOD;
        answer = (int)temp;
        
        return answer;
    }
}