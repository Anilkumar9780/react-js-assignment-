const componentToHex = (c) => {
  // color Code
  var hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

// color rgb
const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
