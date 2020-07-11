const config = {
    // 一帧多少毫秒
    TimeInterval: 17,
}

class AnimatePage1 {
    constructor() {
        this.beg_frame = 8000 / config.TimeInterval; //何时开始
        this.frame_cnt = 0; //帧计数
    }

    //移动
    Timeout = function() {
        if (this.frame_cnt === Math.floor(0 / config.TimeInterval)){
            $("#Page1Img1").fadeIn(500);
        }
        if (this.frame_cnt === Math.floor(2000 / config.TimeInterval)){
            $("#Page1Img1").fadeOut(500);
        }
        if (this.frame_cnt === Math.floor(1500 / config.TimeInterval)){
            $("#Page1Img2").fadeIn(500);
        }
        if (this.frame_cnt === Math.floor(3500 / config.TimeInterval)){
            $("#Page1Img2").fadeOut(500);
        }
        if (this.frame_cnt === Math.floor(3000 / config.TimeInterval)){
            $("#Page1Img3").fadeIn(500);
        }
        if (this.frame_cnt === Math.floor(5000 / config.TimeInterval)){
            $("#Page1Img3").fadeOut(500);
        }
        if (this.frame_cnt === Math.floor(4500 / config.TimeInterval)){
            $("#Page1Img4").fadeIn(500);
        }
        if (this.frame_cnt === Math.floor(6500 / config.TimeInterval)){
            $("#Page1Img4").fadeOut(500);
        }
        this.frame_cnt += 1;
    }
}

class AnimatePage2_4 {
    constructor() {
        this.beg_frame = 17000 / config.TimeInterval; //何时开始
        this.trans_2_3 = 2000 / config.TimeInterval; //何时从第二页切换到第三页
        this.trans_3_4 = 4000 / config.TimeInterval; //何时从第三页切换到第四页
        this.frame_cnt = 0; //帧计数
    }

    Trans = function(page_id) {
        const next_page_id = page_id + 1;
        $('#Page0' + page_id).addClass("rotateCubeLeftOut");
        $('#Page0' + next_page_id).addClass("rotateCubeLeftIn");
        $("#Page0" + next_page_id).show();
        setTimeout(function() {
            $('#Page0' + page_id).removeClass("rotateCubeLeftOut");
            $('#Page0' + next_page_id).removeClass("rotateCubeLeftIn");
            $("#Page0" + page_id).hide();
        }, 1200);
    }

    Timeout = function() {
        if (this.frame_cnt === Math.floor(0 / config.TimeInterval)) {
            $("#Page2Text").text("代码编写： Halo O. Wang");
            $("#Page3Text").text("代码量\nHTML - 106行\nCSS  - 226行\nJS   - 375行");
            $("#Page4Text").text("在前端页面中实现PPT的效果");
            $('#reboid').show();
            this.Trans(1); //从第二页切换到第三页
        }
        if (this.frame_cnt === Math.floor(this.trans_2_3)) {
            this.Trans(2); //从第二页切换到第三页
        }
        if (this.frame_cnt === Math.floor(this.trans_3_4)) {
            this.Trans(3); //从第三页切换到第四页
        }
        this.frame_cnt += 1;
    }
}

class AnimatePage5 {
    constructor() {
        this.beg_frame = 24000 / config.TimeInterval; //何时开始
        this.frame_cnt = 0; //帧计数
    }

    Timeout = function() {
        if (this.frame_cnt === 0) {
            $('#reboid').addClass("BottomOut");
            $('#Page05').addClass("BottomIn");
            $("#Page05").show();
            setTimeout(function() {
                $('#reboid').removeClass("BottomOut");
                $('#Page05').removeClass("BottomIn");
                $("#reboid").hide();
                $("#Page04").hide();
            }, 1200);
        }
        if (this.frame_cnt === Math.floor(1500 / config.TimeInterval)) {
            //左边图片向上位移
            $("#Page5Img1").show();
            let init_y = window.innerHeight + 1;
            let final_y = -document.getElementById("Page5Img1").clientHeight - 1;
            document.getElementById("Page5Img1").style.left = "10px";
            document.getElementById("Page5Img1").style.top = Math.ceil(init_y) + "px";
            $("#Page5Img1").animate({
                top: final_y,
                left: 10
            }, 7000, "linear");
        }
        if (this.frame_cnt === Math.floor(1500 / config.TimeInterval)) {
            //右边显示第一句话
            $("#Page5Lrc1").text("开发前要先做\n配置和软件安装");
            FloatIn("Page5Lrc1", 1000);
        }
        if (this.frame_cnt === Math.floor(5000 / config.TimeInterval)) {
            //右边显示第二句话
            $("#Page5Lrc2").text("我不知\n什么是\"环境变量\"");
            FloatIn("Page5Lrc2", 1000);
            FloatIn("Page5Img2", 1000);
        }
        this.frame_cnt += 1;
    }
}

