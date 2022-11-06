document.getElementById("btn").onclick = function(){

var num1 = document.getElementById("luong").value *1;
var num2 = document.getElementById("ngay").value *1;
var total = "";


total = num1 * num2 ;
total = ("Tổng Lương là: " + total)
document.getElementById("tinh").innerHTML = total;

}

document.getElementById("btnTB").onclick = function(){
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;
    var num4 = document.getElementById("num4").value * 1;
    var num5 = document.getElementById("num5").value * 1;
    content = "";


    content = (num1 + num2 + num3 + num4 + num5 ) / 5;

    document.getElementById("txtTB").innerHTML = content;
}


document.getElementById("btnCurrency").onclick = function(){
    var usd = document.getElementById("usd").value * 1;
    var vnd =  Intl.NumberFormat("vn-VN").format(23500);
    var total = "";
    total = usd * vnd;

    document.getElementById("txtCurrency").innerHTML = total;

}                   

document.getElementById("btnCal").onclick = function (){
    var ChieuDai = document.getElementById("width").value * 1;
    var ChieuRong = document.getElementById("height").value * 1;

   
    var DienTich = ChieuDai * ChieuRong;
    var ChuVi = (ChieuDai + ChieuRong) * 2;
    document.getElementById("txtCal").innerHTML =` Diện tích: ${DienTich};Chu vi: ${ChuVi}  `;
    
}



document.getElementById("btnSum").onclick = function (){
    var number = document.getElementById("number").value * 1;
 
    var num1 = number % 10;
    var num2 = Math.floor(number / 10);
    var total = ""; 
    total = num1 + num2;

    document.getElementById("txtSum").innerHTML = total;


}