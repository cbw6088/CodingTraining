def solution(files):
    res=[]
    
    n = len(files)
    
    for i in range(n):
        number=""
        for f in files[i]:
            if number and not f.isdigit():
                break
            if f.isdigit():
                number += f
                if len(number) == 5:
                    break
        res.append([files[i], files[i].split(number)[0].lower(),int(number), i])
    
    res.sort(key=lambda x:(x[1], x[2], x[3]))
    return [i[0] for i in res]