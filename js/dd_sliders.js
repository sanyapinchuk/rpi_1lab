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
        alert("Имя должно начинаться с большой буквы и содержать только латинские буквы");
        return false;
    }
    else
    {
        
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                return true;
            }
        }
        
    }
    alert("Имя должно начинаться с большой буквы и содержать только латинские буквы");
    return false;
}


function kamenNameValidation()
{
    var regexp=new RegExp("[A-Z][a-z]+");
    var value=document.getElementById("kamenName").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        alert("Имя должно начинаться с большой буквы и содержать только латинские буквы");
        return false;
    }
    else
    {
        
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                return true;
            }
        }
    
    }
    alert("Имя должно начинаться с большой буквы и содержать только латинские буквы");
    return false;
}
function kamenEmailValidation()
{
    var regexp=new RegExp("[a-zA-Z][a-zA-Z0-9]+[@](mail|gmail)['.'](ru|com)");
    var value=document.getElementById("kamenEmail").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        alert("Введённый e-mail должен начинаться с буквы латинского алфавита и содержать комбинацию букв и цифр,после чего идёт @mail или @gmail .ru или .com");
        return false;
    }
    else
    {      
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                return true;
            }
        } 
    }
    alert("Введённый e-mail должен начинаться с буквы латинского алфавита и содержать комбинацию букв и цифр,после чего идёт @mail или @gmail .ru или .com");
    return false;
}
function kamenTelephoneValidation()
{
    var regexp=new RegExp("[+][0-9]+");
    var value=document.getElementById("kamenTelephone").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        alert("Телефон должен вводится в виде: +xxxxxxxxx");
        return false;//  
    }
    else
    {
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                return true;
            }
        }
    }
    alert("Телефон должен вводится в виде: +xxxxxxxxx");
    return false;
}

function ddEmailValidation()
{
    var regexp=new RegExp("[a-zA-Z][a-zA-Z0-9]+[@](mail|gmail)['.'](ru|com)");
    var value=document.getElementById("ddEmail").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        alert("Введённый e-mail должен начинаться с буквы латинского алфавита и содержать комбинацию букв и цифр,после чего идёт @mail или @gmail .ru или .com");
        return false; 
    }
    else
    {      
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                return true;
            }
        } 
    }
    alert("Введённый e-mail должен начинаться с буквы латинского алфавита и содержать комбинацию букв и цифр,после чего идёт @mail или @gmail .ru или .com");
    return false;
}

function ddTelephoneValidation()
{
    var regexp=new RegExp("[+][0-9]+");
    var value=document.getElementById("ddTelephone").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        alert("Телефон должен вводится в виде: +xxxxxxxxx");
        return false;
    }
    else
    {
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                return true;
            }
        }
    }
    alert("Телефон должен вводится в виде: +xxxxxxxxx");
    return false;
}

function ddWebsiteValidation()
{
    var regexp=new RegExp("[a-zA-Z0-9]+['.'](ru|com|by|ua|org|net)");
    var value=document.getElementById("ddWebsite").value;
    var arr=value.match(regexp);
    if (arr==null)
    {
        alert("Имя сайта должно состоять из букв латинского алфавита или цифр, оканчивающихся на by,net,com,ua,ru или org");
        return false;
    }
    else
    {
        
        for(var i=0;i<arr.length;i++)
        {
            if (arr[i]==value)
            {
                return true;
            }
        }
        alert("Имя сайта должно состоять из букв латинского алфавита или цифр, оканчивающихся на by,net,com,ua,ru или org");
        return false;
    }
}

function ddMessageValidation()
{
    var value=document.getElementById("ddMessage").value;
    if (value.length==0)
    {
        alert("Вы не ввели сообщение");
        return false;  
    }
    return true;
}


function kamenCloseWindow(alertWindow)
{
    console.log(alertWindow);
    
    console.log('закрыто');
    alertWindow.style.display="none";
    localStorage.setItem("kamenFormShow",false);
    // document.getElementById("kamenFormSignUp").style.display="none";
    document.getElementById("secwrapper").style.display="none";
    document.getElementById("wrapper").style.opacity = "1"
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
    
    //ShowForm();
    document.getElementById("secwrapper").style.display="block";
    localStorage.setItem("kamenFormShow",true);
    document.getElementById("kamenFormSignUp").style.display="block";
    document.getElementById("wrapper").style.opacity = "0.2";

    
}


function ddCloseWindow()
{
    var elem=document.getElementById("ddAlert");
    elem.style.display="none";
}

