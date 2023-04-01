$(document).ready(function(){
    if($.cookie('token') != undefined){
        setTimeout(()=>{
            getAdminData();
        },5000);
    }
    let activeBlock = 0;
    let configButton = {
        "1920" : [-500 , -600],
        "1800" : [-300 , -550],
        "1750" : [-250 , -500],
        "1700" : [-200 , -450],
        "1650" : [-150 , -400],
        "1600" : [-100 , -350],
        "1550" : [-50 , -300],
        "1500" : [0 , -250],
        "1450" : [50 , -200],
        "1400" : [100 , -150],
        "1350" : [150 , -100],
        "1300" : [200 , -50],
        "1250" : [100 , -100],
        "1200" : [100 , -100],
        "1150" : [100 , -100],
        "1100" : [100 , -100],
        "1050" : [100 , -100],
    }; 
    //open_popup_buy
    //data-type-order="none"
    $("#button_payment_send").click(function(){
        // let data_order = $(this).attr("data-type-order"); // order or buy
        // let data_type = $(this).attr("data-type"); //tarif
        let data_name = $("#payment_input_name").val();
        let data_phone = $("#input_phone_buy").val();
        let data_telegram = $("#input_telegram_buy").val();
        
        $(".popups_buy .preload").fadeIn(300);
        
        $.ajax({
            method: "POST",
            url: "../server/server.php",
            data: { 'status': "send_data" , telegram: data_telegram , name: data_name , phone: data_phone, chat: 804472904}
        }).done(function(data) {
            $(".popups").fadeIn(300);
             $(".popups_buy .preload").fadeOut(300);
              $(".popups_buy").fadeOut(300);
            console.log(data);
        });
        //todo
    });
    $("#payment_input_name").keyup(function(){
        if($(this).val().length > 2 && $("#input_phone_buy").val().length > 7){
            $("#button_payment_send").prop("disabled",false);
        }else{
            $("#button_payment_send").prop("disabled",true);
        }
    });
    $("#input_phone_buy").keyup(function(){
        if($(this).val().length > 7 && $("#payment_input_name").val().length > 3){
            $("#button_payment_send").prop("disabled",false);
        }else{
            $("#button_payment_send").prop("disabled",true);
        }
    });
    $(".open_popup_buy").click(function(){
        let data_order = $(this).attr("data-type-order");
        let data_link = $(this).attr("data-link");
        let data_type = $(this).attr("data-type");

        $("#button_payment_send").attr("data-type-order", data_order);
        $("#button_payment_send").attr("data-link", data_link);
        $("#button_payment_send").attr("data-type", data_type);

        $(".popups_buy button").attr("data-link", data_link);
        if(data_type == "basik"){
                $(".popups_buy>.main>.content>h3").html("Тариф <b>basic</b>");
        }else if(data_type == "standart"){
            $(".popups_buy>.main>.content>h3").html("Тариф <b>standart</b>");
        }else if(data_type == "vip"){
            $(".popups_buy>.main>.content>h3").html("Тариф <b>vip</b>");
        }
        if(data_order == "true"){
            $(".popups_buy .dop_items").show();

            $(".popups_buy").fadeIn(300);
        }else{
            $(".popups_buy .dop_items").hide();

            $(".popups_buy").fadeIn(300);
        }
    });
    $("#close_popup_FSQ").click(function(){
        $(".popups").fadeOut(300);
    });
    $(document).on("click" , ".feedback_admin_qwe" , function(){
        setTimeout(function(){
            $(".wrapper_feedback .nonopacity").removeClass("nonopacity");
        },2500);
        $('.admin__list__panel > .feedback_admin_qwe > span').addClass("empty");
        let token = $.cookie("token");
        $.ajax({
            method: "GET",
            url: "../server/server.php",
            data: { 'status': "removeVisual", 'token': token }
          });
    });
    // $(document).on("click" , ".py_admin_qwe" , function(){
    //     setTimeout(function(){
    //         $(".wrapper_transactions .nonopacity").removeClass("nonopacity");
    //     },2500);
    //     $('.admin__list__panel > .feedback_admin_qwe > span').addClass("empty");
    //     let token = $.cookie("token");
    //     $.ajax({
    //         method: "GET",
    //         url: "../server/server.php",
    //         data: { 'status': "removeVisualPY", 'token': token }
    //     });
    // });
    $(document).on("click" , ".admin__list__panel > li" , function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            let panel = $(this).attr("data-item");
            $(panel).hide(500);
        }else{
            $(".admin__list__panel > li").removeClass("active");
            $(".admin_menu > .container.main>div").hide(500);
            
            setTimeout(() =>{
                $(this).addClass("active");
                let panel = $(this).attr("data-item");
                $(panel).show(500);
            },400);
        }
    });
    $("#close_popup_buy").click(function(){
        $(".popups_buy").fadeOut(300);
    });
    $("input[type=tel]").keyup(function(){
        let num = $(this).val().substr(0,4);
        let code = $(this).val().substr(3,3);
        if(num == "+380" && code != "063" && $(this).val().length == 6 && num == "+380" && code != "039" && $(this).val().length == 6 && num == "+380" && code != "067" && $(this).val().length == 6 && num == "+380" && code != "068" && $(this).val().length == 6 && num == "+380" && code != "096" && $(this).val().length == 6 && num == "+380" && code != "097" && $(this).val().length == 6 && num == "+380" && code != "098" && $(this).val().length == 6 && num == "+380" && code != "050" && $(this).val().length == 6 && num == "+380" && code != "066" && $(this).val().length == 6  && num == "+380" && code != "095" && $(this).val().length == 6 && num == "+380" && code != "099" && $(this).val().length == 6 && num == "+380" && code != "073" && $(this).val().length == 6 && num == "+380" && code != "093" && $(this).val().length == 6 && num == "+380" && code != "091" && $(this).val().length == 6 && num == "+380" && code != "092" && $(this).val().length == 6 && num == "+380" && code != "089" && $(this).val().length == 6 && num == "+380" && code != "094" && $(this).val().length == 6  ){
            //let number = $(this).val();
            //number = number.substr(0 , number.length -1);
            $(this).attr("maxlength","6");
            $(this).parent().addClass("error");
        }else{
            $(this).attr("maxlength","15");
            $(this).parent().removeClass("error");
        }
    });
    $("#form-send").click(function(){
        let name = $("#input_name_callback");
        let phone = $("#input_phone_callback");
        let mail = $("#input_email_callback");

        let patternMail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        mail.removeClass("error");
        phone.removeClass("error");
        name.removeClass("error");
        if(name.val().length < 2){
            name.addClass("error");
        }else if(phone.val().length < 8){
            phone.addClass("error");
        }else if(patternMail.test(mail.val()) == false){
            mail.addClass("error");
        }else{
            $.ajax({
                method: "GET",
                url: "server/server.php",
                data: { 'status':"send_feedback" , 'name': name.val(), 'phone': phone.val() , 'mail': mail.val() }
            });
            $.ajax({
                method: "POST",
                url: "/success/scripts/mail.send.php",
                data: { 'name': name.val(), 'phone': phone.val() , 'mail': mail.val() }
              })
                .done(function() {
                    $(".popups").fadeIn(300);
                });
        }
    });
    $("#close_burger").click(function(){
        $(".section-menu>.main").css("right" , "-390px");
        $(".section-menu").fadeOut(500);
        $("body").css("overflow-y" , "auto");
    });
    $(".burger").click(function(){
        $(".section-menu>.main").css("right" , "0px");
        $(".section-menu").fadeIn(500);
        $("body").css("overflow-y" , "hidden");    
    });
    $("#btn_open_close_more_modules").click(function(){
        let isOpen = $(this).attr("data-open");
        
        if(isOpen == "true"){
            //open
            $(".secondOrderModules").show();
            $(this).attr("data-open" , "false");
            $(this).text("Менше модулів");
            setTimeout(function(){
                $('.containerModuless').masonry({
                    itemSelector: '.module',
                    fitWidth: true,
                    horizontalOrder: true,
                    gutter: 50
                });
                $(".secondOrderModules").css({"opacity":"1"});
            },500);
        }else{
            //close
            $(".secondOrderModules").hide(300);
            $(this).attr("data-open" , "true");
            $(this).text("Більше модулів");
            setTimeout(() => {
                $('.containerModuless').masonry({
                    itemSelector: '.module',
                    fitWidth: true,
                    horizontalOrder: true,
                    gutter: 50
                });
            }, 500);
        }
    });
    $("#answer_sect > li > .open").click(function(){
        let parent = $(this).parent();
        let block = $(parent).children(".block");
        if(block.is(":hidden")){
            block.show(500);
            $(this).children(".left").css({
                "transform":"translate(-50% , -50%) rotate(450deg)"
            });
            $(this).children(".right").css({
                "transform":"translate(-50% , -50%) rotate(360deg)"
            });
        }else{
            block.hide(500);
            $(this).children(".left").css({
                "transform":"translate(-50% , -50%) rotate(0deg)"
            });
            $(this).children(".right").css({
                "transform":"translate(-50% , -50%) rotate(0deg)"
            });
        }
    });
    $('.video').click(function(){
        $(".popups-comment .comment").hide();
        $(".popups-comment .comment-video").show();
        let link = $(this).closest(".comment").attr("data-link");
        $('.popups-comment .comment-video > iframe').attr('src' , link);
        $(".popups-comment").fadeIn(300);
    });
    $(".open-comments").click(function(){
        $(".popups-comment .comment").show();
        $(".popups-comment .comment-video").hide();
        let name = $(this).closest(".comment").attr("data-name");
        let link = $(this).closest(".comment").attr("data-link");
        let text = $(this).closest(".comment").attr("data-text");
        let social = $(this).closest(".comment").attr("data-social");

        $(".popups-comment").find(".name").html(name);
        if(social == "telegram"){
            $(".popups-comment").find(".link").text("Telegram");
        }else{
            $(".popups-comment").find(".link").text("Instagram");
        }
        $(".popups-comment").find(".link").attr("href",link);
        $(".popups-comment").find(".txt").html(text);
        $(".popups-comment").fadeIn(300);
    });
    $(".close_popup_FSQvideo").click(function(){
        $(".popups-comment").fadeOut(300);
        $(this).parent().children('iframe').attr("src" , "");
    });
    $(".close_popup_FSQs").click(function(){
        $(".popups-comment").fadeOut(300);
    });
    //function 
    $("body>.section-result>.container>.container_block>.wrapper").mousemove(function(e){
        //viriable
        console.log($(window).width());
        //console.log(e);
        let cursorPosition = getPositionCursorToBlock($(this).offset() , e);
        let button = $(this).find('button');
        let buttonPosition = button.offset();
        let conf = getVirSize();

        $("body>.section-result>.container>.container_block>.wrapper").mouseenter(function(){
            $(this).find('button').fadeIn(300);
        });
        $("body>.section-result>.container>.container_block>.wrapper").mouseleave(function(){
            $(this).find('button').fadeOut(300);
        });

        if(conf == 'mobile'){
            $("body>.section-result>.container>.container_block>.wrapper > li").find('button').css({
                left:'auto',
                right:'100px'
            });
            return;
        }
        if(e.pageY >=3260 && e.pageY <=3580 && activeBlock !== 1){
            activeBlock = 1;
            $(this).find('button').fadeOut(300);
            setTimeout(()=>{
                $(this).find('button').fadeIn(300);
            },300);
        }else if(e.pageY >=3580 && e.pageY <=3915 && activeBlock != 2){
            activeBlock = 2;
            $(this).find('button').fadeOut(300);
            setTimeout(()=>{
                $(this).find('button').fadeIn(300);
            },300);
        }else if(e.pageY >=3915 && activeBlock != 3){
            activeBlock = 3;
            $(this).find('button').fadeOut(300);
            setTimeout(()=>{
                $(this).find('button').fadeIn(300);
            },300);
        }

        if( cursorPosition.left - buttonPosition.left > conf.left ){ //#1
            button.css({ left:cursorPosition.left-200  });
            
        }else if(cursorPosition.left - buttonPosition.left < conf.right - 20 ){ //#2
            button.css({ left:cursorPosition.left  });
        }
        if( cursorPosition.top - buttonPosition.top < -1200 ){ //#3
            button.css({ top:cursorPosition.top-100  });
        } 
       });
    //func
    function getVirSize(){
        let conf = {};
        if($(window).width() >= 1850){
            conf = {left : configButton['1920'][0] , right : configButton['1920'][1] };
        }else if($(window).width() >= 1800){
            conf = {left : configButton['1800'][0] , right : configButton['1800'][1] };
        }else if($(window).width() >= 1750){
            conf = {left : configButton['1750'][0] , right : configButton['1750'][1] };
        }else if($(window).width() >= 1700){
            conf = {left : configButton['1700'][0] , right : configButton['1700'][1] };
        }else if($(window).width() >= 1650){
            conf = {left : configButton['1650'][0] , right : configButton['1650'][1] };
        }else if($(window).width() >= 1600){
            conf = {left : configButton['1600'][0] , right : configButton['1600'][1] };
        }else if($(window).width() >= 1550){
            conf = {left : configButton['1550'][0] , right : configButton['1550'][1] };
        }else if($(window).width() >= 1500){
            conf = {left : configButton['1500'][0] , right : configButton['1500'][1] };
        }else if($(window).width() >= 1450){
            conf = {left : configButton['1450'][0] , right : configButton['1450'][1] };
        }else if($(window).width() >= 1400){
            conf = {left : configButton['1400'][0] , right : configButton['1400'][1] };
        }else if($(window).width() >= 1350){
            conf = {left : configButton['1350'][0] , right : configButton['1350'][1] };
        }else if($(window).width() >= 1300){
            conf = {left : configButton['1300'][0] , right : configButton['1300'][1] };
        }else if($(window).width() >= 1250){
            conf = {left : configButton['1250'][0] , right : configButton['1250'][1] };
        }else if($(window).width() >= 1200){
            conf = {left : configButton['1200'][0] , right : configButton['1200'][1] };
        }else if($(window).width() >= 1150){
            conf = {left : configButton['1150'][0] , right : configButton['1150'][1] };
        }else if($(window).width() >= 1100){
            conf = {left : configButton['1100'][0] , right : configButton['1100'][1] };
        }else if($(window).width() >= 1050){
            conf = {left : configButton['1050'][0] , right : configButton['1050'][1] };
        }else if($(window).width() < 1050){
            conf = 'mobile';
        }else{
            conf = {left : configButton['1920'][0] , right : configButton['1920'][1] };
        }

        return conf;
    }
    function getPositionCursorToBlock(positionElem , e){
        let elem_left = positionElem.left;
        let elem_top = positionElem.top;
        // положение курсора внутри элемента
        var x = e.pageX - elem_left;
        var y = e.pageY - elem_top;
        return {left: x , top: y};
    }
    //scroll section
    $(".scrollToElem").click(function(){
        let block = $(this).attr("data-scroll-to");
        $('html, body').animate({
            scrollTop: $(block).offset().top
        }, 1000 ,'swing'); 
        $(".section-menu>.main").css("right" , "-390px");
        $(".section-menu").fadeOut(500);
        $("body").css("overflow-y" , "auto");
    });
    

    $(document).keydown(function(e) {
        if (e.altKey && e.keyCode === 81) {
            if($(".admin_login").css("top") == "-200px"){
                $(".admin_login").css("top","-5px");
            }else{
                $(".admin_login").css("top","-200px");
            }
        }
    });

    function getAdminData(){
        let token = $.cookie('token');
        let checkserver = setInterval(()=>{
            $.ajax({
                method: "GET",
                url: "../server/server.php",
                data: { 'status': "GetData", 'token': token}
              })
                .done(function(data) {
                        //console.log(data);
                    if(data == "error_token"){
                        clearTimeout(checkserver);
                    }else{
                        datas = JSON.parse(data);
                        if($(".admin_menu>.container.main>.wrapper_feedback tr").length -1 != datas.length){
                            changeData(datas);
                        }
                    }
                });
        },10000);
        let checkserver_py = setInterval(()=>{
            $.ajax({
                method: "GET",
                url: "../server/server.php",
                data: { 'status': "GetData_payment", 'token': token}
              })
                .done(function(data) {
                    //console.log(data);
                    if(data == "error_token"){
                        clearTimeout(checkserver_py);
                    }else{
                        datas = JSON.parse(data);
                        if($(".admin_menu>.container.main>.wrapper_transactions tr").length -1 != datas.length){
                            changeDataPS(datas);
                        }
                    }
                });
        },12000);
    }
    function changeDataPS(data){
        $(".admin_menu>.container.main>.wrapper_transactions tr.obj").remove();
        let is_opacity = 0;
        data.forEach(elem => {
            let date = new Date(elem["time"]*1000);
            let years = date.getFullYear();
            let month = "0"+(date.getMonth() + 1);
            let dat = "0"+date.getDate();
            var hours = "0" + (date.getHours());
            // Minutes part from the timestamp
            var minutes = "0" + (date.getMinutes());

            // Will display time in 10:30:23 format
            var formattedTime = years + "." + month.substr(-2) + "." + dat.substr(-2) + ":"+hours.substr(-2)+ ':' + minutes.substr(-2);
            let order;
            if(elem["is_order"] == 0){
                order = "Нет";
            }else{
                order = "Да";
            }
            
            $(".admin_menu>.container.main>.wrapper_transactions tbody").append("<tr class='obj'> <td><div class='wrapper'>"+formattedTime+"</div></td> <td><div class='wrapper'>"+elem['name']+"</div></td> <td><div class='wrapper'>"+elem['phone']+"</div></td> <td><div class='wrapper' style='text-transform:uppercase;'>"+elem['type']+"</div></td> <td><div class='wrapper'>"+order+"</div></td>  </tr>");
            
        });
        $(".empty_displayqwe").hide();
        $("table").show();  
        if(is_opacity != 0){
            $(".admin_menu>.container>.left>.list>li:first-child>span").text(is_opacity);
            $(".admin_menu>.container>.left>.list>li:first-child>span.empty").removeClass("empty");
        }
        
    }
    
    function changeData(data){
        $(".admin_menu>.container.main>.wrapper_feedback tr.obj").remove();
        let is_opacity = 0;
        data.forEach(elem => {
            let date = new Date(elem["time"]*1000);
            let years = date.getFullYear();
            let month = "0"+(date.getMonth() + 1);
            let dat = "0"+date.getDate();
            var hours = "0" + (date.getHours());
            // Minutes part from the timestamp
            var minutes = "0" + (date.getMinutes());

            // Will display time in 10:30:23 format
            var formattedTime = years + "." + month.substr(-2) + "." + dat.substr(-2) + ":"+hours.substr(-2)+ ':' + minutes.substr(-2);
            if(elem["is_opacity"] == "0"){
                is_opacity++;
                $(".admin_menu>.container.main>.wrapper_feedback tbody").append("<tr class='obj nonopacity'> <td><div class='wrapper'>"+formattedTime+"</div></td> <td><div class='wrapper'>"+elem['name']+"</div></td> <td><div class='wrapper'>"+elem['phone']+"</div></td> <td><div class='wrapper'>"+elem['mail']+"</div></td>  </tr>");
            }else{
                $(".admin_menu>.container.main>.wrapper_feedback tbody").append("<tr class='obj'> <td><div class='wrapper'>"+formattedTime+"</div></td> <td><div class='wrapper'>"+elem['name']+"</div></td> <td><div class='wrapper'>"+elem['phone']+"</div></td> <td><div class='wrapper'>"+elem['mail']+"</div></td>  </tr>");
            }
            
        });
        $(".empty_displayqwe").hide();
        $("table").show();  
        if(is_opacity != 0){
            $(".admin_menu>.container>.left>.list>li:first-child>span").text(is_opacity);
            $(".admin_menu>.container>.left>.list>li:first-child>span.empty").removeClass("empty");
        }
        
    }
});