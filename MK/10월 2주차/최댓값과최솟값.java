import java.util.*;

class Solution {
    public String solution(String s) {
        String[] strings = s.split(" ");
        List<Integer> arr = new ArrayList<>();

        for (String i : strings) {
            arr.add(Integer.valueOf(i));
        }

        Collections.sort(arr);

        return arr.get(0) + " " + arr.get(arr.size()-1);

    }
}