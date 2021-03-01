import moment from "moment";

export default function ValidateDate(date) {
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
  return { error: false, filled: false };
}

// Return true if valid so put !checkedDate
// Needs $ npm install moment
