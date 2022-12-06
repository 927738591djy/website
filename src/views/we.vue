<template>
  <div class="we">
    <div class="huise"></div>
    <!--主体为swiper标签-->
    <!--属性 :options 绑定的是data中设置的swiper配置项-->
    <!--属性 ref 用于获取该dom元素，在计算属性computed中将被调用-->
    <!--属性 id 为swiper最外层容器设置css样式-->
    <div class="big-title">客户如何评价我们</div>
    <swiper :options="swiperOption" ref="mySwiper" id="mySwiper">
      <!--必须的组件-->
      <!--每页幻灯片使用swiper-slide标签-->
      <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
      <swiper-slide class="swiper_slide_item">
        <div class="left">
          <img
            class="front_image vc_box_circle ag_image"
            src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xNDk3OTMyMTk5NTk0OGExYTc5ZWVlYTYzNDctMjAweDIwMC05MC53ZWJw.webp"
            alt="acb0cd2316ff2a9e771b13be7c38bd50.png"
            description=""
            data-attach-id="18836"
            data-title="acb0cd2316ff2a9e771b13be7c38bd50.png"
            title=""
            src-img=""
            style="border-radius: 50%"
          />
        </div>
        <div class="right">
          <p>
            起飞页是响应式建站专家，拥有全球最领先的屏幕界面智能识别技术，实现所有建站功能组件在多种屏幕下的完美呈现，真正让您的桌面/平板/手机3个网站同步生成，还可连接微信公众平台，创建您的微站。当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，
            还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。
          </p>
          <div class="right-bottom">
            <div class="intro">
              <div class="name">孙阳</div>
              <div class="work">X企业CEO,联合创始人</div>
            </div>
            <div class="logo">
              <img
                alt=""
                src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9jYmNiNzBkODY0OTUyMGZkZDUyYTllMGEyNjM1MGI5YS5wbmc_p_p100_p_2FYXR0YWNobWVudF9pZD0xODE1Mw_p_p100_p_3D_p_p100_p_3D.png"
                style="vertical-align: middle"
                title=""
                width="122"
                height="19"
              />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper_slide_item">
        <div class="left">
          <img
            class="front_image vc_box_circle ag_image"
            src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xNDk3OTMyMTk5NTk0OGExYTc5ZWVlYTYzNDctMjAweDIwMC05MC53ZWJw.webp"
            alt="acb0cd2316ff2a9e771b13be7c38bd50.png"
            description=""
            data-attach-id="18836"
            data-title="acb0cd2316ff2a9e771b13be7c38bd50.png"
            title=""
            src-img=""
            style="border-radius: 50%"
          />
        </div>
        <div class="right">
          <p>
            起飞页是响应式建站专家，拥有全球最领先的屏幕界面智能识别技术，实现所有建站功能组件在多种屏幕下的完美呈现，真正让您的桌面/平板/手机3个网站同步生成，还可连接微信公众平台，创建您的微站。当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，
            还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。
          </p>
          <div class="right-bottom">
            <div class="intro">
              <div class="name">孙阳</div>
              <div class="work">X企业CEO,联合创始人</div>
            </div>
            <div class="logo">
              <img
                alt=""
                src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9jYmNiNzBkODY0OTUyMGZkZDUyYTllMGEyNjM1MGI5YS5wbmc_p_p100_p_2FYXR0YWNobWVudF9pZD0xODE1Mw_p_p100_p_3D_p_p100_p_3D.png"
                style="vertical-align: middle"
                title=""
                width="122"
                height="19"
              />
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper_slide_item">
        <div class="left">
          <img
            class="front_image vc_box_circle ag_image"
            src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xNDk3OTMyMTk5NTk0OGExYTc5ZWVlYTYzNDctMjAweDIwMC05MC53ZWJw.webp"
            alt="acb0cd2316ff2a9e771b13be7c38bd50.png"
            description=""
            data-attach-id="18836"
            data-title="acb0cd2316ff2a9e771b13be7c38bd50.png"
            title=""
            src-img=""
            style="border-radius: 50%"
          />
        </div>
        <div class="right">
          <p>
            起飞页是响应式建站专家，拥有全球最领先的屏幕界面智能识别技术，实现所有建站功能组件在多种屏幕下的完美呈现，真正让您的桌面/平板/手机3个网站同步生成，还可连接微信公众平台，创建您的微站。当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户，
            还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。
          </p>
          <div class="right-bottom">
            <div class="intro">
              <div class="name">孙阳</div>
              <div class="work">X企业CEO,联合创始人</div>
            </div>
            <div class="logo">
              <img
                alt=""
                src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9jYmNiNzBkODY0OTUyMGZkZDUyYTllMGEyNjM1MGI5YS5wbmc_p_p100_p_2FYXR0YWNobWVudF9pZD0xODE1Mw_p_p100_p_3D_p_p100_p_3D.png"
                style="vertical-align: middle"
                title=""
                width="122"
                height="19"
              />
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- 可选的控件 -->
      <!--分页器-->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--滚动条-->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      <!--前进后退按钮-->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <!--配置自定义的页面跳转按钮，to(page)为自定义方法，其内调用了swiper的内置方法-->
    <!-- <div class="fenye">
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
    </div> -->
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
          //type: "bullets" | "progressbar" | "fraction", //小圆点|进度条|数字页码
          dynamicBullets: true, //动态小圆点(type:'bullets'时)
          //自定义分页器，需设置样式
          renderBullet(index, className) {
            return `<span class="${className} swiper-pagination-bullet-custom">${
              index + 1
            }</span>`;
          },
        },

        // 前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

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
            //console.log(this.activeIndex); //每次切换结束时，在控制台打印现在是第几个slide
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
.we {
  position: relative;
  position: absolute;
  top: 2152px;
  width: 100%;
  height: 586px;
  background-image: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wMmUyNTdmOTdlODkyYWY5MjY3Y2UwZGQ1YTA3N2I2Ni05MC53ZWJw.webp");
  background-position: cover;
  background-repeat: no-repeat;
  border: 1px solid #eaeaea;
}
.huise {
  background-color: rgba(249, 249, 249, 0.9);
  position: absoulte;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.big-title {
  color: #ef4f19;
  font-size: 34px;
  position: absolute;
  left: 50%;
  top: 150px;
  transform: translateX(-50%);
  width: 92%;
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 3px solid #eaeaea;
}
#mySwiper {
  position: absolute;
  top: 280px;
  left: 50%;
  width: 93%;
  transform: translateX(-50%);
  background-color: transparent;
}
#mySwiper /deep/ .swiper-pagination-bullet-custom.swiper-pagination-bullet {
  width: 10px !important;
  height: 10px !important;
  background-color: #ef4f19;
}

/* 幻灯片样式 */
.swiper-slide.swiper_slide_item {
  height: 286px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  z-index: 10;
}
.right {
  margin-left: 100px;
}
.right p {
  font-size: 13px;
  color: rgb(128, 128, 128);
  line-height: 1.8em;
}
.right-bottom {
  padding: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  font-size: 25px;
  color: #696969;
  margin-bottom: 8px;
}
.work {
  color: #ef4f19;
}
.swiper-button-prev,
.swiper-button-next {
  background-color: #cecece;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 5px;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 15px !important;
  font-weight: 700;
}
</style>