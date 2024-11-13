import java.util.*;

class Solution {
    public static int[][] grid;
    public static int[] dx = {0, 0, 1, -1};
    public static int[] dy = {1, -1, 0, 0};
    public static class Point{
        int x;
        int y;
        
        public Point(int x, int y){
            this.x = x;
            this.y = y;
        }
    }
    
    public static boolean is_possible(int nx, int ny){
        if(nx < 0 || nx >= grid[0].length)
            return false;
        if(ny < 0 || ny >= grid.length)
            return false;
        return true;
    }
    
    public static void print(int[][] arr){
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i].length; j++){
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
    
    public static int bfs(Point start){
        Queue<Point>q = new LinkedList<>();
        q.add(start);
        
        int[][] dis = new int[grid.length][grid[0].length];
        dis[start.y][start.x] = 1;
        
        while(!q.isEmpty()){
            Point p = q.poll();
            for(int i=0; i<4; i++){
                int nx = p.x + dx[i];
                int ny = p.y + dy[i];
                
                if(is_possible(nx, ny) && grid[ny][nx] == 1 && dis[ny][nx] == 0){
                    dis[ny][nx] = dis[p.y][p.x]+1;
                    q.add(new Point(nx, ny));
                }
            }
        }
        return dis[grid.length-1][grid[0].length-1];
    }
    
    public int solution(int[][] maps) {
        int answer = 0;
        grid = maps;
        
        // print(grid);
        answer = bfs(new Point(0, 0));
        if(answer == 0)
            answer = -1;
        return answer;
    }
}