class Solution {
    public int solution(int n) {
        int cnt=0;
        String s = Integer.toBinaryString(n);

        for (char c:s.toCharArray()) {
            if (c=='1') {
                cnt++;
            }
        }

        while (true) {
            n++;
            int tmp=0;
            String t = Integer.toBinaryString(n);

            for (char c:t.toCharArray()) {
                if (c=='1') {
                    tmp++;
                }
            }

            if (cnt==tmp) {
                break;
            }

        }
        return n;
    }
}