class Solution {
    public int ans=0;
    public int solution(int[] numbers, int target) {
        dfs(0,0,numbers,target);
        return ans;
    }

    public void dfs(int val, int level, int[] numbers, int target) {
        if (level == numbers.length) {
            if (val == target) {
                ans++;
            }
            return;
        }

        dfs(val + numbers[level], level+1, numbers, target);
        dfs(val - numbers[level], level+1, numbers, target);
    }
}