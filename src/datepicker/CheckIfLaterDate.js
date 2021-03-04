import moment from "moment";

export default function CheckIfLaterDate(date1, date2) {
  let bitsBefore = date1.split("/");
  let yyyy = 20 + bitsBefore[2],
    mm = bitsBefore[1],
    dd = bitsBefore[0];

  let bitsAfter = date2.split("/");
  let YYYY = 20 + bitsAfter[2],
    MM = bitsAfter[1],
    DD = bitsAfter[0];

  const checkedDate = moment(`${yyyy}-${mm}-${dd}`).isSameOrBefore(
    `${YYYY}-${MM}-${DD}`
  );
  console.log(checkedDate);
}

// Return true if valid so put !checkedDate
// Needs $ npm install moment
/* 

  if (date !== "") {
    if (!date.includes("Y")) {
      let bits = date.split("/");
      let yyyy = 20 + bits[2],
        mm = bits[1],
        dd = bits[0];

      const checkedDate = moment(`${yyyy}-${mm}-${dd}`, "YYYY-MM-DD").isValid();
      return { error: !checkedDate, filled: true };
    }
    return { error: false, filled: false };
  }
  return { error: false, filled: false }

 */
