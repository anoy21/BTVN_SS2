// bai 1
// var nums = ['1','2','3','4','5','6','7','8','9','10'];
// var sum = 0;

// for(var i=0; i < nums.length; i++){

//     sum += parseInt(nums[i]);

// }

// console.log(sum)

// bai 2
// for (var i = 1; i < 11; i++) {
//     console.log(i + i)
// }


// // bai 3
// for (var i = 1; i < 16; i++) {
//     if (i % 2 != 0 ) {
//         console.log(i)
//     }
// }

// bai 4

// const a = {
//   fname:"Hung",
//   lname:"Nguyen",
// }; 

// let txt = "";
// for (let x in a) {
//   txt += a[x] + " ";
// }

// console.log(txt)


// bai 5 
// var num = [1,2,3,4,5,6,7,8,9,10];
// var total = 0;

// for(var i=0; i < num.length; i++){

//     total += parseInt(num[i]);

// }

// console.log(total)


// lab 


var myDog = {
    "name" : "Husky",
    "legs" : 4,
    "color": "Brown"
};


const fruit = [15, " Grapes"]

let com = "I have "

for (let x of fruit ) {
    com += x   
}

console.log(com)




const fruit2 = [15, " Grapes"]

let com2 = "I have "

for (let y in fruit ) {
    com2 += fruit2[y] 
}

console.log(com2)


let com3 = "I have ";

for (let i = 15; i < 16; i++) {
  console.log(com3 + i + '' + " Grapes");
}
