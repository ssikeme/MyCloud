window.onload=function () {
    spans[0].style.color="gray";
    autoPlay();
}
var timer=null;
var index=0;
var main=document.getElementById("main");
var spans=document.getElementsByTagName("span");
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
function next_pic() {
    if(index==4)index=0;
    else index++;
    showSpans();
    var str="url(\"image/image"+(index+1)+".jpg\")";
    main.style.backgroundImage=str;

}
function showSpans(){
    for(var i=0,len=spans.length;i<len;i++)
        spans[i].style.color="white";
    spans[index].style.color="gray";
}
for(var i=0,len=spans.length;i<len;i++){
    (function (i) {
        spans[i].onclick=function () {
            var str="url(\"image/image"+(i+1)+".jpg\")";
            main.style.backgroundImage=str;
            index=i;
            showSpans();
        }
    })(i);
}