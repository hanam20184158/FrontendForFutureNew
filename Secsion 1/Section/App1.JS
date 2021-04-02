// Biến let

/**var a = 10;
var  a = 15;
console.log(a)
*/

// Var : Có thể nhiều biến tên giống nhau mà k bị lỗi

// Khai báo biến const : Chỉ dc nhận 1 giá trị ban đầu, k thể thay đổi


//const a = Number("10");
/**const a = parseInt("10");
const b = 10;

console.log(a <= b);

console.log(a >= b);

console.log(a == b);

console.log(a === b);

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
*/
// == : so sánh giá trị
// === : so sánh giá trị + kiểu dữ liệu

// ASsignment 1 : Nhập 3 số từ màn hình, tính TBC của 3 số
// Tính hàm bậc 2 của 2 số

/**const num1 = Number(prompt("Enter number 1 : "));

const num2 = Number(prompt("Enter number 2 : "));

const num3 = Number(prompt("Enter number 3 : "));

let x = (num1 + num2 + num3)/3;
console.log(x);
*/

// If else Statement
/**const num1 = Number(prompt("Enter number 1 : "));

const num2 = Number(prompt("Enter number 2 : "));

if (num1 == num2) {
    console.log("True !");
} else {
    console.log("False !");
}
*/
//  B1 : Giải pt bậc 2

/** 
const str = console.log("Nhập hệ sô lần lượt của PT ax^2 + bx + c = 0");
const num1 = Number(prompt("Enter number 1 : "));
const num2 = Number(prompt("Enter number 2 : "));
const num3 = Number(prompt("Enter number 3 : "));

if (num1 == 0) {
    if (num2 == 0) {
        if (num3 == 0) {
            console.log("PT vô số nghiệm !");
        } else {
            console.log("PT vô nghiệm !");
        }
    } else {
        let x = -num3 / num2;
        console.log("PT có nghiệm đơn x = " + x);
    }
} else {
    let Delta;
    Delta = (num2 * num2 - 4 * num1 * num3);
    console.log(Delta);
    if (Delta < 0) {
        console.log("PT vô nghiệm !");
    } else if (Delta == 0) {
        let x = (-num2 / (2 * num2));
        console.log("Phương trình có nghiệm kép x1 = x2 = " + x);
    } else {
        let x1 = ((-num2 + Math.sqrt(Delta)) / (2 * num1));
        let x2 = ((-num2 - Math.sqrt(Delta)) / (2 * num1));
        console.log(x1);
        console.log(x2);
    }
}
*/
// B2 : Tìm  Max, min
/** 
console.log("Nhập vào 3 số : ");
const num1 = Number(prompt("Nhập số thứ nhất :"));
const num2 = Number(prompt("Nhập số thứ hai :"));
const num3 = Number(prompt("Nhập số thứ ba :"));

if (num1 < num2) {
    if (num2 < num3) {
        console.log("Giá trị lớn nhất là : " + num3);
    } else {
        console.log("Giá trị lớn nhất là : " + num2);
    }
} else {
    if (num1 > num3) {
        console.log("Giá trị lớn nhất là : " + num1);
    } else {
        console.log("Giá trị lớn nhất là : " + num3);
    }
}
*/

// B3 : cho 1 số ngẫu nhiên bất kì
// nhập vào 1 số khác
// Nếu 2 giá trị bằng nhau => true
// nếu khác thì nhập lại, cho đến khi đúng

const num = 86;
let num1;
/** 
do{
    num1 = Number(prompt("Nhập vào 1 số :"));
    if(num1 == num){
        console.log("True !");
        break;
    }else{
        console.log("False !");
        console.log("Enter again !");
    }
}while(num1 != num);
*/
/** 
num1 = Number(prompt("Nhập vào 1 số :"));
while(num1 != num){
    num1 = Number(prompt("Nhập vào 1 số :"));
    if(num1 == num){
        console.log("True !");
        //break;
    }else{
        console.log("False !");
        console.log("Enter again !");
    }
}
*/
 // BT thêm :
 /**
let a = prompt("Enter number of (1,2,3,4..");
 console.log(a);
 let numbers = a.split(",");
 console.log(numbers);
 let sum = 0;
 for(let i = 0; i<= numbers.length -1; i += 1){
     sum = sum + Number(sumbers[i]);
 }
 console.log("Tổng = " + sum);
*/
 let userInput = prompt(" Enter string").toLowerCase();
 console.log(userInput);

 let words = userInput.split(" "); 
 let result = ""
 console.log(world);
 for(let i = 0; i <= world.length -1; i += 1){
     let word = words[i];
     let letters = word.split("");
 }