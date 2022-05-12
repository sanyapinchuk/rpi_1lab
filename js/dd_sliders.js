var circleArr=document.getElementsByClassName("circleSmall");
console.log(localStorage.getItem('counter'));
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

function ddTimer()
{
    setInterval(ddShowSliders,4000);
}




