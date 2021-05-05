function solution(begin, target, words) {
  let answer = Infinity;
  let visit = words.reduce((obj, word) => {
    obj[word] = false;
    return obj;
  }, {});

  if (!words.includes(target)) return 0;

  bfs(begin, 0);

  return answer === Infinity ? 0 : answer;

  function bfs(begin, cnt) {
    if (begin === target) {
      if (answer > cnt) answer = cnt;
      return;
    }

    for (const word of words.filter((word) => ruled(begin, word))) {
      if (!visit[word]) {
        visit[word] = true;
        bfs(word, cnt + 1);
        visit[word] = false;
      }
    }
  }

  function ruled(a, b) {
    let cnt = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        cnt++;
      }
    }
    return cnt === 1;
  }
}
