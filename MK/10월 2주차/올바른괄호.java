class Solution {
    boolean solution(String s) {

        int cnt=0;

        for (Character c : s.toCharArray()) {
            if (cnt==0 && c==')') {
                return false;
            } else if (c=='(') {
                cnt++;
            } else if (cnt>0 && c==')') {
                cnt--;
            }
        }

        return cnt==0;
    }
}