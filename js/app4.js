var a = parseInt(prompt("Kaç Satır Olacak?"));
var b = parseInt(prompt("Kaç Sutun Olacak?"));
    document.write("<table border='1'>");
    for (var i = 1; i <= a; i++) {
        document.write("<tr>");
        for (var j = 1; j <= b; j++) {
            document.write("<td>" + i + ". * " + j + ". </td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");