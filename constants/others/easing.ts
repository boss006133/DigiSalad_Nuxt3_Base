export const easing = {
  easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: (x) =>
    x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeOutQuart: (x) => 1 - Math.pow(1 - x, 4),
  linear: (x) => x,
}
