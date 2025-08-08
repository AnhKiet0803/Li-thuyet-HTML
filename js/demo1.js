// Js k qtam KDLieu
// 1 so KDL:null, number, string, boolean, array, function

var x = 10;    // số
x = "T2505E";  // chuỗi

// n + n = n      n: số 
// n + s = s      s: chuỗi
// s + s = s
var a = 10;
var b = "20";
var c = 'abcdef';
console.log(a+a);    //20
console.log(a+b);    //1020
console.log(b+a);    //2010
console.log(b+c);    //20abcdef
var t = false;

// điều kiện rẽ nhánh
if(a>5){
    console.log("A");
}else if(a>=10){
    console.log("B");
}else if(a>15){
    console.log("C");
}else{
    console.log("D");
}

// vòng lặp
for(var i=0;i<10;i++){
    console.log("i="+i);
}

// mảng(array)
var arr = [];  // đây là 1 mảng
//arr[0] = 9;        k nên dùng
//arr[1] = 12;       k nên dùng
//arr[2] = 182;      k nên dùng
//arr.push("Hello");       k nên dùng
//arr.push(true);          k nên dùng
//arr.push([1,2,3,4,5]);   k nên dùng
arr.push(9);   // 0
arr.push(12);  // 1
arr.push(182); // 2

// duyệt mảng
// 3 cái for, arr.map(e), arr.map(e,i) chức năng như nhau 
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// duyệt mảng--- map
arr.map(e=>{
    console.log(e);
});

arr.map((e,i)=>{

});

// sắp xếp mảng (nổi bọt-buble-sort)
arr.sort();

// tìm kiếm tuyến tinh
arr.includes(9);  // trả về true hoặc false
if(arr.includes(9)){

}

// chuyển chuỗi thành số
var pi = "3.14159";   // đag là chuỗi
pi = parseFloat(pi);  // chuyển thành số
pi = parseInt(pi);    // nếu là số thì giữ nguyên

// hàm(function)
// 3 cách viết dưới chức năg như nhau nhưng nên dùng const
function tinh_tong(a,b){ 
    var c = a + b;
    //return c;
    console.log("tổng:",c);
}
tinh_tong(5,4);

const phep_tru = function(a,b){
    var c = a - b;
    //return c;
    console.log("hiệu:",c);
}
phep_tru(5,2);

const phep_nhan = (a,b)=>{
    var c = a * b;
    //return c;
    console.log("tích:",c); // thay return được
}
phep_nhan(7,3);

// 1 số hàm hay dùng
// alert("Bạn chưa đủ 18 tuổi truy cập website"); // tạo cảnh báo cho ng dùng, đây là hàm return void(k làm đc j cả)
// confirm("Cam đoan răng bạn đã trên 18 tuổi");  // đây là hàm return boolean(đúng sai)
// prompt("Vui lòng nhập tên của bạn");           // yc ng dùng nhập j đó
//if(confirm("Cam đoan răng bạn đã trên 18 tuổi")){
//    //alert("Chào mừng bạn gia nhập cộng đồng.");
//    var s = prompt("Vui lòng nhập tên của bạn"); // return string
//    var t = prompt("Bạn bao nhiêu tuổi ?");      // string
//    alert("Xin chào"+s);
//}else{
//    alert("Vui lòng thoát website vì k đủ tuổi.");
//}

var r = Math.random();  // return number -> double/float: 0->1  VD: 0.1272
r = r * 100;           // VD random ra:12.7291
r = parseInt(r);       // ép về số nguyên: 12