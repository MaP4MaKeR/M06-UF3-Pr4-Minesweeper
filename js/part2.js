$().ready(function(){
    start();
});

function start(){
    $("table").html("");

    var playground = Math.floor(Math.random()*3)+4;
    var bombs = [];

    var value = playground*2;
    var contador = 0;

    while(bombs.length < playground){
        mine = Math.floor(Math.random()*(playground*playground));
        if(bombs.indexOf(mine) == -1){
            bombs.push(mine);
        }
    }
    for(i=0;i<playground;i++){
        $("table").append("<tr>");
        for(o=0;o<playground;o++){
            if(bombs.indexOf(contador) != -1){
                $("table").append("<td><img id='mine' class='responsive' src='img/block.png'></td>");
            }else{
                $("table").append("<td><img class='responsive' src='img/block.png'></td>");
            }
            contador++;
        }
        $("table").append("</tr>");
    };

    $("img").on("click",function(){
        if($(this).attr("id") == undefined){
            $(this).attr("src", "img/save.jpg");
            value--;
            $(this).off("click");
            if(value <= 0){
                alert("You won!");
                $(".btn").html("<input type='button' id='retry' value='Wanna try again?'>");
                $("#retry").on("click",function(){
                    value = start();
                });
            }
        }
        else{
            $("img").attr("src", "img/bomb.jpg");
            alert("You are dead...not a big surprise!");
            $("img").off("click");
            $(".btn").html("<input type='button' id='retry' value='Wanna try again?'>");
            $("#retry").on("click",function(){
                value = start();
            });
        };
    });
}