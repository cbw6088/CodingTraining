/**
 * 점프와 순간이동
 * https://programmers.co.kr/learn/courses/30/lessons/12980
 */
public class Solution {
    public int solution(int n) {
        int ans = 0;

        while (n != 0) {
            if (n%2==0) {
                n /= 2;
            } else {
                n--;
                ans++;
            }
        }

        return ans;
    }
}