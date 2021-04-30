function solution(participant, completion) {
  let answer;
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
  return participant.pop();
}
