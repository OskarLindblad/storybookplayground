export const numToString = (num) => {
  let newNum = num.toString();
  if (newNum === "") {
    return "";
  }

  if (newNum.includes(".") || newNum.includes(",")) {
    // If decimal

    newNum.includes(".") && (newNum = newNum.split("."));
    newNum.includes(",") && (newNum = newNum.split(","));

    if (newNum[0] === "") {
      newNum[0] = "0";
    }
    let wholeNum = newNum[0]
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .map(function (x) {
        return x.split("").reverse().join("");
      })
      .reverse();
    wholeNum.join(" ");

    let n = wholeNum.join(" ") + "," + newNum[1];
    return n;
  } else {
    // Without decimal
    let wholeNum = newNum
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .map(function (x) {
        return x.split("").reverse().join("");
      })
      .reverse();
    let n = wholeNum.join(" ");

    return n;
  }
};

export const stringToNum = (string) => {
  if (string === "") {
    return "";
  }
  if (string.includes(".") || string.includes(",")) {
    // includes decimal

    let newString;
    string.includes(".") && (newString = string.split("."));
    string.includes(",") && (newString = string.split(","));
    let n = `${newString[0].replace(/ /g, "")}.${newString[1]}`;

    if (!newString[1]) {
      if (isNaN(parseFloat(n))) {
        n = 0;
      } else {
        parseFloat(n);
      }
      return n + ".";
    }

    if (newString[1].startsWith("0")) {
      if (isNaN(parseFloat(n))) {
        n = 0;
      } else {
        parseFloat(n);
      }
      return n + ".0";
    }

    if (!newString[0] || newString[0] === "0") {
      return "0." + newString[1];
    }

    return parseFloat(n);
  } else {
    // without decimal
    if (isNaN(parseFloat(string))) {
      return "";
    }
    return parseFloat(string.replace(/ /g, ""));
  }
};

export const numDisplay = (num) => {
  if (parseFloat(num) === 0) {
    return "0";
  }
  if (parseFloat(num) <= 0.0001) {
    return "Almost 0";
  }
  let newNum = num.toString();
  if (newNum === "") {
    return "";
  }

  if (newNum.includes(".") || newNum.includes(",")) {
    // If decimal

    newNum.includes(".") && (newNum = newNum.split("."));
    newNum.includes(",") && (newNum = newNum.split(","));

    if (newNum[0] === "") {
      newNum[0] = "0";
    }
    let wholeNum = newNum[0]
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .map(function (x) {
        return x.split("").reverse().join("");
      })
      .reverse();
    wholeNum.join(" ");

    let n = wholeNum.join(" ") + "," + newNum[1];
    return n;
  } else {
    // Without decimal
    let wholeNum = newNum
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)
      .map(function (x) {
        return x.split("").reverse().join("");
      })
      .reverse();
    let n = wholeNum.join(" ");

    return n;
  }
};
