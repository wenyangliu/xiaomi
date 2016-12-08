window.onload = function(){
    var box = document.getElementById("box");
    var uls = document.getElementsByClassName("list");
    var uls2 = document.getElementsByClassName("count");
    var imgs = uls[0].getElementsByTagName("li");
    var btn = uls2[0].getElementsByTagName("li");
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var i= 0,index=0;
    var play = null;

    function show(a){
        for(i=0;i<btn.length;i++){
            btn[i].className = " ";
            btn[a].className = "current";
        }
        for(i=0;i<imgs.length;i++){
            imgs[i].style.opacity = 0;
            imgs[a].style.opacity = 1;
        }
    }
    //切换图片，对应的圆点
    for(i=0;i<btn.length;i++){
        btn[i].index=i;
        btn[i].onclick = function(){
            show(this.index);
            clearInterval(play);
        }
    }
    //左边按钮
    prev.onclick = function(){
        index>=imgs.length&&(index=0);
        index--;
        if(index<0){
            index=imgs.length-1;
        }
        show(index);
    };
    //右边按钮
    next.onclick = function(){
        index++;
        index>=imgs.length&&(index=0);
        show(index);
    };


    //自动播放
    function autoPlay(){
        play = setInterval(function(){
            index++;
            index>=imgs.length&&(index=0);
            show(index);
        },2000)
    }
    autoPlay();

    box.onmouseover = function(){
        clearInterval(play);
    };
    box.onmouseout = function(){
        autoPlay();
    }
}