class AnimatePage6 {
    constructor() {
        this.beg_frame = 34000 / config.TimeInterval; //何时开始
        this.frame_cnt = 0; //帧计数

        this.lrc2_dx = -1;
        this.lrc_upd_frame = -1;
        this.lrc2 = "我行我能上！";
    }

    UpdateLrc2 = function() {
        if (this.lrc2_dx >= 0 && this.lrc2_dx <= this.lrc2.length - 1) {
            if (this.frame_cnt - this.lrc_upd_frame >= 300 / config.TimeInterval || this.lrc_upd_frame === -1) {
                let ele_t = $('<span>' + this.lrc2[this.lrc2_dx] + '</span>');
                ele_t.css('position', 'relative');
                ele_t.css('margin-left', '2px');
                ele_t.css('visibility', 'hidden');
                ele_t.appendTo($('#Page6Lrc2'));

                let ele = $('<span hidden>' + this.lrc2[this.lrc2_dx] + '</span>');
                ele.css('top', ele_t.position().top);
                ele.css('left', ele_t.position().left);
                ele.css('position', 'absolute');
                ele.addClass("Huibian");
                ele.appendTo($('#Page6Lrc2'));
                ele.show();

                this.lrc_upd_frame = this.frame_cnt;
                this.lrc2_dx += 1;
            }
        }
    }

    ScrollInit = function() {
        $("#Page6Scroll").show();
        DrawFrame("Page6Lrc3Canvas");
        DrawFrame("Page6Lrc4Canvas");
        DrawFrame("Page6Lrc5Canvas");
        DrawFrame("Page6Lrc6Canvas");
        DrawFrame("Page6Lrc7Canvas");
        DrawFrame("Page6Lrc8Canvas");
        DrawFrame("Page6Lrc9Canvas");
        $("#Page6Lrc6").text("循环计算时间真的好长\n（我×，居然×××是死循环?!）");
        $("#Page6Lrc8").text("返回值也不正常\n（0 - 1 = ?????）");
    }

    Timeout = function() {
        if (this.frame_cnt === 0) {
            $("#Page05").hide();
            $("#Page5Img1").hide();
            $("#Page5Lrc1").hide();
            $("#Page5Lrc2").hide();
            $("#Page06").show();
        }
        this.UpdateLrc2(); //判断是否要显示艺术字
        if (this.frame_cnt === Math.floor(0 / config.TimeInterval)) {
            //右边显示第一句话
            $("#Page6Lrc1Div").show();
            $("#Page6Lrc1").css("font-size", "52px");
            $("#Page6Lrc1").text("简单看一下教程，觉得");
            FloatIn("Page6Lrc1Div", 1000);
        }
        if (this.frame_cnt === Math.floor(1500 / config.TimeInterval)) {
            //右边显示艺术字
            $("#Page6Lrc2").show();
            this.lrc2_dx = 0;
        }
        if (this.frame_cnt === Math.floor(3000 / config.TimeInterval)) {
            // 右边显示箭头
            $("#Page6ArrowDiv").show();
            $("#Page6Arrow").show();
            $('#Page6ArrowDiv').animate({
                width: 400,
            }, 1000);
        }
        if (this.frame_cnt === Math.floor(4000 / config.TimeInterval)) {
            this.ScrollInit();
            // 右侧的卷轴逐渐左移
            const left_dist = window.innerHeight + $("#Page6Scroll").width() + 20;  //需要向左移动多少距离
            $("#Page6Lrc2").animate({
                left: ($("#Page6Lrc2").position().left - left_dist) + "px"
            }, 22000, "linear", function(){
                $("#Page6Lrc2").hide();
            });
            $("#Page6ArrowDiv").animate({
                left: ($("#Page6ArrowDiv").position().left - left_dist) + "px"
            }, 22000, "linear", function(){
                $("#Page6ArrowDiv").hide();
            });
            $("#Page6Scroll").animate({
                left: "-5020px"
            }, 22000, "linear", function () {
                $("#Page6Scroll").hide();
            });
            // 第一段正文逐渐消失
            $('#Page6Lrc1Div').animate({
                width: 0,
            }, 1000, "linear", function () {
                $('#Page6Lrc1Div').hide();
            });
        }
        if (this.frame_cnt === Math.floor(26000 / config.TimeInterval)){
            FloatIn("Page6Lrc10", 1000);
            $("#Page6Video").fadeIn(1000);
        }
        if (this.frame_cnt === Math.floor(29500 / config.TimeInterval)){
            FloatIn("Page6Lrc11", 1000);
        }
        if (this.frame_cnt === Math.floor(32500 / config.TimeInterval)){
            $("#Page6Video").fadeOut(1000);
        }
        this.frame_cnt += 1;
    }
}

