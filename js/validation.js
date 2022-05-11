function validate() {
    if (username.value == ""){
        elem.setAttribute('disabled',true);
    } else alert(form.elements.name.ge);
}
const form = document.forms.submitform;

var a = form.elements.name;


a.addEventListener('change', ()=>{
         validate();
});
// var c = 0;
// username.addEventListener('change', ()=>{
//     validate();
// });

// elem.addEventListener('click',()=>{
//     alert('qwe');
// })

