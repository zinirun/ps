function solution(array, commands) {
  return commands.map(
    (c) => [...array].slice(c[0] - 1, c[1]).sort((a, b) => a - b)[c[2] - 1]
  );
}
