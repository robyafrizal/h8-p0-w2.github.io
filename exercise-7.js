//Menyusun Barisan Bintang
var rows1 = 5;
for(var i = 1; i<=rows1; i++){
    console.log("*");
}



var rows2 = 5;
for(var i = 1; i<=rows2; i++){
    console.log("");
    for(var j = 1; j <= rows2; j++){
        process.stdout.write("*");
    }
}


var rows3 = 5;
for(var i = 1; i<=rows3; i++){
    console.log("");
    for(var j = 1; j <= i; j++){
        process.stdout.write("*");
    }
}