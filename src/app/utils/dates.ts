export const days = Array.from({ length: 31 }, (_, i) => i + 1);

export const years = Array(2022 - 1922 + 1)
  .fill(1922)
  .map((year, index) => year + index)
  .sort((a, b) => b - a);

export const months = Array.from({ length: 12 }, (_, i) => i + 1);
