function sumTo(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    i += count;
    if (n < 0) {
      return 0;
    }
  }
  return count;
}

console.log(sumTo(5));
