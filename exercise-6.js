//Melakukan Looping Menggunakan While
console.log("LOOPING PERTAMA with WHILE");
var loopingPertama = 0;
while (loopingPertama <20) {
    loopingPertama += 2;
    console.log(loopingPertama + " - I love coding");
}

console.log("LOOPING KEDUA with WHILE");
var loopingKedua = 20;
while (loopingKedua > 0) {
    loopingKedua -= 2;
    console.log((loopingKedua + 2) + " - I will become fullstack developer");
}


//Melakukan Looping Menggunakan For
console.log("LOOPING PERTAMA with FOR");
for(var loopingPertama = 0; loopingPertama < 20; loopingPertama++){
    console.log((loopingPertama + 1) + " - I love coding");
}

console.log("LOOPING KEDUA with FOR");
for(var loopingKedua = 20; loopingKedua > 0; loopingKedua--){
    console.log(loopingKedua + " - I will become fullstack developer");
}


//Pengulangan dan Kondisional Angaka Genap dan Ganjil 
console.log("WHILE and IF")
var counter = 0;
while (counter < 100) {
    counter ++ ;
    if ((counter % 2) == 0){
        console.log(counter +" - Genap");
    }else {
        console.log(counter + " - Ganjil");
    }
}

var counter = 1;
while (counter <= 100) {
    if ((counter % 3) == 0){
        console.log(counter + " - " + counter + " KELIPATAN 3");
    }else {
        console.log(counter + "");
    }
    counter +=2;
}

var counter = 1;
while (counter <= 100) {
    if ((counter % 6) == 0){
        console.log(counter + " - " + counter + " KELIPATAN 6");
    }else {
        console.log(counter + "");
    }
    counter +=5;
}

var counter = 1;
while (counter <= 100) {
    if ((counter % 10) == 0){
        console.log(counter + " - " + counter + " KELIPATAN 10");
    }else {
        console.log(counter + "");
    }
    counter +=9;
}


