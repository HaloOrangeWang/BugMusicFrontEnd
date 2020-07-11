function FloatIn(element_id, speed){
    let element_id_2 = "#" + element_id;
    let seconds = (speed / 1000) + 's';
    $(element_id_2).show();
    $(element_id_2).addClass("fadeInUp");
    $(element_id_2).css({"animation-duration": seconds, "animation-delay": "0s"});
}

function DrawFrame(element_id){
    // 画边框
    let canvas2 = document.getElementById(element_id);
    if (!canvas2.getContext)
        return;
    let ctx = canvas2.getContext('2d');

    const ele_width = $("#" + element_id).width();
    const ele_height = $("#" + element_id).height();
    ctx.lineWidth = '5';//边框宽度
    ctx.strokeStyle = "#cc3333";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(ele_width - 5, 0);
    ctx.lineTo(ele_width - 5, ele_height - 5);
    ctx.lineTo(0, ele_height - 5);
    ctx.lineTo(0, 0);
    ctx.stroke();

    ctx.moveTo(10, 0);
    ctx.lineTo(10, ele_height - 5);
    ctx.stroke();
    ctx.moveTo(0, 10);
    ctx.lineTo(ele_width - 5, 10);
    ctx.stroke();
    ctx.moveTo(ele_width - 15, 0);
    ctx.lineTo(ele_width - 15, ele_height - 5);
    ctx.stroke();
    ctx.moveTo(0, ele_height - 15);
    ctx.lineTo(ele_width - 5, ele_height - 15);
    ctx.stroke();
}