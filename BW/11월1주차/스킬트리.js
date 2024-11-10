function solution(skill, skill_trees) {
    var answer = 0;
    
    for (var i = 0; i < skill_trees.length; i++) {
        var idx = 0;
        var flag = true;
        for (var j = 0; j < skill_trees[i].length; j++) {
            var current = skill_trees[i][j];
            var skillIdx = skill.indexOf(current);
            
            if (skillIdx !== -1) { // 존재하는지 확인
                if (skillIdx > idx) { // 위치 확인
                    flag = false;
                    break;
                }
                if (skillIdx === idx) {
                    idx++;
                }
            }
        }
        if (flag) answer++;
    }
    return answer;
}
