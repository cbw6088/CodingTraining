class Solution {
    public int solution(int n) {
        int ans=0;

        for (int i=1; i<=n; i++) {
            int val=0;
            for (int j=i; j<=n; j++) {
                val += j;
                if (val==n) {
                    ans++;
                    break;
                }
                if (val > n) {
                    break;
                }
            }
        }
        return ans;
    }
}