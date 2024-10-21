import java.util.*;

class Solution {
    public int solution(String s) {
        int res=0;
        int cnt=s.length();


        while (cnt!=0) {
            cnt--;
            s = turn(s);
            res = check(s) ? res+1:res;
        }

        return res;
    }

    public String turn(String s) {
        StringBuilder sb = new StringBuilder(s);
        char c = sb.charAt(0);
        sb.deleteCharAt(0).append(c);
        return sb.toString();
    }


    public boolean check(String s) {
        Map<Character, Character> map = new HashMap<>();
        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');

        Stack<Character> stack = new Stack<>();

        String a = "([{";

        for (Character c : s.toCharArray()) {
            if (a.contains(String.valueOf(c))) {
                stack.push(c);
            } else if (stack.size() == 0 && !a.contains(String.valueOf(c))) {
                return false;
            } else if (stack.size() !=0 && !a.contains(String.valueOf(c))) {
                if (stack.get(stack.size()-1) == map.get(c)) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        return stack.size() == 0;

    }
}