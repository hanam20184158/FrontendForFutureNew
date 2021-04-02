/**
 * 1. Object : đối tượng
 * 2. Key : value
 * 3. properties
 * 4. methods
 * 
 */

//  Properties
const person = {
    name : "Peter",
    age : 18,
    color : "White",
    school : "HUST",
    sayHello : function(){
        console.log("Hello World");
    },
};
// Object ( C/R/U/D)
//R : (Read) 
console.log(person.name);
console.log(person["name"]);

const randomStrong = "age";
person[randomString]; // person["age"]

//C : (Create) 
person.hair ="yellow";
person.eye = "blue";
person.sayGoodbye = function(name){
    console.log(`Goodbye ${name}`);
};
console.log(person);

//U : (Update)
person.name = "Nam";

//D : (Delete)
delete person.name;
console.log(person);
//Loop
for(let key in person){
    console.log(key,person[key]);
}
person.sayHello();
// Function : hàm
// Khai báo
/**function sayHello(name){
    console.log("hello" + name);
}
sayHello("Nam"); // Thực thi
sayHello("Huyền");
sayHello("Hằng");

function calculates(a,h){
    return (a + h) /2;
}
const s = calculates(1,2);
console.log(s);
*/
// EX1 : Tạo 1 function nhận vào số n
// Tính và return n!
/** 
function giaithua(n){
    let result = 1;
    for(let i=1; i<=n; i++){
        result *= i;
    }
    return result;
}
const s = giaithua(5);
console.log(s);
*/
// EX2 : Tạo 1 funtion nhận vào 3 số a,b,c
// Trả về max
/** 
function maxVualues(a,b,c){
    if(a > b){
        if(a > c){
            return a;
        }else{
            return c;
        }
    }else{
        if(b > c){
            return b;
        }else{
            return c;
        }
    }
}
const s = maxVualues(20,7,10);
console.log(s);
*/
//EX3 : tạo 1 function nhận vào 1 mảng số
// Trả về tổng các phần tử của mảng
/** 
function sumArray(list){
    let valuaes = 0;
    for(i=0; i<list.length; i++){
        valuaes += list[i];
    }
    return console.log(valuaes);
}
sumArray([1,2,3,4,5]);
*/
// EX4 : tạo 1 function nhận vào 1 chuõi
// Trả về chuỗi nghịch đảo
/** 
function reverseString(string){
    var newString = "";
    for( i=string.length-1; i>=0; i--){
        newString += string[i];
    }
    return console.log(newString);
}
reverseString("Hello World");
*/
// C2 :
function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse("hello"));

// EX5 : chuỗi panlyndrome


/**C : thêm mới 1 phần tử vào đầu unshift(new)
 *                            cuối push(new)
 * R : Lấy 1 phần tử để thao tác :
 *                             log(list[0])
 *                             log(list[0])
 * u : update : Lấy ra 1 giá trị và gán lại giá trị mới
 * 
 * D : delete : xóa đầu :
 *              Xóa cuối :
 *              .splice(index,1) : địa chỉ và số phần tử xóa
 *  
 */