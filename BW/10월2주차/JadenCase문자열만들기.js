function solution(s) {
    var str = s.toLowerCase().split('');
    if(isNaN(str[0])) str[0] = str[0].toUpperCase();
    
    for(var i=0; i<str.length-1; i++){
        if(str[i] === ' ' && isNaN(str[i+1])){
            str[++i] = str[i].toUpperCase();
            continue;
        }
    }
    
    if(str[str.length-2] === ' ' && isNaN(str[str.length-1])){
        str[str.length-1] = str[str.length].toUpperCase();
    }
    str = str.join('');
    
    return str;
}