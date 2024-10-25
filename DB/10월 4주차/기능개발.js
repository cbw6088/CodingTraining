function solution(progresses, speeds) {
  const releaseTime = [];
  const funcRelease = [];

  // progresses 배열을 인덱스와 함께 순회
  progresses.forEach((prog, index) => {
    const leftProg = 100 - prog;
    const speed = speeds[index];
    let releaseDay;

    // 배포 소요시간 계산
    if (leftProg % speed === 0) {
      releaseDay = Math.floor(leftProg / speed);
    } else {
      releaseDay = Math.floor(leftProg / speed) + 1;
    }

    releaseTime.push(releaseDay);
  });

  let currentRelease = releaseTime[0];
  let releaseCount = 1;

  // 배포 그룹 계산
  for (let i = 1; i < releaseTime.length; i++) {
    if (releaseTime[i] <= currentRelease) {
      releaseCount += 1;
    } else {
      funcRelease.push(releaseCount);
      currentRelease = releaseTime[i];
      releaseCount = 1;
    }
  }

  // 마지막 배포 그룹 추가
  funcRelease.push(releaseCount);

  return funcRelease;
}
