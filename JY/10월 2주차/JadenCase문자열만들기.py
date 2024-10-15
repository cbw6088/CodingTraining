def solution(s):
    answer = ''
    myword = s.split(" ")
    print(myword)
    
    for word in myword:
        if word == '':
            answer += " "
            continue
        if word[0].isalpha:
            answer += word[0].upper()
        else:
            answer += word[0]
        answer += word[1:].lower() + " "
    
    return answer[:-1]