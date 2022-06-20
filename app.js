const open = document.getElementById('open');
const close = document.getElementById('close');
const menu = document.querySelector('.responsive-nav');

open.addEventListener("click", ()=>{
    menu.style.opacity="1";
    menu.style.pointerEvents='auto';
    gsap.fromTo(menu,{
        duration:1.5,
        opacity:0,
        x:100,
        ease:Power2.easeOut
    },{
        opacity:1,
        x:0,
    })
    console.log('open')
})
close.addEventListener("click", ()=>{
    menu.style.opacity="0";
    menu.style.pointerEvents='none'
    gsap.fromTo(menu,{
        duration:1.5,
        opacity:1,
        x:0,
        
    },{
        opacity:0,
        x:100,
        ease:Power2.easeOut
    })
})