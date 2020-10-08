exports.porgressBar = function (start, end, width, bodyStyle, currentStyle) {
    var style1 = bodyStyle;
    var style2 = currentStyle;
    if (!style1) style1 = "=";
    if (!style2) style2 = "x";
    if (!width) width = 20;
    if (!start || isNaN(start)) return console.error(new Error("Start must be a Timestamp"));
    if (!end || isNaN(end)) return console.error(new Error("End must be a Timestamp"));

    let precent = Math.floor(start * 20 / end)

    let str = "";
    for (let cent = 0; cent <= width; cent++) {
        if (cent == precent) str += style2;
        str += style1;
    }

    return str
}
