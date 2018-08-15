(function($){
    $.fn.writeDate = function(){
        var $this = $(this);
        var date = new Date();
        var nDate = date.getFullYear() + "年"+ (date.getMonth()+1)+"月" + date.getDate() + "日";
        var nTime = date.getHours() + ":" + date.getMinutes() + ":" + (date.getSeconds()<10? "0"+date.getSeconds():date.getSeconds());
        var nDay = date.getDay();
        switch(nDay){
            case 1 : nDay = "星期一";
            break;
            case 2 : nDay = "星期二";
            break;
            case 3 : nDay = "星期三";
            break;
            case 4 : nDay = "星期四";
            break;
            case 5 : nDay = "星期五";
            break;
            case 6 : nDay = "星期六";
            break;
            case 7 : nDay = "星期日";
            break;
        };
        var dateString = "<span>"+nDate+"</span><span>"+nTime+"</span><span>"+nDay+"</span>";
        $this.html(dateString);
    }
})(jQuery);