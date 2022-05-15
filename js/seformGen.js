var str=  '<div id="kamenFormSignUp">'+
'<div id="kamenCross">X</div>'+
'<form id="kamenform" onsubmit="return false">'+
'<input type="name" id ="kamenName" placeholder="Name*">'+
'<input type="email" id="kamenEmail" placeholder="E-mail*">'+
'<input type="telephone" id="kamenTelephone" placeholder="Telephone*">'+
'<input type="submit" class="button" id="kamenSubmit"></div>'
'</form>'+
'</div>'+
'<div id="kamenAlert" class="kamenAlertClass">Вы отправили форму</div>'+
'<div id="kamenAlert2" class="kamenAlertClass">Уже зарегистрированы</div>';
document.getElementById("secwrapper").innerHTML= str;