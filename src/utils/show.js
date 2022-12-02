
export default function(top1,top2,top3) {
    setTimeout(() => {
        top1.style.opacity = 0;
        top2.style.opacity = 1;
        top3.style.opacity = 0;
        console.log("第二张图显示");
        setTimeout(() => {
            top1.style.opacity = 0;
            top2.style.opacity = 0;
            top3.style.opacity = 1;
            console.log("第三张图显示");
            setTimeout(() => {
                top1.style.opacity = 1;
                top2.style.opacity = 0;
                top3.style.opacity = 0;
                console.log("第一张图显示");
            }, 3000)
        }, 3000)
    }, 3000);
}