document.querySelector("#ddSubmit").onclick=function()
    {
        if(ddNameValidation() && ddEmailValidation() && ddTelephoneValidation() && ddWebsiteValidation() && ddMessageValidation()) {
            var elem=document.getElementById("ddAlert");
            elem.style.display="block";
            setTimeout(ddCloseWindow,5000);
        }
    }

    document.querySelector("#ddAll").onclick=function()
    {
        let pictblock =  document.getElementById("pictureset_k");
        pictblock.innerHTML = "";
        pictblock.style.flexDirection = "row";


        let ar1 = document.createElement("div");
        ar1.className="around_two_pictures";
        let ph1 = document.createElement("div");
        ph1.id = "dd_1png";
        let ph2 = document.createElement("div");
        ph2.id = "dd_2png";
        ar1.appendChild(ph1);
        ar1.appendChild(ph2);

        let ar2 = document.createElement("div");
        ar2.className="around_two_pictures";
        let ph3 = document.createElement("div");
        ph3.id = "dd_3png";
        let ph4 = document.createElement("div");
        ph4.id = "dd_4png";
        ar2.appendChild(ph3);
        ar2.appendChild(ph4);

        let ar3 = document.createElement("div");
        ar3.className="around_two_pictures";
        let ph5 = document.createElement("div");
        ph5.id = "dd_5png";
        let ph6 = document.createElement("div");
        ph6.id = "dd_6png";
        ar3.appendChild(ph5);
        ar3.appendChild(ph6);
        
        let ar4 = document.createElement("div");
        ar4.className="around_two_pictures";
        let ph7 = document.createElement("div");
        ph7.id = "dd_7png";
        let ph8 = document.createElement("div");
        ph8.id = "dd_8png";
        ar4.appendChild(ph7);
        ar4.appendChild(ph8);
        

        pictblock.appendChild(ar1);
        pictblock.appendChild(ar2);
        pictblock.appendChild(ar3);
        pictblock.appendChild(ar4);

    } 
    
    document.querySelector("#ddSite").onclick=function()
    {
        let pictblock =  document.getElementById("pictureset_k");
        pictblock.innerHTML = "";
        pictblock.style.flexDirection = "column";

        let line1 = document.createElement("div");
        line1.className = "two_lines";
    
        let ph1 = document.createElement("div");
        ph1.id ="dd_4png";
        ph1.className = "ddpngs";
        line1.appendChild(ph1);

        let line2 = document.createElement("div");
        line2.className = "two_lines";

        let ph2 = document.createElement("div");
        ph2.id ="dd_5png";
        ph2.className = "ddpngs";
        line2.appendChild(ph2);

        let ph3 = document.createElement("div");
        ph3.id ="dd_6png";
        ph3.className = "ddpngs";
        line2.appendChild(ph3);

        pictblock.appendChild(line1);
        pictblock.appendChild(line2);  
    }
    
    document.querySelector("#ddBrochures").onclick=function()
    {
        let pictblock =  document.getElementById("pictureset_k");
        pictblock.innerHTML = "";
        pictblock.style.flexDirection = "column";

        let line1 = document.createElement("div");
        line1.className = "two_lines";
    
        let ph1 = document.createElement("div");
        ph1.id ="dd_1png";
        ph1.className = "ddpngs";
        line1.appendChild(ph1);

        let line2 = document.createElement("div");
        line2.className = "two_lines";

        let ph2 = document.createElement("div");
        ph2.id ="dd_2png";
        ph2.className = "ddpngs";
        line2.appendChild(ph2);

        let ph3 = document.createElement("div");
        ph3.id ="dd_3png";
        ph3.className = "ddpngs";
        line2.appendChild(ph3);

        pictblock.appendChild(line1);
        pictblock.appendChild(line2); 
    }    

    document.querySelector("#ddLogos").onclick=function()
    {
        let pictblock =  document.getElementById("pictureset_k");
        pictblock.innerHTML = "";
        pictblock.style.flexDirection = "column";

        let line1 = document.createElement("div");
        line1.className = "two_lines";
    
        let ph1 = document.createElement("div");
        ph1.id ="dd_7png";
        ph1.className = "ddpngs";
        line1.appendChild(ph1);

        let line2 = document.createElement("div");
        line2.className = "two_lines";

        let ph2 = document.createElement("div");
        ph2.id ="dd_8png";
        ph2.className = "ddpngs";
        line2.appendChild(ph2);

        pictblock.appendChild(line1);
        pictblock.appendChild(line2);        
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
