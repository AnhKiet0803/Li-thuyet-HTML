//setTimeout(function(){    // hàm trì hoãn sau n giây sẽ xhien 
//    alert("Ping . . .");
//},5000);  // trì hoãn sau 500 ms (5s)

//setInterval(function(){   // hàm trì hoãn lặp lại vô hạn
//    alert(". . . . . ");
//},3000);

var m = 10; // 10p
var s = 0;  // 0s
var timer = setInterval(function(){
    console.log(m+":"+s);
    s--;
    if(s<0){
        m--;
        s=59;
    }
    if(m<0){
        clearInterval(timer); // dừng lại khi đếm về 0s
    }
},10);