import java.util.*;
class Solution {
    int[] dx= {1,-1,0,0};
    int[] dy= {0,0,1,-1};

    public int solution(int[][] maps) {
        int n=maps.length, m=maps[0].length;

        boolean[][] check = new boolean[n][m];

        return bfs(maps, check, 0,0,n,m);

    }

    public int bfs(int[][] maps, boolean[][] check, int x, int y, int n, int m) {
        Queue<int[]> q=new LinkedList<>();
        q.add(new int[]{x,y,1});
        check[x][y]=true;
        while (!q.isEmpty()) {
            int[] cur=q.poll();
            int curX=cur[0];
            int curY=cur[1];
            int cnt=cur[2];
            if (curX==n-1 && curY==m-1) {
                return cnt;
            }
            for (int i=0; i<4; i++) {
                int nx=curX+dx[i], ny=curY+dy[i];
                if (0<=nx&&nx<n&&0<=ny&&ny<m &&maps[nx][ny]==1 &&!check[nx][ny]) {
                    q.add(new int[]{nx,ny,cnt+1});
                    check[nx][ny]=true;
                }
            }

        }
        return -1;

    }
}