(function(){
    const nvitem = document.querySelectorAll('.nvitem')
    const nvbutton = document.querySelector('.nvimg')
    const navbar = document.querySelector('.navbar')
    
    nvbutton.addEventListener('click', ()=> {
        navbar.classList.toggle('nv-bg')
        nvitem.forEach(nvall => {
            nvall.classList.toggle('nv-open')
        });
    })
})()