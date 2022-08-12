function showDiv1() {
    document.getElementById("div1").style.visibility = "visible";
}

function startDiv(){   
    setTimeout("showDiv1()", 3000);
}

function chanDiv2() {
    document.getElementById("div2").style.backgroundColor = "white";
}

function startDiv2(){   
    setTimeout("chanDiv2()", 5200);
}