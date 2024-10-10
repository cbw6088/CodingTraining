class Solution {
    public String solution(String s) {

        StringBuilder answer = new StringBuilder();

        String[] arr = s.split(" ");

        for(int i = 0; i < arr.length; i++){
            if(arr[i].length() == 0){
                answer.append(" ");
            }
            else{
                answer.append(arr[i].substring(0, 1).toUpperCase())
                        .append(arr[i].substring(1).toLowerCase())
                        .append(" ");
            }
        }

        if(s.charAt(s.length()-1) == ' ')
            return answer.toString();

        answer.deleteCharAt(answer.length()-1);

        return answer.toString();
    }
}