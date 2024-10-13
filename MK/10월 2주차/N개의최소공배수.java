/**
 * N개의 최소공배수
 * https://programmers.co.kr/learn/courses/30/lessons/12953
 */

class Solution {
    public int solution(int[] arr) {

        int init=1;

        for (int i:arr) {
            init=(init*i)/gcd(i,init);
        }

        return init;
    }

    public int gcd(int a, int b) {
        if (b==0) {
            return a;
        }
        return gcd(b, a%b);
    }
}