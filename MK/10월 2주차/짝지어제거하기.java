/**
 * 짝지어 제거하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */
class Solution {
    public int solution(String s) {
        int n=s.length();

        if (n%2 == 1) {
            return 0;
        }

        StringBuilder sb = new StringBuilder();

        for (char c:s.toCharArray()) {

            if (sb.length()!=0 && sb.charAt(sb.length()-1) == c) {
                sb.deleteCharAt(sb.length()-1);
            } else {
                sb.append(c);
            }

        }

        return sb.length()==0?1:0;
    }
}