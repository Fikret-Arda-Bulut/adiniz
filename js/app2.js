function hesapla(){
    var x = document.getElementById("fiyat").value;
    var y = document.getElementById("adet").value;

    var sonuc = parseInt(x) * parseInt(y);

    document.getElementById("l1").innerHTML="Tutar "+ sonuc + " TL dir. Sonraki Sorya Geçebilirsiniz."
}