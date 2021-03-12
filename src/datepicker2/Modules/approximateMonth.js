import moment from "moment";
import formatForMoment from "./formatForMoment";

export default function approximateMonth(date, initiationDate) {
  let a = moment(formatForMoment(date));
  let b = moment(formatForMoment(initiationDate));
  let difference = a.diff(b, "months");

  // Change the date so that there is SOME changes on the slider
  return difference === 0 ? 1 : difference;
}
