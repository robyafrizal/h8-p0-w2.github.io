//Logic Challenge - X dan O
function xo(str) {
    if ((str.split("x").length) == (str.split("o").length)) {
        return true;
    } else{
        return false;
    }
}
console.log(xo("xoxo"));
console.log(xo("oxooxo"));
console.log(xo("oxo"));
console.log(xo("xxxooo"));
console.log(xo("xoxooxxo"));

