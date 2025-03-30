//Jonah Odongo and Precious Nahumuza

export default function factorial(n) {
  if (n < 0) {
    throw new Error("Negative numbers are not allowed.");
  }
  return n === 0 ? 1 : n * factorial(n - 1);
}