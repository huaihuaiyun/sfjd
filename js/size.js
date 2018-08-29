// function setSize(){
//     var aHeight = $(window).height()-105;
//     var aWidth = $(window).width()-290;
//     $(".content").css("height",aHeight+"px");
//     $(".right_main").css("width",aWidth+"px");
// }
var aHeight = $(window).height();
var aWidth = $(window).width();
function setSize(selector,attr,size){
    if(attr == 'height'){
        $(selector).css(attr,(aHeight-size)+'px');
    }else if(attr == 'width'){
        $(selector).css(attr,(aWidth-size)+'px');
    }
}
setSize(".content",'height',105);
setSize(".right_main",'width',290);
setSize(".content_main",'height',155);
$(".info_list").css("width",($(".info_box_cont").width()-150)+"px");
