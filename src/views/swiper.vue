<template>
  <div class="app-container">
    <!--主体为swiper标签-->
    <!--属性 :options 绑定的是data中设置的swiper配置项-->
    <!--属性 ref 用于获取该dom元素，在计算属性computed中将被调用-->
    <!--属性 id 为swiper最外层容器设置css样式-->
    <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
      <!--必须的组件-->
      <!--每页幻灯片使用swiper-slide标签-->
      <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
      <swiper-slide class="swiper_slide_item">
        <div class="left">
          <div class="title">为什么要选择<span>我们的服务</span></div>
          <p>由专业客服提供人工服务负责疑难问题和故障受理，利用远程视频工具，提供协助，帮助客户进行调试、解决故障；由技术支持工程师，负责问题解答、需求受理及故障受理</p>
          <ul>
            <li>
              <img src="../assets/img/select_box.png">
              智能识别技术
            </li>
            <li>
              <img src="../assets/img/select_box.png">
              智能识别技术
            </li>
            <li>
              <img src="../assets/img/select_box.png">
              智能识别技术
            </li>
          </ul>
          <div class="more">了解更多</div>
        </div>
        <div class="right">
          <img width="600" height="300" src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kYjU1NWFmYzgzZjE3YjYyNzM0MjFjMDJmODRlZDQ4Ny05MC53ZWJw.webp" class="front_image  attachment-full" alt="area_0201" title="" description="" data-title="area_0201" src-img="" style="">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper_slide_item">
        <div class="left">
          <div class="title">为什么要选择<span>我们的服务</span></div>
          <p>由专业客服提供人工服务负责疑难问题和故障受理，利用远程视频工具，提供协助，帮助客户进行调试、解决故障；由技术支持工程师，负责问题解答、需求受理及故障受理</p>
          <ul>
            <li>
              <img src="../assets/img/select_box.png">
              智能识别技术
            </li>
            <li>
              <img src="../assets/img/select_box.png">
              智能识别技术
            </li>
            <li>
              <img src="../assets/img/select_box.png">
              智能识别技术
            </li>
          </ul>
          <div class="more">了解更多</div>
        </div>
        <div class="right">
          <img width="600" height="300" src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kYjU1NWFmYzgzZjE3YjYyNzM0MjFjMDJmODRlZDQ4Ny05MC53ZWJw.webp" class="front_image  attachment-full" alt="area_0201" title="" description="" data-title="area_0201" src-img="" style="">
        </div>
      </swiper-slide>
      <swiper-slide class="swiper_slide_item">
        <div class="left">
          <div class="title">为什么要选择<span>我们的服务</span></div>
          <p>由专业客服提供人工服务负责疑难问题和故障受理，利用远程视频工具，提供协助，帮助客户进行调试、解决故障；由技术支持工程师，负责问题解答、需求受理及故障受理</p>
          <ul>
            <li>
              <img src="../assets/img/select_box.png">
              智能识别技术
            </li>
            <li>
              <img src="../assets/img/select_box.png">
              智能识别技术
            </li>
            <li>
              <img src="../assets/img/select_box.png">
              智能识别技术
            </li>
          </ul>
          <div class="more">了解更多</div>
        </div>
        <div class="right">
          <img width="600" height="300" src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kYjU1NWFmYzgzZjE3YjYyNzM0MjFjMDJmODRlZDQ4Ny05MC53ZWJw.webp" class="front_image  attachment-full" alt="area_0201" title="" description="" data-title="area_0201" src-img="" style="">
        </div>
      </swiper-slide>

      <!-- 可选的控件 -->
      <!--分页器-->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--滚动条-->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
      <!--前进后退按钮-->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>

    <!--配置自定义的页面跳转按钮，to(page)为自定义方法，其内调用了swiper的内置方法-->
    <div class="fenye">
      <button
        :class="currentindex == 1 ? 'active' : 'button'"
        @mouseenter="to(1)"
      >
        自助建站
      </button>
      <button
        :class="currentindex == 2 ? 'active' : 'button'"
        @mouseenter="to(2)"
      >
        定制外包
      </button>
      <button
        :class="currentindex == 3 ? 'active' : 'button'"
        @mouseenter="to(3)"
      >
        项目开发
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      currentindex: "",
      //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
      swiperOption: {
        //分页器配置项
        pagination: {
          el: ".swiper-pagination", //分页器的类名
          clickable: true, // 点击分页器跳切换到相应的幻灯片
          type: "bullets" | "progressbar" | "fraction", //小圆点|进度条|数字页码
          dynamicBullets: true, //动态小圆点(type:'bullets'时)
          //自定义分页器，需设置样式
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${
              index + 1
            }</span>`;
          },
        },

        //前进后退按钮
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },

        //滚动条
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
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
  },
};
</script>


<style scoped>
.app-container {
  position: relative;
  position: absolute;
  top: 1525px;
  width: 100%;
  height: 662px;
  background-color: pink;
}
#mySwiper {
  background-color: #f7f7f7b3;
}
#mySwiper /deep/ .swiper-pagination-bullet-custom.swiper-pagination-bullet {
  /* width: 15px !important;
    height: 15px !important; */
  background-color: pink;
}
.button {
  font-family: 微软雅黑;
  font-size: 15px;
  /* background-color: #ef4f19; */
  background-color: #a8a8a8;
  color: #ffffff;
  padding: 12px 40px;
  border: 0;
  border-radius: 30px;
  margin: 0 20px;
}
.active {
  font-family: 微软雅黑;
  font-size: 15px;
  background-color: #ef4f19;
  color: #ffffff;
  padding: 12px 40px;
  border: 0;
  border-radius: 30px;
  margin: 0 20px;
}
.fenye{
  position: absolute;
  top:100px;
  left:50%;
  z-index: 100;
  transform: translateX(-50%);
}
/* 幻灯片样式 */
.swiper-slide.swiper_slide_item {
  height: 662px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 0 100px;
  padding-top:100px;
}
.title{
  font-size: 30px;
  line-height: 100px;
  color:#000;
}
.title span{
  color: #ef4f19;
}
.swiper-slide.swiper_slide_item  p{
  font-size: 15px;
  color:#808080;
  margin:20px 0;
  line-height: 1.5em;
}
.swiper-slide.swiper_slide_item  ul li {
  padding: 8px;
  font-size: 15px;
  color:#808080;
  display: flex;
  align-items: center;
  font-family:'微软雅黑'
}
.swiper-slide.swiper_slide_item  ul li img{
  width: 18px;
  height: 18px;
  margin-right:5px;
}
.more{
  background-color: #ef4f19;
  width: 180px;
  height:45px;
  font-family:'微软雅黑';
  color:#fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 15px;
  transition: all 0.4s;
}
.more:hover{
  background-color: #fff;
  color:#ef4f19;
  border: 1px solid #ef4f19;
}
</style>