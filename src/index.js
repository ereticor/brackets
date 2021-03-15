module.exports = function check(str, bracketsConfig) {
  let x = [];
  for (let i = 0; i < bracketsConfig.length;) {
    x[i] = bracketsConfig[i].join("");
    if (str.includes(x[i])) {
      str = str.replace(x[i], "");
      i = 0;
    }
    else {
      i++;
    }
  }
  // console.log(str.length);
  if (str.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
