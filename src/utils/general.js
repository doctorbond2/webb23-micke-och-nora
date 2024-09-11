export function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
export function firstLetterUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
