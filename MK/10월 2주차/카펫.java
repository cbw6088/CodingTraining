/**
 * 카펫
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 */
class Solution {
    public int[] solution(int brown, int yellow) {
        int start = brown-4;
        int r = start-2;
        int c = 2;

        while (true) {
            int a=(int) r/2;
            int b=(int) c/2;
            if (a*b==yellow) {
                r = a+2;
                c = b+2;
                break;
            }
            r-=2;
            c+=2;
        }
        return new int[] {r,c};
    }
}