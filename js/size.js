
//页面高度
var dHeight = $(document).height();
console.log(dHeight);
//浏览器窗口高度
var wHeight = $(window).height();
console.log(wHeight);
//浏览器窗口宽度
var aWidth = $(window).width();
var rightMainHeight = $(".right_main").outerHeight()+50;
console.log(rightMainHeight);

if((rightMainHeight+105) > wHeight){
    $(".left_aside").height(rightMainHeight);
}else{
    $(".left_aside").height(wHeight-105);
}
$(".right_main").width(aWidth-290);
$(".info_list").css("width",($(".info_box_cont").width()-150)+"px");
$(".print_box").css("height",dHeight+"px");

