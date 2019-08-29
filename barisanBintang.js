//Menyusun Barisan Bintang
var rows1 = 5;
for(var i = 0; i < rows1; i++){
    console.log("*");
}



var rows2 = 5;
for(var i = 1; i < rows2; i++){
    var bintang = "";
    for(var j = 1; j < rows2; j++){
        bintang += "*";
    }
    console.log(bintang);
}


var rows3 = 5;
for(var i = 1; i < rows3; i++){
    var bintang = "";
    for(var j = 1; j <= i; j++){
        bintang += "*";
    }
    console.log(bintang);
}