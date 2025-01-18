function maskify(cc) {
  let newCC = "";
  if (cc.length < 4) {
    return cc;
  } else {
    let lastDigits = cc.substr(-4);
    console.log(lastDigits);
    let outputCC = lastDigits.padStart(cc.length, "#");
    return outputCC;
  }
}
