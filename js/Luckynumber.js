//LUCKY NUMBER:Cho ngẫu nhiên từ 0 đến 99,ng chơi nhập số dự đoán của mình và nhập số tiền đặt(x70),đối chiếu và tb kq trúng hay k
var So_du_doan = prompt("Xin mời nhập số dự đoán của bạn(từ 0 đến 99)");
So_du_doan = parseInt(So_du_doan);
var So_tien = prompt("Xin mời nhập số tiền bạn muốn đặt cược");
So_tien = parseInt(So_tien);

var Lucky_Number = Math.random();
Lucky_Number = Lucky_Number * 100;
Lucky_Number = parseInt(Lucky_Number);

var Tien_thuong = So_tien * 70;

if(So_du_doan == Lucky_Number){
    alert("Chúc mừng bạn đã đoán đúng. Số tiền thưởng bạn nhận được là:" + Tien_thuong );
}else{
    alert("Chúc bạn may mắn lần sau, số trúng thưởng là" + Lucky_Number);
}

