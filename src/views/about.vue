<template>
    <div>
        <div class="about-banner">
            <div class="background"></div>
            <div class="about-title">
                <div style="font-size:36px;margin-bottom:40px">关于<span style="color:#ef4f19">我们</span></div>
                <p>您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素</p>
            </div>
        </div>
        <div class="about">
            <div class="about-middle">
                <div class="about-middle-left">
                    <img width="460" height="317"
                        src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8zOTUwZGVkNDY2MmM5ZTM4ODJhNzFiMTAxYjkzMzA2OC05MC53ZWJw.webp"
                        title="" data-title="aboutus-img3" src-img="" style="">
                </div>
                <div class="about-middle-right">
                    <div class="middle-intro">
                        <h6>企业概况</h6>
                        <p>这里可以简单的叙述公司的简介等，双击鼠标左键可以更改文字； 这里可以简单的叙述公司的简介等，双击鼠标左键可以更改文字。这里可以简单的叙述公司的简介等，双击鼠标左键可以更改文字。</p>
                    </div>
                    <div class="middle-intro">
                        <h6>企业概况</h6>
                        <p>这里可以简单的叙述公司的简介等，双击鼠标左键可以更改文字； 这里可以简单的叙述公司的简介等，双击鼠标左键可以更改文字。这里可以简单的叙述公司的简介等，双击鼠标左键可以更改文字。</p>
                    </div>
                </div>
            </div>
            <div class="our-team" ref="ourTeam">
                <div class="team-title">我们的团队</div>
                <div class="team-line"></div>
                <div class="team-title-text">青年是团队的核心</div>
                <div style="width:80%;">
                    <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
                        <!--必须的组件-->
                        <!--每页幻灯片使用swiper-slide标签-->
                        <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
                        <swiper-slide class="swiper_slide_item" :class="{ 'to-up': isToUp }">
                            <router-link to="/person">
                                <div class="left">
                                    <img src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xNDk3OTMyMjAwNTk0OGExYTg3YjlhYjQ5NDUtMjIweDMwMC05MC53ZWJw.webp"
                                        alt="acb0cd2316ff2a9e771b13be7c38bd50.png" description="" data-attach-id="18836"
                                        data-title="acb0cd2316ff2a9e771b13be7c38bd50.png" title="" src-img="" />
                                    <div class="left-name">
                                        <div class="left-name-name">Joeby Ragbe</div>
                                        <div class="left-name-work">ceo</div>
                                    </div>
                                </div>
                            </router-link>
                            <div class="right"><span class="intro-line"></span>请用一句话来概括人物特点</div>

                        </swiper-slide>
                        <swiper-slide class="swiper_slide_item">
                            <router-link to="/person">
                                <div class="left">
                                    <img src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xNDk3OTMyMjAwNTk0OGExYTg3YjlhYjQ5NDUtMjIweDMwMC05MC53ZWJw.webp"
                                        alt="acb0cd2316ff2a9e771b13be7c38bd50.png" description="" data-attach-id="18836"
                                        data-title="acb0cd2316ff2a9e771b13be7c38bd50.png" title="" src-img="" />
                                    <div class="left-name">
                                        <div class="left-name-name">Joeby Ragbe</div>
                                        <div class="left-name-work">ceo</div>
                                    </div>
                                </div>
                            </router-link>
                            <div class="right"><span class="intro-line"></span>请用一句话来概括人物特点</div>

                        </swiper-slide>
                        <swiper-slide class="swiper_slide_item">
                            <router-link to="/person">
                                <div class="left">
                                    <img src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xNDk3OTMyMjAwNTk0OGExYTg3YjlhYjQ5NDUtMjIweDMwMC05MC53ZWJw.webp"
                                        alt="acb0cd2316ff2a9e771b13be7c38bd50.png" description="" data-attach-id="18836"
                                        data-title="acb0cd2316ff2a9e771b13be7c38bd50.png" title="" src-img="" />
                                    <div class="left-name">
                                        <div class="left-name-name">Joeby Ragbe</div>
                                        <div class="left-name-work">ceo</div>
                                    </div>
                                </div>
                            </router-link>
                            <div class="right"><span class="intro-line"></span>请用一句话来概括人物特点</div>
                        </swiper-slide>

                        <!-- 可选的控件 -->
                        <!--分页器-->
                        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                        <!--滚动条-->
                        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
                        <!--前进后退按钮-->
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
            </div>
        </div>
        <div class="advert-po">
            <Advert></Advert>
        </div>
        <div class="footer-po">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Advert from '../components/advert.vue'
