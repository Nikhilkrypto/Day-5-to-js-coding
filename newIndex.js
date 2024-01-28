const button=document.querySelector('.btn');
const randomColor=()=>{
    let val="0123456789ABCDEF";
    let cal='#';
    for(let i =0;i<6;i++)
    {
        cal=cal+val[Math.floor(Math.random()*16)];
    }
    return cal;
}
button.addEventListener('click',()=>{
    console.log(randomColor());
    document.body.style.backgroundColor=`${randomColor()}`;
})
