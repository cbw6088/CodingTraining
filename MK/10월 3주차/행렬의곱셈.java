class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {

        int n=arr1.length;
        int m=arr2[0].length;
        int c=arr2.length;

        int[][] res = new int[n][m];

        for (int i=0; i<n; i++) {
            for (int j=0; j<m; j++) {
                int tmp=0;
                for (int k=0; k<c;k++) {
                    tmp+= arr1[i][k] * arr2[k][j];
                }
                res[i][j]=tmp;
            }
        }

        return res;
    }
}