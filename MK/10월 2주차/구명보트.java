/**
 * 구명보트
 * 문제: https://school.programmers.co.kr/learn/courses/30/lessons/42885
 */

import java.util.*;

class Solution {
    public int solution(int[] people, int limit) {
        int res=0;
        int n=people.length;

        Arrays.sort(people);

        int left=0;
        int right=n-1;

        while (left < right) {
            if (people[left] + people[right] <= limit) {
                res++;
                left++;
                right--;
            } else {
                right--;
            }
        }

        return n-res;
    }
}