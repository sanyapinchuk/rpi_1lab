var circleArr=document.getElementsByClassName("circleSmall");
if (localStorage.getItem('counter')==null)
{
        let elem =document.getElementById("dd_podvalny");
        elem.style.backgroundImage = "url('img/testimonials_back.png')";
        circleArr[0].style.backgroundColor="#e3e3e3";
        circleArr[1].style.backgroundColor="#c5c5c5";
        circleArr[2].style.backgroundColor="#c5c5c5";
        localStorage.setItem("counter","2");
}
else
{
    let counter=localStorage.getItem('counter');
    if (counter>1)
    {
        counter--;
    }
    else
    {
        counter=3;
    }
    localStorage.setItem("counter",counter);
    if (localStorage.getItem('counter')=="1")
    {
        let elem =document.getElementById("dd_podvalny");
        elem.style.backgroundImage = "url('img/testimonials_back.png')";
        circleArr[0].style.backgroundColor="#e3e3e3";
        circleArr[1].style.backgroundColor="#c5c5c5";
        circleArr[2].style.backgroundColor="#c5c5c5";
        localStorage.setItem("counter","2");
    }
    else if (localStorage.getItem('counter')=="2")
    {
        let elem =document.getElementById("dd_podvalny");
        elem.style.backgroundImage = "url('img/m5cs.jpg')";
        circleArr[0].style.backgroundColor="#c5c5c5";
        circleArr[1].style.backgroundColor="#e3e3e3";
        circleArr[2].style.backgroundColor="#c5c5c5";
        localStorage.setItem('counter',"3");
    }
    else if (localStorage.getItem('counter')=="3")
    {
        let elem =document.getElementById("dd_podvalny");
        elem.style.backgroundImage = "url('img/e63s.jpg')";
        circleArr[0].style.backgroundColor="#c5c5c5";
        circleArr[1].style.backgroundColor="#c5c5c5";
        circleArr[2].style.backgroundColor="#e3e3e3";
        localStorage.setItem('counter',"1");
    }
}

function ddShowSliders()
{  
    if (localStorage.getItem('counter')=="1")
    {
        let elem =document.getElementById("dd_podvalny");
        elem.style.backgroundImage = "url('img/testimonials_back.png')";
        circleArr[0].style.backgroundColor="#e3e3e3";
        circleArr[1].style.backgroundColor="#c5c5c5";
        circleArr[2].style.backgroundColor="#c5c5c5";
        localStorage.setItem("counter","2");
    }
    else if (localStorage.getItem('counter')=="2")
    {
        let elem =document.getElementById("dd_podvalny");
        elem.style.backgroundImage = "url('img/m5cs.jpg')";
        circleArr[0].style.backgroundColor="#c5c5c5";
        circleArr[1].style.backgroundColor="#e3e3e3";
        circleArr[2].style.backgroundColor="#c5c5c5";
        localStorage.setItem('counter',"3");
    }
    else if (localStorage.getItem('counter')=="3")
    {
        let elem =document.getElementById("dd_podvalny");
        elem.style.backgroundImage = "url('img/e63s.jpg')";
        circleArr[0].style.backgroundColor="#c5c5c5";
        circleArr[1].style.backgroundColor="#c5c5c5";
        circleArr[2].style.backgroundColor="#e3e3e3";
        localStorage.setItem('counter',"1");
    }
}

var images = ["url(\"img/first_background1.png\")", "url(\"img/first_background2.png\")","url(\"img/first_background3.png\")"];

function bodyInit()
{
    document.getElementById("ddSubmit").disabled=true;
    setInterval(ddShowSliders,10000);

    //for 3 task
    document.querySelector("#first_background").style.backgroundImage = images[0];
}

function ddNameValidation()
{
    var regexp=new RegExp("[A-Z][a-z]+");
    var value=document.getElementById("ddName").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        // alert("Имя должно начинаться с большой буквы и содержать только латинские буквы");
    }
    else
    {
        var found=false;
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                found=true;
            }
        }
        if (!found)
        {
            // alert("Имя должно начинаться с большой буквы и содержать только латинские буквы");
        }
    }
}

