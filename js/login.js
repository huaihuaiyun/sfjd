(function(){
    $(".login_inp_box").on("focusin","input",function(){
        $(this).parent(".login_inp_box").children("label").css("display","none"); 
    });
    $(".login_inp_box").on("focusout","input",function(){
        if($(this).val() == ""){
            $(this).parent(".login_inp_box").children("label").css("display","block"); 
        }
    });
})()