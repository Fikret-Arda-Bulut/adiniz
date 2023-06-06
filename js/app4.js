function tablo(){
    var i = prompt("satır");
    var j = prompt("sütun");

    for(i = 0; i < 8; i++){
        i = document.write="<tablo border=2px>";
            for(j = 0; j < 8; j++){
                document.write="<tr>"+ i + "<td>"+ j +"</td>"+"</tr>";
            }
    }
}