function ddEmailValidation()
{
    var regexp=new RegExp("[a-zA-Z][a-zA-Z0-9]+[@](mail|gmail)['.'](ru|com)");
    var value=document.getElementById("ddEmail").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        // alert("Введённый e-mail должен начинаться с буквы латинского алфавита и содержать комбинацию букв и цифр,после чего идёт @mail или @gmail .ru или .com");
    }
    else
    {
        var found=false;
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                found=true;
            }
        }
        if (!found)
        {
            // alert("Проверьте введённый e-mail");
        }
    }
}

function ddTelephoneValidation()
{
    var regexp=new RegExp("[+][0-9]+");
    var value=document.getElementById("ddTelephone").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        // alert("Телефон должен вводится в виде: +xxxxxxxxx");
    }
    else
    {
        var found=false;
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                found=true;
            }
        }
        if (!found)
        {
            // alert("Телефон должен вводится в виде: +xxxxxxxxx");
        }
    }
}

function ddWebsiteValidation()
{
    var regexp=new RegExp("[a-zA-Z0-9]+['.'](ru|com|by|ua|org|net)");
    var value=document.getElementById("ddWebsite").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        // alert("Имя сайта должно состоять из букв латинского алфавита или цифр, оканчивающихся на by,net,com,ua,ru или org");
    }
    else
    {
        var found=false;
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                found=true;
            }
        }
        if (!found)
        {
            // alert("Имя сайта должно состоять из букв латинского алфавита или цифр, оканчивающихся на by,net,com,ua,ru или org");
        }
    }
}

function ddMessageValidation()
{
    var value=document.getElementById("ddMessage").value;
    if (value.length==0)
    {
        // alert("Вы не ввели сообщение");
    }
}


function kamenCheckFields(){
    empty=false;
    if (document.getElementById("ddName").value.length==0)
    {
        empty=true;
    }
    else
    {
        if (document.getElementById("ddEmail").value.length==0)
        {
            empty=true;
        }
        else
        {
            if (document.getElementById("ddTelephone").value.length==0)
            {
                empty=true;
            }else
                {
                    if (document.getElementById("ddMessage").value.length==0)
                    {
                        empty=true;
                    }
                }
            
        }
    }
    if (empty!=true)
    {
        document.getElementById("kamenSubmit").disabled=false;
    }
}
function kamenCloseWindow(alertWindow)
{
    console.log(alertWindow);
    
    console.log('закрыто');
    alertWindow.style.display="none";
}

var kamenCounter = 0;
document.querySelector("#kamenSubmit").onclick=function()
    {   
        if (kamenCounter < 1) {
            var elem=document.getElementById("kamenAlert");
        } else var elem=document.getElementById("kamenAlert2");
        kamenCounter++;
        elem.style.display="block";
        setTimeout(kamenCloseWindow,5000,elem);
    }
document.querySelector("#ddSignUp0").onclick=function(){
    kamenFormShow();
} 
document.querySelector("#ddSignUp1").onclick=function(){
    kamenFormShow();
} 
document.querySelector("#ddSignUp2").onclick=function(){
    kamenFormShow();
} 
function kamenFormShow(){
    document.getElementById("kamenFormSignUp").style.display="block";
}


document.querySelector("#ddSubmit").onclick=function()
    {
        var elem=document.getElementById("ddAlert");
        elem.style.display="block";
        setTimeout(ddCloseWindow,5000);
    }

function ddCheckFields()
{
    empty=false;
    if (document.getElementById("ddName").value.length==0)
    {
        empty=true;
    }
    else
    {
        if (document.getElementById("ddEmail").value.length==0)
        {
            empty=true;
        }
        else
        {
            if (document.getElementById("ddTelephone").value.length==0)
            {
                empty=true;
            }
            else
            {
                if (document.getElementById("ddWebsite").value.length==0)
                {
                    empty=true;
                }
                else
                {
                    if (document.getElementById("ddMessage").value.length==0)
                    {
                        empty=true;
                    }
                }
            }
        }
    }
    if (empty!=true)
    {
        document.getElementById("ddSubmit").disabled=false;
    }
}

