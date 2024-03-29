$(function(){
    var $gnb = $(".gnb").html();
    $(".m_gnb").html($gnb);

    $('.gnb > li, .gnb_bg').hover(function(){
		$(".header").addClass("hover");
		$(".sub_gnb").stop().fadeIn(300);
		$(".gnb_bg").stop().fadeIn(300);
	}, function(){
		$(".header").removeClass("hover");
		$(".sub_gnb").stop().fadeOut(300);
		$(".gnb_bg").stop().fadeOut(300);
	});

    $(".m_gnb_open").on("click", function(){
        if($(this).hasClass("show")){
            $("body").css({"overflow": "visible"});
            $(this).removeClass("show");
            $("#header .gnb_box").removeClass("show");
        }
        else {
            $("body").css({"overflow": "hidden"});
            $(this).addClass("show");
            $("#header .gnb_box").addClass("show");
        }
    });

    $(".m_gnb > li > a").click(function(){
        if($(this).parent("li").children().length > 1){
            $(".sub_gnb").stop().slideUp(300);
            $(".m_gnb > li").removeClass("active");
            $(this).parent().addClass("active");
            $(this).next(".sub_gnb").stop().slideDown(300);
            return false;
        }
    });
    
    $(window).on("scroll", function(){
        pageY = window.pageYOffset;
        if(pageY>=$("#content").offset().top - 50 ){
            $("#header").addClass("scrolled");
        }
        else{
            $("#header").removeClass("scrolled");
        }
        
    });
    $(window).scroll();

    $("#file").on('change',function(){
        var fileName = $("#file").val();
        $(".upload-name").val(fileName);
      });
});
function openPopup(){
    $(".form_layer_popup_wrap").addClass("show");
}
function closePopup(){
    $(".form_layer_popup_wrap").removeClass("show");
}