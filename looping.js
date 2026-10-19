// console.log("nama saya lana");
// console.log("nama saya lana");
// console.log("nama saya lana");
// console.log("nama saya lana");
// console.log("nama saya lana");

// for (let i = 2; i < 12; i++) {  //i++ akan menambah nilai i sebanyak 1 setiap kali perulangan 
//     console.log("nama sahabat saya filxia")
// }

// for (let z = 5; z<8 ; z++) {  // let i = 51; i <=60 ; i++  bisa sampai 60 ... let i = 51; i <60 ; i++   mentok 60
//     console.log("idola saya JusMiu")    // i/z itu fariabel jadi bisa di ganti
// }


// for (let i = 5; i >=0 ; i--) {
//     console.log(i)
// }



// for(let i=11;i<=20;i+=2) {
//     console.log(i);
// }


// for (let i = 1; i <=5 ; i++) {
//     console.log(i * i);
// }
// hasil di atas nanti seperti 
// 1x1=1
// 2x2=4
// 3x3=9
// 4x4=16
// 5x5=25

// for (let i = 1; i <= 10; i++) {
//         console.log(1 , " x " , i , " = " , (1*i));
// }


// let total = 0

// for (let i = 1;i <= 5; i++){
//     total =  total + i

//   console.log(`i=${i} -> total=${total}`);
// }




// let total = 0

// for (let i = 10;i <= 20; i+2){
//     total =  total + i

//   console.log(`i=${i} -> total=${total}`);
// }




// let nama = ["lana","filxia","keyya","lulu","alea","alecia","renora","bebe","ruby","hikuya"]
// for (let i = 0; i < 10; i+=2) {
//   console.log(nama[i]);
// }



// let nama = ["lana","filxia","keyya","lulu","alea","alecia","renora","bebe","ruby","hikuya"]
// for (let i = 0; i < nama.length; i++) {
//   console.log(`${i+1}.` , nama[i]);
// }




// let nilai = [80,65,90,55,75];
// for(let i = 0; i < nilai.length; i++){
//   if (nilai[i] >= 75){
//     console.log("nilainya ", nilai[i], nilai[i] = "- lulus")
//   }else{
//     console.log("nilainya ", nilai[i],nilai[i] = "- tidak lulus")
//   }
// }



// let nilai =[80 , 65, 90, 55, 75];
// for(let i = 0; i < nilai.length; i++ )
//     if (nilai[i] >=90){
//         console.log("Nilainya " + nilai[i] + " = SANGAT BAGUS");
//     }else if (nilai[i]>=80 ) {
//         console.log("Nilainya " + nilai[i]+ " = BAGUS");
//     } else {console.log("Nilainya " + nilai[i]+ " = CUKUP"); }




// let nama = ["lana","filxia","keyya","lulu","alea"];
// let nilai = [80,65,90,55,75];
// for(let i = 0; i < nilai.length; i++){
//   if (nilai[i] >= 75){
//     console.log(nama[i], "-", nilai[i],nilai[i] =  "- lulus")
//   }else{
//     console.log(nama[i],"-",nilai[i],nilai[i] = "- tidak lulus")
//   }
// }


// let nama = ["lana","filxia","keyya","lulu","alea"];
// let nilai = [80,65,90,55,75];
//  for(let i = 0; i < nilai.length; i++){
//   if (nilai[i] >= 75){
//     console.log(nama[i], "-", nilai[i], "- lulus")
//   }else{
//     console.log(nama[i],"-",nilai[i], "- tidak lulus")
//   }
// }


// let angka2 = [12, 7, 20, 15, 8, 3, 14,9];
// for (let i = 0; i < angka2.length; i++){
// if(angka2 [i] % 2 === 0){
//     console.log(angka2 [i]+ "-" +"genap");
//  } else{
//     console.log(angka2[i] +"-"  + "Ganjil" + "- " + ">=10");
//  }
// }


// let angka = [12, 7, 20, 15, 8, 3, 14,9];
// for (let i = 0; i < angka.length; i++){
// if(angka[i] % 2===0 && angka [i] >=10){
//     console.log(angka [i]+ "-" +"genap" + " - " + ">=10");
//  } else{
//     console.log(angka[i] +"-"  + "Ganjil" + " - " + "<=10");
//  }
// }


let angka = [12, 7, 20, 15, 8, 3, 14,9];
for (let i = 0; i < angka.length; i++){
if(angka[i] % 2===0 && angka [i] >=10){
    console.log(angka [i]+ "-" +"genap" + " - " + ">=10");
 }else if(angka[i]% 2 === 0 && angka[i] < 10){
    console.log (angka[i] + "-" + "genap" + " - " + ">=10")
 } else if(angka[i]% 2 === 0 && angka[i] > 10){
    console.log (angka[i] + "-" + "ganjil" + " - " + "<=10")
 } else {
    console.log(angka[i] +"-"  + "Ganjil" + " - " + "<=10");
 }
}