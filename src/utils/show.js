function show(top1, top2, top3) {
    var a = null
     a = setTimeout(() => {
        top1.style.opacity = 0;
        top2.style.opacity = 1;
        top3.style.opacity = 0;
        console.log("第二张图显示")
   
        clearTimeout(a)
      
        setTimeout(() => {
            top1.style.opacity = 0;
            top2.style.opacity = 0;
            top3.style.opacity = 1;
            console.log("第三张图显示");
            setTimeout(() => {
                top1.style.opacity = 1;
                top2.style.opacity = 0;
                top3.style.opacity = 0;
                console.log("第一张图显示")
                show(top1, top2, top3)
            }, 4000)
        }, 4000)
    }, 4000);

    console.log(a);
}


export default show