<template>
  <div class="ability">
    <div class="background"></div>
    <div class="ability-title">软件平台<span style="color:#ef4f19">核心优势</span></div>
    <div class="top" :class="{ 'appear': textShow }">
      您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素
    </div>
    <div class="bottom">
      <div class="bottom-box" :class="{ 'toUp': isBoxToUp }">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp"
          alt="">
        <div class="title">实时沟通平台</div>
        <p>応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤</p>
      </div>
      <div style="margin:0 40px" class="bottom-box" :class="{ 'toUp': isBoxToUp }">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp"
          alt="">
        <div class="title">实时沟通平台</div>
        <p>応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤</p>
      </div>
      <div class="bottom-box" :class="{ 'toUp': isBoxToUp }">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp"
          alt="">
        <div class="title">实时沟通平台</div>
        <p>応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Ability",
  data() {
    return {
      isBoxToUp: false,
      textShow: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandle, true); // 监听 监听元素是否进入/移出可视区域
  },
  methods: {
    scrollHandle() {
      const offset = this.$el.getBoundingClientRect();
      // getBoundingClientRect返回元素的大小及其相对于视口的位置
      const offsetTop = offset.top;
      const offsetBottom = offset.bottom;
      // const offsetHeight = offset.height;
      // 进入可视区域
      // console.log(offsetTop,offsetBottom)
      if (offsetTop+200 <= window.innerHeight && offsetBottom >= 0) {
        // console.log('进入可视区域');
        this.textShow = true
        this.isBoxToUp = true
        let delayTime = -0.3
        let boxs = document.querySelectorAll('.bottom-box')
        boxs.forEach(item => {
          delayTime += 0.2
          item.style.animationDelay = delayTime + 's'
        })

      } else {
        // console.log('移出可视区域');
      }
    }

  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.scrollHandle, true);
  }
};
</script>

<style scoped>
.ability {
  position: absolute;
  top: 812px;
  left: 0;
  background-image: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS81NjcwYzRjNGQ5NmY1MDA4NmUyZWFiMWZmZDcyMzdlYS05MC53ZWJw.webp");
  background-position: center;
  background-size: cover;
  height: 712px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.background {
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(247, 247, 247, 0.7);
}

.ability-title {
  z-index: 15;
  font-size: 36px;
  color: #000;
  margin-bottom: 50px;
}

.top {
  z-index: 15;
  margin-bottom: 50px;
  font-family: '微软雅黑';
  color: #696969;
  font-size: 15px;
  opacity: 0;
}

.bottom {
  z-index: 15;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 200px;
}

.bottom-box {
  background-color: transparent;
  width: 100%;
  border-radius: 15px;
  border: 1px solid rgba(255, 181, 153, 1);
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
}

.toUp {
  animation: toUp 0.8s forwards;
}

.appear {
  animation: appear 2s forwards;
}

.bottom-box:hover {
  background-color: #fff;
  border: 1px solid rgb(239, 79, 25);
  ;
}

.bottom-box p {
  font-size: 13px;
  line-height: 2em;
}

.title {
  color: rgb(239, 79, 25);
  font-size: 20px;
  padding: 20px 0;
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

@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>