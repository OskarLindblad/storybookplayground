export default function displayedApproximation(approximation) {
  let estimation;

  if (approximation === 1) {
    estimation = `1 month`;
  } else if (approximation < 12) {
    estimation = `${approximation} months`;
  } else {
    const years = (approximation / 12).toString();
    const months = approximation % 12;
    if (months === 0) {
      if (years === 1) {
        estimation = `${years.split(".")[0]} year`;
      } else {
        estimation = `${years.split(".")[0]} years`;
      }
    } else {
      estimation = `${years.split(".")[0]} y ${months} m`;
    }
  }
  return `${estimation}`;
}
