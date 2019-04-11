window.onload=function () {
    showCurrentSpan();
}
var main=document.getElementById("main");
var container=document.getElementById("container");
var next=document.getElementById("arrowright")
var prev=document.getElementById("arrowleft");
var timer=null;
var index=0;
var spans=document.getElementsByTagName("span");
next.onclick=function () {
    next_pic();
}
prev.onclick=function () {
    prev_pic();
}
function next_pic() {
    index++;
    if(index>4)index=0;
    var newLeft;
    if(container.style.left==="-400%")
        newLeft=0;
    else newLeft=parseInt(container.style.left)-100;
    container.style.left=newLeft+"%";
    showCurrentSpan();
}
function prev_pic() {
    index--;
    if(index<0)index=4;
    var newLeft;
    if(container.style.left==="0%")
        newLeft=-400;
    else newLeft=parseInt(container.style.left)+100;
    container.style.left=newLeft+"%";
    showCurrentSpan();
}
function autoPlay() {
    timer=setInterval(function () {
        next_pic();
    },1000);
}
main.onmouseenter=function () {
    clearInterval(timer);
}
main.onmouseleave=function () {
    autoPlay();
}
function showCurrentSpan() {
    for(var i=0,len=spans.length;i<len;i++){
        spans[i].style.color="olivedrab";
        spans[i].style.backgroundColor="white";
    }
    spans[index].style.color="lightgray";
    spans[index].style.backgroundColor="forestgreen";
}

for(var i=0,len=spans.length;i<len;i++){
    (function (i) {
        spans[i].onclick=function () {
            var dis = index - i;
            if (index == 4 && parseInt(container.style.left) !==-400 )
                dis -= 5;
            if (index == 0 && parseInt(container.style.left) !== 0)
                dis += 5;
            container.style.left = (parseInt(container.style.left) + dis * 100) + "%";
            index = i;
            showCurrentSpan();
        }
    })(i);
}
