const nav = document.querySelector('#nav');

fetch('/nav.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})