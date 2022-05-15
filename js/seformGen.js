var str=  '<div id="kamenFormSignUp">'+
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
document.getElementById("secwrapper").innerHTML= str;