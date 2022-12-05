<template>
    <div>
        <Declaration title="公司" red-title="新闻" :intro="intro"></Declaration>
        <div class="news">
            <div class="news-box">
                <div v-for="item, index in 6" :key="index" class="news-item-box">
                    <div class="news-item-intro">
                        <div class="news-item-intro-left">
                            03-09
                            <p>2017</p>
                        </div>
                        <div class="news-item-intro-right">
                            <h6>云通信pass上线半年可盈利，受资本市场热捧</h6>
                            <p>作为设计师，您有什么特长嘛</p>
                            <p>我会一些手绘</p>
                        </div>
                    </div>
                    <div class="news-item-icon">
                        <img src="../assets/img/right-arrow.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-po"><Footer></Footer></div>
    </div>
</template>

<script>
import Declaration from '../components/declaration.vue'
import Footer from '../components/Footer.vue'
export default {
    data() {
        return {
            intro: "您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素"
        }
    },
    name: 'Names',
    components: {
        Declaration,Footer
    }
}
</script>

<style>
.news {
    position: absolute;
    top: 314px;
    left: 0;
    height: 1180px;
    width: 100%;
    background-color: rgba(247, 247, 247, 0.7);
    display: flex;
    justify-content: center;
}

.declaration {
    background-image: url('https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8yMjUxMzY0NWJmMTdkZWNmZGZjNWRjNjYyMDFiOTRmMy05MC53ZWJw.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: 0 34%;
    height: 247px;
}
.declaration-intro{
    /* color: #fff; */
}

.news-box {
    background-color: #fff;
    width: 1024px;
    height: 1039px;
    margin-top: 20px;
    padding: 50px;
}

.news-item-box {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    padding-left: 80px;
    transition: all 0.6s;
    animation: up 1s;
}

.news-item-intro {
    display: flex;
    align-items: center;
}

.news-item-intro-left {
    color: #dcdcdc;
    font-size: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 1;
    margin-right: 60px;
}

.news-item-intro-left p {
    font-size: 16px;
}

.news-item-icon {
    width: 20px;
    height: 20px;
}

.news-item-icon img {
    width: 100%;
    height: 100%;
}

.news-item-intro-right h6 {
    margin-bottom: 10px;
    color: #000;
    font-size: 16spx;
    font-weight: 400;
}

.news-item-intro-right p {
    padding: 5px 0;
    font-size: 13px;
    ;
}

.news-item-box:hover * {
    color: #fff;
}

.news-item-box:hover {
    background-color: #ef4f19;
    padding-left: 20px;
    padding-right: 70px;
}

@keyframes up {
    0% {
        transform: translateY(1000px);
    }

    100% {
        transform: translateY(0);
    }
}
.footer-po{
  position: absolute;
  top: 1494px;
  width: 100%;
  height: 347px;
}
</style>