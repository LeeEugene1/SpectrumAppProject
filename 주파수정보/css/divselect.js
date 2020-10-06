$(function(){  

    $(".select-header").click(function(){  
        $(this).parent().siblings(".select-box").find(".select-content").slideUp("fast");  
        if($(this).siblings(".select-content").is(":hidden")){  
            $(this).addClass("select-arrow");  
            $(this).siblings(".select-content").slideDown("fast");  
            var evt =  new Object;  
            if ( typeof(window.event) == "undefined" ){
                evt = arguments.callee.caller.arguments[0];  
            }else{  
                evt = event || window.event;  
            }  
            evt.cancelBubble = true;  
        }else{  
            $(this).removeClass("select-arrow");  
            $(this).siblings(".select-content").slideUp("fast");  
           
            var evt =  new Object;  
            if ( typeof(window.event) == "undefined" ){
                evt = arguments.callee.caller.arguments[0];  
            }else{  
                evt = event || window.event;  
            }  
            evt.cancelBubble = true;  
        }  
    });  
    $(document).click(function(){  
        $(".select-header").removeClass("select-arrow");  
        $(".select-content").slideUp("fast");  
    });  
    $(".select-content li").on("click",function(){  
        $(this).parent().siblings(".select-header").removeClass("select-arrow");  
        $(this).parent().siblings(".select-header").text($(this).text()).end().slideUp("fast");  
    });  
    $(".select-content li").hover(function(){  
        $(this).css("background-color","#cfcfcf");  
    },function(){  
        $(this).css("background-color","#fff");  
    });  
});  