import Footer from '../components/Footer.vue'
export default {
    data() {
        return {
            intro: "这是段介绍哦",
            currentindex: "",
            isToUp: false,
            //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
            swiperOption: {
                // 前进后退按钮
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                //幻灯片播放配置项
                loop: true, //是否循环播放
                speed: 1000, // 发生页面切换动画时，动画的切换速度
                // autoplay: {
                //   delay: 2000, // 幻灯片停留时间
                //   disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
                //   stopOnLastSlide: true, // 切换到最后一个slide时是否停止自动切换。（loop模式下无效）。
                // },
                on: {
                    slideChangeTransitionEnd: function () {
                        console.log(this.activeIndex); //每次切换结束时，在控制台打印现在是第几个slide
                    },
                },
            },
        };
    },
    components: {
        Advert, Footer
    },
    //计算属性
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    //设置自定义的按钮，点击后将前往目标也页
    methods: {
        to(index) {
            this.swiper.slideTo(index);
            console.log(this.swiper);
            this.currentindex = index;
        },
        scrollHandle() {
            const offset = this.$refs.ourTeam.getBoundingClientRect();
            // getBoundingClientRect返回元素的大小及其相对于视口的位置
            const offsetTop = offset.top;
            const offsetBottom = offset.bottom;
            // const offsetHeight = offset.height;
            // 进入可视区域
            // console.log(offsetTop,offsetBottom)
            if (offsetTop + 200 <= window.innerHeight && offsetBottom >= 0) {
                // console.log('进入可视区域');
                this.isToUp = true
            } else {
                // console.log('移出可视区域');
            }
        }
    },
    mounted() {
        window.addEventListener("scroll", this.scrollHandle, true); // 监听 监听元素是否进入/移出可视区域
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrollHandle, true);
    }

}
</script>

<style scoped>
.about {
    position: absolute;
    top: 360px;
    left: 0;
    height: 1180px;
    width: 100%;
    background-color: rgba(247, 247, 247, 0.7);
}

.about-banner {
    position: relative;
    position: absolute;
    top: 67px;
    background-image: url('https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wMmUyNTdmOTdlODkyYWY5MjY3Y2UwZGQ1YTA3N2I2Ni05MC53ZWJw.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: 0 0;
    height: 293px;
    z-index: 10;
    width: 100%;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(239, 239, 239, 0.9);
}

.about-title {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #000;
}

.about-middle {
    background-color: #fff;
    height: 557px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 200px;
    padding-right: 100px;
    padding-top: 100px;
}

.about-middle-right {
    color: #696969;
    font-size: 13px;
    width: 600px
}



.about-middle-right h6 {
    font-size: 14px;
    font-weight: 400;
    margin: 30px 0;
}

.our-team {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 820px;
    overflow: hidden;
}

.team-title {
    font-size: 32px;
    color: #000;
}

.team-line {
    width: 60px;
    height: 2px;
    background-color: #ef4f19;
    margin-top: 15px;
    margin-bottom: 10px;
}

.team-title-text {
    font-size: 16px;
    color: #808080;
    margin-bottom: 60px;
}



#mySwiper {
    background-color: #fff;
    overflow: visible;
}

#mySwiper /deep/ .swiper-pagination-bullet-custom.swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
    background-color: #ef4f19;
}

/* 幻灯片样式 */
.swiper-slide.swiper_slide_item {
    height: 300px;
    background-color: transparent;
    display: flex;
    /* align-items: center; */
    padding: 0 150px;
    z-index: 10;
}


.swiper-button-prev,
.swiper-button-next {
    background-color: #6d6a6a;
    color: #fff;
    width: 40px;
    height: 40px;
}

.swiper-button-prev {
    left: 0;
}

.swiper-button-next {
    right: 0;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 15px !important;
    font-weight: 700;
}

.left {
    width: 230px;
    height: 100%;
}

.left img {
    width: 100%;
    height: 108%;
    margin-top: -10%;
}

.left-name {
    width: 230px;
    background-color: #e8e8e8;
    text-align: center;
    padding: 20px 0;
}

.left-name-name {
    font-size: 16px;
    color: #444;
}

.left-name-work {
    font-size: 12px;
    color: #7e7e7e;
}

.right {
    font-size: 12px;
    color: #000;
    margin-top: -100px;
    display: flex;
    align-items: center;
}

.intro-line {
    width: 0px;
    background-color: rgb(121, 119, 119);
    height: 0.5px;
    display: inline-block;
    margin-right: 30px;
    transition: all 0.6s;
}

.right {
    z-index: -1;
    transition: all 0.6s;
}

.right:hover .intro-line {
    width: 80px;
    margin-right: 20px;
}

.footer-po {
    position: absolute;
    top: 1904px;
    width: 100%;
    height: 347px;
}

.advert-po {
    position: absolute;
    top: 1744px;
    width: 100%;
    height: 160px;
}

.about-middle-left img {
    animation: rotate 1s;
}

.to-up {
    animation: toUp 1s;
}

@keyframes rotate {
    0% {
        transform: rotate(-360deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

@keyframes toUp {
    0% {
        transform: translateY(1000px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>