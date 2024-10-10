class Solution {
    public int[] solution(String s) {
        int cnt = 0;
        int zero = 0;
        while (!s.equals("1")) {
            int tmp=0;
            for (char c:s.toCharArray()) {
                if (c=='0') {
                    tmp++;
                }
            }
            zero += tmp;
            s = Integer.toString(s.replace("0","").length(), 2);
            cnt++;
        }
        return new int[]{cnt, zero};
    }
}