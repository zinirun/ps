function solution(numbers) {
  const a = numbers
    .map((n) => n.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return a[0] === "0" ? "0" : a;
}
