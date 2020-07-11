function test(){
    // console.log("AAA" + 57);
    $("#Page05").show();
    $(".Page5Img1").show();
    let init_y = window.innerHeight + 1;
    let final_y = -document.getElementById("Page5Img1").clientHeight - 1;
    document.getElementById("Page5Img1").style.left = "10px";
    document.getElementById("Page5Img1").style.top = Math.ceil(init_y) + "px";
    $("#Page5Img1").animate({
        top: final_y,
        left: 10
    }, 10000, "linear", function(){
        $(".Page5Img1").hide();
    });
}

window.onload = function(){
    test();
}