function kaliTerusRekursif(angka) { 
    angka = String(angka)
    if(angka.length == 1){
        return angka         
    }    
        hasil = 1   
        for (var i=0; i<angka.length; i++){
            hasil = hasil * angka[i]
        }
    return kaliTerusRekursif(hasil)
    
}
// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6