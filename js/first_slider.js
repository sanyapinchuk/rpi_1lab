var images = ["url(\"img/first_background1.png\")", "url(\"img/first_background2.png\")","url(\"img/first_background3.png\")"];



document.querySelector("#first_slider_left").onclick = function(){
    
    var currelem = document.querySelector("#first_background");
    var currBack = currelem.style.backgroundImage;
    /*var indexSlash = currBack.lastIndexOf("/");
    var subAddress = currBack.substr(indexSlash+1);*/
    images.indexOf(currBack);
    var nextIndex = (images.indexOf(currBack)-1);
    if(nextIndex==-1)
        nextIndex=2;
    currelem.style.backgroundImage = images[nextIndex];

    document.querySelector("#first_blur").style.transition = "all 0s";
    document.querySelector("#first_blur").style.opacity = "1";
    var warn = setTimeout('secFunc()', 400);
}

function secFunc()
{
    document.querySelector("#first_blur").style.transition = "all 0.4s";
    document.querySelector("#first_blur").style.opacity = "0";
}

document.querySelector("#first_slider_right").onclick = function(){
    
    var currelem = document.querySelector("#first_background");
    var currBack = currelem.style.backgroundImage;
    /*var indexSlash = currBack.lastIndexOf("/");
    var subAddress = currBack.substr(indexSlash+1);*/
    images.indexOf(currBack);
    var nextIndex = (images.indexOf(currBack)+1)%3;
    currelem.style.backgroundImage = images[nextIndex];

    document.querySelector("#first_blur").style.transition = "all 0s";
    document.querySelector("#first_blur").style.opacity = "1";
    var warn = setTimeout('secFunc()', 400);
}


function setBackgr()
{
    document.querySelector("#first_background").style.backgroundImage = images[0];
}