(function(){
    const piccat = document.querySelectorAll('.piccat');
    const lightbox = document.querySelector('.lightbox');
    const imgshow = document.querySelector('.img-show');
    const close = document.querySelector('.close');

    piccat.forEach(image => {
        image.addEventListener('click', ()=>{
            addimg(image.getAttribute('src'));
        })
    });

    const addimg = (srcimg)=>{
        lightbox.classList.toggle('open-box');
        imgshow.src = srcimg;
    }

    close.addEventListener('click', ()=>{
        lightbox.classList.toggle('open-box')
    })
})()