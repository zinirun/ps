function solution(citations) {
  const cit = citations.sort((a, b) => a - b);
  for (let i = 0; i < cit.length; i++) {
    if (cit[i] >= cit.length - i) {
      return cit.length - i;
    }
  }
  return 0;
}
