import sys
sys.setrecursionlimit(10**8)

def is_possible(skill, my_skill):
    # print(f" skill is {skill}  my_skill is {my_skill}")
    for i in range(len(my_skill)):
        if skill[i] != my_skill[i]:
            return False
    return True
    
def solution(skill, skill_trees):
    answer = 0
    
    skill_list = []
    # 1. 현재 skill_trees에 있는 스킬 트리 중 skill에 있는 순서만 처리
    for skill_tree in skill_trees:
        my_skill = ""
        for ch in skill_tree:
            if ch in skill:
                my_skill += ch
        skill_list.append(my_skill)
    # 결과값 : BCD, CBD, CB, BD
    
    # 스킬트리 순서랑 같다면 정답 추가
    for s in skill_list:
        if is_possible(skill, s):
            answer +=1
    
    return answer