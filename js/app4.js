function tablo(){
    var x = parseInt(prompt("Satır Sayısını Giriniz!"));
    var y = parseInt(prompt("Sütun Sayısını Giriniz!"));
        document.write("<table border='1'>");
        for (var i = 1; i <= x; i++) {
            document.write("<tr>");
            for (var a = 1; a <= y; a++) {
                document.write("<td>" + i + "- Satır " + a + "- Sütun </td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
}