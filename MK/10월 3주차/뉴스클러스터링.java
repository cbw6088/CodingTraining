import java.util.*;

class Solution {
    public int solution(String str1, String str2) {

        str1=str1.toLowerCase();
        str2=str2.toLowerCase();

        Map<String, Integer> map1 = new HashMap<>();
        Map<String, Integer> map2 = new HashMap<>();

        for (int i=0; i<str1.length()-1; i++) {
            String tmp = str1.substring(i, i+2).toLowerCase();

            boolean flag = true;
            for (char c : tmp.toCharArray()) {
                if (!(c >= 97 && c <= 122)) {
                    flag=false;
                    break;
                }
            }

            if (!flag) {
                continue;
            }

            map1.put(tmp, map1.getOrDefault(tmp,0)+1);
        }

        for (int i=0; i<str2.length()-1; i++) {
            String tmp = str2.substring(i, i+2).toLowerCase();
            boolean flag = true;
            for (char c : tmp.toCharArray()) {
                if (!(c >= 97 && c <= 122)) {
                    flag=false;
                    break;
                }
            }

            if (!flag) {
                continue;
            }
            map2.put(tmp, map2.getOrDefault(tmp,0)+1);
        }

        if (map1.size()==0 && map2.size()==0) {
            return 65536;
        }

        int tmp=0; // 합집합에 넣을 같은것의 개수
        int num1=0; //교집합 수
        int num2=0; //합집합 수

        for (String s : map1.keySet()) {
            if (map2.containsKey(s)) { // 같은거 판단
                num1+=Math.min(map1.get(s), map2.get(s)); // 교집합에 넣을거
                tmp+=Math.max(map1.get(s), map2.get(s)); //합집합에 넣을거
            } else {
                num2+=map1.get(s);
            }
        }

        for (String s : map2.keySet()) {
            if (!map1.containsKey(s)) {
                num2+=map2.get(s);
            }
        }
        num2+=tmp;

        return (int)Math.floor((double)num1/num2 * 65536);
    }
}