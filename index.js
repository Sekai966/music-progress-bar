exports.porgressBar = function (start, end, width, bodyStyle, currentStyle) {
    var style1 = bodyStyle;
    var style2 = currentStyle;
    if (!style1) style1 = "=";
    if (!style2) style2 = "*";
    if (!width) width = 20;
    if (!start || isNaN(start)) return console.error(new Error("Start must be a Timestamp"));
    if (!end || isNaN(end)) return console.error(new Error("End must be a Timestamp"));
    if (width > 2005) return console.error(new Error("Width must between 1 - 2004"));
    if (end < start) return console.error(new Error("End must Greater than start"));
    let precent = Math.floor(start * width / end);
    let str = "";
    for (let cent = 0; cent <= width; cent++) {
        if (cent == precent) {
            str += style2;
        } else if (cent !== precent) {
            str += style1;
        }
    }
    return str
}