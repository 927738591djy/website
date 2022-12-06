<template>
    <div>
        <div class="person">
            <div class="top">
                <div class="name">Joeby Ragpa</div>
                <div class="work">CEO</div>
                <div class="line"></div>
            </div>
            <div class="bottom">
                <div class="left">
                    <img src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xNDk3OTMyMjAwNTk0OGExYTg3YjlhYjQ5NDUtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp"
                        alt="">
                </div>
                <div class="right">
                    <div class="title">获奖经历</div>
                    <div class="pra">
                        <p>2012 - 第23届波兰华沙国际海报双年展入选 2 件</p>
                        <p>2011 - 环球设计大奖 2 项铜奖</p>
                        <p>2011 - 3 项作品荣获日本TDC东京字体指导俱乐部奖</p>
                        <p>2011 - 台湾国际平面设计竞赛优异奖</p>
                        <p>2009 - 香港设计师协会亚洲设计大奖互动类优异奖</p>
                    </div>
                    <div class="title">个人简介</div>
                    <div class="pra">
                        <p>每一个单独的建筑体以一种全新的观念来设计建筑的结构，结构清晰的反映了建筑的观念。每个单独的建筑体各自成一体，当它们放置在各自恰切的位置的同时又产生了新的世界，体现了建筑生命的自足完整。造园意味着构造一个内心世界，这个内心世界与人类的实体世界进行沟通依靠的是具有生命力的、永恒性的一种异乎寻常的力量。
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-po">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
    name: 'Person',
    components: {
        Footer
    }
}
</script>

<style scoped>
.person {
    position: absolute;
    top: 67px;
    width: 100%;
    height: 827px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.top {
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
    align-items: center;
    margin-bottom: 80px;
    animation: appear 1s;
}

.line {
    background-color: #ef4f19;
    height: 4px;
    width: 33%;
    margin-top: 20px;
}

.name {
    font-size: 32px;
    color: #333;
}

.work {
    font-size: 16px;
    color: #848484;
}

.left {
    margin-left: 200px;
    margin-right: 100px;
}

.left img {
    width: 400px;
    height: 400px;
}

.bottom {
    display: flex;
}

.title {
    font-size: 16px;
    color: #383838;
    border-bottom: 1px solid rgb(214, 214, 214);
    padding-bottom: 20px;
    flex: 1;
}

.right p {
    font-size: 14px;
    color: #383838;
    line-height: 2em;
    padding-right: 150px;
}

.pra {
    padding: 50px 0;

}

.footer-po {
    position: absolute;
    top: 894px;
    width: 100%;
    height: 347px;
}

@keyframes appear {
    0% {
        transform: translateY(-20px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>