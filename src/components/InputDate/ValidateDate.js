export default function ValidateDate(date) {
  // stoppa knäpp bug. Om backspace för länge så får den utslag
  if (!date.includes("Y")) {
    let day = date.substring(0, 2);
    let month = date.substring(3, 5);
    let year = date.substring(6, 8);
    console.log(day + "*" + month + "*" + year);
  }
}