function ddCloseWindow()
{
    var elem=document.getElementById("ddAlert");
    elem.style.display="none";
}

document.querySelector("#ddSubmit").onclick=function()
    {
        var elem=document.getElementById("ddAlert");
        elem.style.display="block";
        setTimeout(ddCloseWindow,5000);
    }

document.querySelector("#ddAll").onclick=function()
    {
        document.getElementById("dd_1png").style.backgroundImage="url('img/pictureset/1.png')"; 
        document.getElementById("dd_2png").style.backgroundImage="url('img/pictureset/2.png')"; 
        document.getElementById("dd_3png").style.backgroundImage="url('img/pictureset/3.png')"; 
        document.getElementById("dd_4png").style.backgroundImage="url('img/pictureset/4.png')"; 
        document.getElementById("dd_5png").style.backgroundImage="url('img/pictureset/5.png')"; 
        document.getElementById("dd_6png").style.backgroundImage="url('img/pictureset/6.png')"; 
        document.getElementById("dd_7png").style.backgroundImage="url('img/pictureset/7.png')"; 
        document.getElementById("dd_8png").style.backgroundImage="url('img/pictureset/8.png')";        
    } 
    
    document.querySelector("#ddSite").onclick=function()
    {
        document.getElementById("dd_1png").style.backgroundImage="url('img/2ndPagePic.png')"; 
        document.getElementById("dd_2png").style.backgroundImage="url('img/Arrow.png')"; 
        document.getElementById("dd_3png").style.backgroundImage="url('img/arrow_left.png')"; 
        document.getElementById("dd_4png").style.backgroundImage="url('img/arrow_right.png')"; 
        document.getElementById("dd_5png").style.backgroundImage="url('img/Behance.png')"; 
        document.getElementById("dd_6png").style.backgroundImage="url('img/black_line.png')"; 
        document.getElementById("dd_7png").style.backgroundImage="url('img/blog_1.jpg')"; 
        document.getElementById("dd_8png").style.backgroundImage="url('img/blog_2.jpg')";        
    }
    
    document.querySelector("#ddBrochures").onclick=function()
    {
        document.getElementById("dd_1png").style.backgroundImage="url('img/blog_3.jpg')"; 
        document.getElementById("dd_2png").style.backgroundImage="url('img/blog_4.jpg')"; 
        document.getElementById("dd_3png").style.backgroundImage="url('img/Briefcase Icon.png')"; 
        document.getElementById("dd_4png").style.backgroundImage="url('img/Businessman Icon.png')"; 
        document.getElementById("dd_5png").style.backgroundImage="url('img/Chart.png')"; 
        document.getElementById("dd_6png").style.backgroundImage="url('img/Checked Checkbox Icon.png')"; 
        document.getElementById("dd_7png").style.backgroundImage="url('img/Combo Chart.png')"; 
        document.getElementById("dd_8png").style.backgroundImage="url('img/Facebook.png')";        
    }    

    document.querySelector("#ddLogos").onclick=function()
    {
        document.getElementById("dd_1png").style.backgroundImage="url('img/first_background.png')"; 
        document.getElementById("dd_2png").style.backgroundImage="url('img/wave.png')"; 
        document.getElementById("dd_3png").style.backgroundImage="url('img/footer_back.png')"; 
        document.getElementById("dd_4png").style.backgroundImage="url('img/icon.png')"; 
        document.getElementById("dd_5png").style.backgroundImage="url('img/man.png')"; 
        document.getElementById("dd_6png").style.backgroundImage="url('img/woman.png')"; 
        document.getElementById("dd_7png").style.backgroundImage="url('img/Tweter.png')"; 
        document.getElementById("dd_8png").style.backgroundImage="url('img/lock.png')";        
    } 


    //3


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