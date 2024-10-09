function solution(s) {
    var arr = s.split(' ');
    var max = Math.max(...arr)
    var min = Math.min(...arr)
    var result = min + ' ' + max;
 
    return result;
}