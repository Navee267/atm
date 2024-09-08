
alert("Acc number is : 123456");
alert("Pin Number is : 1020");
alert("Its Just A Simple Project.It Is Only Made Up of HTML,CSS,JS");
var totalamount = 50000;

var display1 = document.querySelector(".display1");
var display2 = document.querySelector(".display2");
var display3 = document.querySelector(".display3");
var accno = document.querySelector(".acc-number");
var submitacno = document.querySelector(".submit-acno")
var accountnumber = 123456;
submitacno.addEventListener("click", function () {
    display1.style.display = "none";
    if (accno.value == accountnumber) {
        display2.style.display = "flex";
    }
    else {
        alert("Enter Valid ACC No");
        window.location.reload();
    }
})

var pin = 1020;
var submitpin = document.querySelector(".submit-pin");
var pinnumber = document.querySelector(".pin-number");
submitpin.addEventListener("click", function () {
    display2.style.display = "none";
    if (pinnumber.value == pin) {
        display3.style.display = "flex";
    }
    else {
        alert("Invalid Pin Try Again Later");
    }
})

var accname = document.querySelector(".acc-name");

var withdraw = document.querySelector(".withdraw");
var deposit = document.querySelector(".deposit");
var balance = document.querySelector(".balance");
var cancel = document.querySelector(".cancel");
var details = document.querySelector(".details");
var others = document.querySelector(".others");
var changepin = document.querySelector(".changepin");

var withdrawdisplay = document.querySelector(".withdraw-display");
var depositdisplay = document.querySelector(".deposit-display");
var balancedisplay = document.querySelector(".balance-display");
var canceldisplay = document.querySelector(".cancel-display");
var detailsdisplay = document.querySelector(".details-display");
var othersdisplay = document.querySelector(".others-display");
var changepindisplay = document.querySelector(".changepin-display");

var withdrawresult = document.querySelector(".withdraw-result");
var depositresult = document.querySelector(".deposit-result");
var back = document.querySelector(".back");
var withdrawsubmit = document.querySelector(".withdraw-submit");
var depositsubmit = document.querySelector(".deposit-submit");

withdraw.addEventListener("click", function () {
    display3.style.display = "none";
    withdrawdisplay.style.display = "flex";
})

deposit.addEventListener("click", function () {
    display3.style.display = "none";
    depositdisplay.style.display = "flex";
})

balance.addEventListener("click", function () {
    display3.style.display = "none";
    balancedisplay.style.display = "flex";
})

cancel.addEventListener("click", function () {
    display3.style.display = "none";
    canceldisplay.style.display = "flex";
})

details.addEventListener("click", function () {
    display3.style.display = "none";
    detailsdisplay.style.display = "flex";
})

others.addEventListener("click", function () {
    display3.style.display = "none";
    othersdisplay.style.display = "flex";
})

changepin.addEventListener("click", function () {
    display3.style.display = "none";
    changepindisplay.style.display = "flex";
})


var withdrawinput = document.querySelector(".withdraw-input");

withdrawsubmit.addEventListener('click', function () {
    withdrawdisplay.style.display = "none";
    withdrawresult.style.display = "flex";
    var h2 = document.createElement("h2");

    h2.innerHTML = "Total Amount = " + totalamount;
    totalamount -= Number(withdrawinput.value);
    var h3 = document.createElement("h3");
    h3.innerHTML = "Amount Taken = " + Number(withdrawinput.value);
    var balh3 = document.createElement("h3");
    balh3.innerHTML = "Balance Amount = " + totalamount;
    withdrawresult.append(h2);
    withdrawresult.append(h3);
    withdrawresult.append(balh3);
})

var closebtn = document.querySelector(".close");
var closedisplay = document.querySelector(".close-display");

closebtn.addEventListener("click", function () {
    withdrawresult.style.display = "none";
    closedisplay.style.display = "flex";
})

var depositinput = document.querySelector(".deposit-input");

depositsubmit.addEventListener('click', function () {
    depositdisplay.style.display = "none";
    depositresult.style.display = "flex";
    var h2 = document.createElement("h2");

    h2.innerHTML = "Total Amount = " + totalamount;
    totalamount += Number(depositinput.value);
    var h3 = document.createElement("h3");
    h3.innerHTML = "Amount Taken = " + Number(depositinput.value);
    var balh3 = document.createElement("h3");
    balh3.innerHTML = "Balance Amount = " + totalamount;
    depositresult.append(h2);
    depositresult.append(h3);
    depositresult.append(balh3);
})

var close2 = document.querySelector(".close2");

close2.addEventListener("click",function(){
    depositresult.style.display = "none";
    closedisplay.style.display = "flex";
})

var baldisp = document.createElement("h3");
baldisp.innerHTML = "Your Balance = " +totalamount;
balancedisplay.append(baldisp);

var close3 = document.querySelector(".close3");

close3.addEventListener("click",function(){
    balancedisplay.style.display = "none";
    closedisplay.style.display = "flex";
})

var accname = document.querySelector(".acc-name");
var nameinput = document.querySelector(".name-input");
var detailsname = document.createElement("h3");
detailsname.innerHTML = accname.value;

nameinput.append(detailsname);
var backbtn = document.querySelector(".back");

backbtn.addEventListener("click",function(){
    display3.style.display = "flex";
    withdrawdisplay.style.display = "none";
})

var back1 = document.querySelector(".back1");
var back2 = document.querySelector(".back2");
var back3 = document.querySelector(".back3");
var back4 = document.querySelector(".back4");
var back5 = document.querySelector(".back5");

back1.addEventListener("click",function(){
    display3.style.display = "flex";
    depositdisplay.style.display = "none";
})
back2.addEventListener("click",function(){
    display3.style.display = "flex";
    balancedisplay.style.display = "none";
})
back3.addEventListener("click",function(){
    display3.style.display = "flex";
    detailsdisplay.style.display = "none";
})
back4.addEventListener("click",function(){
    display3.style.display = "flex";
    othersdisplay.style.display = "none";
})
back5.addEventListener("click",function(){
    display3.style.display = "flex";
    changepindisplay.style.display = "none";
})
