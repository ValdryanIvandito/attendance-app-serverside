export default function generateOrderDate(expiredDated) {
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");

  let secondsToAdd = 0;

  if (typeof expiredDated === "number") {
    secondsToAdd = expiredDated;
  } else {
    if (expiredDated.endsWith("d")) {
      const daysToAdd = parseInt(expiredDated, 10);
      secondsToAdd = daysToAdd * 24 * 60 * 60;
    } else if (expiredDated.endsWith("h")) {
      const hoursToAdd = parseInt(expiredDated, 10);
      secondsToAdd = hoursToAdd * 60 * 60;
    } else if (expiredDated.endsWith("m")) {
      const minutesToAdd = parseInt(expiredDated, 10);
      secondsToAdd = minutesToAdd * 60;
    } else if (expiredDated.endsWith("s")) {
      secondsToAdd = parseInt(expiredDated, 10);
    }
  }

  date.setSeconds(date.getSeconds() + secondsToAdd);

  const updatedDD = String(date.getDate()).padStart(2, "0");
  const updatedhh = String(date.getHours()).padStart(2, "0");
  const updatedmm = String(date.getMinutes()).padStart(2, "0");
  const updatedss = String(date.getSeconds()).padStart(2, "0");

  return `${YYYY}-${MM}-${updatedDD} ${updatedhh}:${updatedmm}:${updatedss}`;
}
