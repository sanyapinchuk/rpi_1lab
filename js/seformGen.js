var kamenCounter = 0;
function ShowForm()
{
    var newDiv = document.createElement("div");
    newDiv.id = "kamenFormSignUp";

    //newDiv.innerHTML = "<h1>Привет!</h1>";

    


    

    var cross = document.createElement("div");
    cross.id = "kamenCross";
    cross.innerHTML= "X";
    
    newDiv.appendChild(cross);

    var form = document.createElement("form");
    //form.setAttribute("onkeypress","kamenCheckFields();");
    form.setAttribute("onsubmit","return false");
    form.id ="kamenform";


    var in1 = document.createElement("input");
    in1.setAttribute("type","name");
    in1.id = "kamenName";
    in1.setAttribute("placeholder","Name*");
    in1.required = true;
    //in1.setAttribute("onfocusout","ddNameValidation()");
    
    var in2 = document.createElement("input");
    in2.setAttribute("type","email");
    in2.id = "kamenEmail";
    in2.setAttribute("placeholder","E-mail*");
    in2.required = true;
    //in2.setAttribute("onfocusout","ddEmailValidation()");

    var in3 = document.createElement("input");
    in3.setAttribute("type","telephone");
    in3.id = "kamenTelephone";
    in3.setAttribute("placeholder","Telephone*");
    in3.required = true;
    //in3.setAttribute("onfocusout","ddTelephoneValidation()");

    var in4 = document.createElement("input");
    in4.setAttribute("type","submit");
    in4.className ="button";
    in4.id = "kamenSubmit";


    form.appendChild(in1);
    form.appendChild(in2);
    form.appendChild(in3);
    form.appendChild(in4);

    newDiv.appendChild(form);






    var exdiv = document.getElementById("secwrapper");
    exdiv.appendChild(newDiv);


    var m1 = document.createElement("div");
    m1.id = "kamenAlert";
    m1.className="kamenAlertClass";
    m1.innerHTML="Вы отправили форму";

    var m2 = document.createElement("div");
    m2.id = "kamenAlert2";
    m2.className="kamenAlertClass";
    m2.innerHTML="Уже зарегистрированы";


    exdiv.appendChild(m1);
    exdiv.appendChild(m2);


    document.querySelector("#kamenSubmit").onclick=function()
    {
        if(kamenNameValidation() && kamenEmailValidation() && kamenTelephoneValidation()) {
            var elem=null;
            if (kamenCounter < 1) {
                elem=document.getElementById("kamenAlert");
            } else 
            {
                elem=document.getElementById("kamenAlert2");
            }
            kamenCounter++;
            elem.style.display="block";
            setTimeout(kamenCloseWindow,5000,elem);
            
        }

    }

   
    document.querySelector("#kamenCross").onclick = function(){
        document.getElementById("kamenFormSignUp").style.display="none";
        document.getElementById("wrapper").style.opacity = "1"
    }
}





/*

var str=  
'<div id="kamenFormSignUp">'+
    '<div id="kamenCross">X</div>'+
    '<form onkeypress="kamenCheckFields();" id="kamenform" onsubmit="return false">'+
        '<input type="name" id ="kamenName" placeholder="Name*" required onfocusout="ddNameValidation()">'+
        '<input type="email" id="kamenEmail" placeholder="E-mail*" required onfocusout="ddEmailValidation()">'+
        '<input type="telephone" id="kamenTelephone" placeholder="Telephone*" required onfocusout="ddTelephoneValidation()">'+
        '<input type="submit" class="button" id="kamenSubmit" disabled></div>'
    '</form>'+
'</div>'+
'<div id="kamenAlert" class="kamenAlertClass">Вы отправили форму</div>'+
'<div id="kamenAlert2" class="kamenAlertClass">Уже зарегистрированы</div>';
document.getElementById("secwrapper").innerHTML= str;*/