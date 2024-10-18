class Solution {
    public int[] solution(int n, long left, long right) {

        int idx=0;
        int limit = (int) (right - left + 1);
        int[] ans = new int[limit];

        while (left <= right) {
            ans[idx++]=(int) Math.max(left/n,left%n)+1;
            left++;

        }

        return ans;
    }
}