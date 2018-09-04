// function setSize(){
//     var aHeight = $(window).height()-105;
//     var aWidth = $(window).width()-290;
//     $(".content").css("height",aHeight+"px");
//     $(".right_main").css("width",aWidth+"px");
// }
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
// function setSize(selector,attr,size){
//     if(attr == 'height'){
//         $(selector).css(attr,(aHeight-size)+'px');
//     }else if(attr == 'width'){
//         $(selector).css(attr,(aWidth-size)+'px');
//     }
// }
// // if($(".right_main").height() > (aHeight-105)){
// //     console.log($(".right_main").width());
    
// //     $(".content").css("height",$(".right_main").height()+"px");
// //     // setSize(".content",'height',105);
// // }else{
// //     setSize(".content",'height',105);
// // }
// setSize(".right_main",'width',290);
// 