class AnimatePage7 {
    constructor() {
        this.beg_frame = 68000 / config.TimeInterval; //何时开始
        this.frame_cnt = 0; //帧计数
    }

    Timeout = function () {
        if (this.frame_cnt === 0) {
            $("#Page06").hide();
            $("#Page07").show();
        }
        if (this.frame_cnt === Math.floor(0 / config.TimeInterval)) {
            $("#Page7Img1").show();
            $("#Page7Img1").animate({
                left: -150
            }, 1000, "linear");
            $("#Page7Lrc1").show();
            $("#Page7Lrc1").animate({
                left: 200
            }, 1000, "linear");
        }
        if (this.frame_cnt === Math.floor(4000 / config.TimeInterval)) {
            $("#Page7Img2").show();
            $("#Page7Img2").animate({
                left: 1000
            }, 1000, "linear");
            $("#Page7Lrc2").show();
            $("#Page7Lrc2").animate({
                left: 1000
            }, 1000, "linear");
        }
        this.frame_cnt += 1; //帧计数
    }
}

class AnimatePage8 {
    constructor() {
        this.beg_frame = 77000 / config.TimeInterval; //何时开始
        this.frame_cnt = 0; //帧计数
    }

    Timeout = function () {
        if (this.frame_cnt === 0) {
            $("#Page8Text").text("PPT原版地址见下方简介");
            $('#Page07').addClass("TopOut");
            $('#Page08').addClass("TopIn");
            $("#Page08").show();
            setTimeout(function () {
                $('#Page07').removeClass("TopOut");
                $('#Page08').removeClass("TopIn");
                $("#Page07").hide();
            }, 1200);
        }
        this.frame_cnt += 1; //帧计数
    }
}

// 主时间轴
function TimeAxis() {
    // 主函数的变量
    let frame_cnt = 0;
    // 界面中的成员
    let animage_page1 = new AnimatePage1();
    let animate_page_2_4 = new AnimatePage2_4();
    let animage_page5 = new AnimatePage5();
    let animage_page6 = new AnimatePage6();
    let animage_page7 = new AnimatePage7();
    let animate_page8 = new AnimatePage8();

    setInterval(function(){
        // 标题文字
        if (frame_cnt >= animage_page1.beg_frame && animate_page_2_4.beg_frame) {
            animage_page1.Timeout();
        }
        if (frame_cnt >= animate_page_2_4.beg_frame && frame_cnt <= animage_page5.beg_frame) {
            animate_page_2_4.Timeout();
        }
        if (frame_cnt >= animage_page5.beg_frame && frame_cnt <= animage_page6.beg_frame) {
            animage_page5.Timeout();
        }
        if (frame_cnt >= animage_page6.beg_frame && frame_cnt <= animage_page7.beg_frame) {
            animage_page6.Timeout();
        }
        if (frame_cnt >= animage_page7.beg_frame && frame_cnt <= animate_page8.beg_frame) {
            animage_page7.Timeout();
        }
        if (frame_cnt >= animate_page8.beg_frame) {
            animate_page8.Timeout();
        }
        frame_cnt += 1;
    }, config.TimeInterval);
}

$(function(){
    TimeAxis();
})
