function solution(clothes) {
  const d = {};
  clothes.forEach((cloth) => {
    const category = cloth[1];
    if (d[category]) {
      d[category]++;
    } else {
      d[category] = 1;
    }
  });
  return Object.values(d).reduce((prev, cur) => prev * (cur + 1), 1) - 1;
}
