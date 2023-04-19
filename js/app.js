
$(document).ready(function(){
    autoLoginCheck()
    nonMemberCheck()
    tab()
})

function autoLoginCheck(){
    //체크이미지 변경
    $(".auto_check").click(function(){
        var status = $(".auto_check").hasClass('off')
        if(status===true){//off
            $(".auto_check>a>img").attr('src','./images/check_small_on.png')
            $(".auto_check").removeClass('off')
            $(".auto_check").addClass('on')
        }else if(status===false){//on
            $(".auto_check>a>img").attr('src','./images/check_small_off.png')
            $(".auto_check").removeClass('on')
            $(".auto_check").addClass('off')
        }
    })
}
function nonMemberCheck(){
    //체크이미지 변경
}
function tab(){
    //탭동작 + 버튼에 활성/비활성 디자인
    $("#tab_btn>a").click(function(){
        var index = $(this).index()
        $("#tab_contents>div").hide()
        $("#tab_contents>div").eq(index).show()

        $("#tab_btn>a").css({"background":"#F1F1F1","color":"#AAAA"})//비활성화
        $("#tab_btn>a").eq(index).css({"background":"white","color":"black"})//활성화
    })
}