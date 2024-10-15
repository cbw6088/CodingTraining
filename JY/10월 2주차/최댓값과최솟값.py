def solution(s):
    string_to_int = map(int, s.split(" "))
    number_list = list(string_to_int)
    number_list.sort()
    
    answer = f"{number_list[0]} {number_list[-1]}"
    
    return answer