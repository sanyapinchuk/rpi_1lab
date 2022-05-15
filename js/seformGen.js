AddToForm();
var kamenCounter = 0;
function AddToForm()
{
    var newDiv = document.createElement("div");
    newDiv.id = "kamenFormSignUp";

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
            if (localStorage.getItem('kamenCounter') == null) {
                elem=document.getElementById("kamenAlert");
                localStorage.setItem('kamenCounter',"1");
            } 
            else {
                elem=document.getElementById("kamenAlert2");
            }
            kamenCounter++;
            elem.style.display="block";
            setTimeout(kamenCloseWindow,5000,elem);
            
        }

    }

   
    document.querySelector("#kamenCross").onclick = function(){
        document.getElementById("secwrapper").style.display = "none";
        localStorage.setItem("kamenFormShow",false);
        // document.getElementById("kamenFormSignUp").style.display="none";
        document.getElementById("wrapper").style.opacity = "1"
    }
    if (localStorage.getItem('kamenFormShow')=="true") {
        document.getElementById("secwrapper").style.display = "block";
        document.getElementById("wrapper").style.opacity = "0.2"
    } else {
        document.getElementById("secwrapper").style.display = "none";
    }

    //localStorage.setItem("kamenFormShow","false");
}
