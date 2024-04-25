export function isMobile() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  return screenWidth < 768 || screenHeight < 768; // Adjust the threshold as needed
}