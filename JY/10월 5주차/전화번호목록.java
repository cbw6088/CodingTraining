import java.util.*;

class Solution {
    public boolean solution(String[] phone_book) {
        
        /*
        최소 길이로 시작해서 맞다면 조금씩 증가
        ["12", "13125", "567", "5687", "5678"]  = fasle
        
        ["12", "567", "5678", "5687" "13125"]  = fasle
        {
            "12" : "12",
            "56" : "567",
            "56" : "5678",
            "56" : "5687",
            "13" : "13125"
        }
        
        
        ["12", "567", "5687", "13125"] = true
        {
            "12" : "12",
            "56" : "567",
            "56" : "5687",
            "56" : "56876", -> ??
            "13" : "13125",
        }
        */

        boolean answer = true;
        List<String>stringList = new ArrayList<>();
        for(int i=0; i<phone_book.length; i++){
            stringList.add(phone_book[i]);
        }
        // 문자열의 길이로 정렬 후 최소 길이만 반환
        stringList.sort((s1, s2) -> s1.length() - s2.length());
        int miniumSize = stringList.get(0).length();
        
        Map<String, String> hash = new HashMap<>();
        
        // phone_book을 순회하면서 
        for(String str : stringList){
            // 최소 길이만큼 스트링을 잘라서 사전에 있는지 확인
            if (hash.getOrDefault(str.substring(0, miniumSize), "") == ""){
                hash.put(str.substring(0, miniumSize), str);
            }else{ //만약 똑같은게 있다면 진짜 똑같은지 확인
                String s1 = hash.get(str.substring(0, miniumSize));
                String s2 = str.substring(0, s1.length());
                
                if(s1.equals(s2)){
                    answer = false;
                    break;
                }
                
            }
        }
        return answer;
    }
}