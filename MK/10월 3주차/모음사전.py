from itertools import product
def solution(word):
    s=list("AEIOU")
    tmp = []
    for i in range(1, 6):
        tmp+=list(map("".join, product(s, repeat=i)))
    return sorted(tmp).index(word)+1


# class Solution {
#     public static String s = "AEIOU";
#     public static int ans;
#     public static boolean flag;
#     public int solution(String word) {
#         ans = 0;
#         flag = false;
#         dfs("",word);
#         return ans;
#     }
#     public static void dfs(String str, String word){
#         if(flag)
#             return;
#         if(str.length() > 5)
#             return;
#         if(str.length()>0){
#             ans++;
#             if(word.equals(str)){
#                 flag = true;
#             }
#         }
#         for(int i = 0; i < 5; i++){
#             dfs(str+s.charAt(i),word);
#         }
#         return;
#     }
# }