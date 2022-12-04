<template>
  <div>
    <div class="service">
      <div class="top-title">
        软件平台<span style="color: #ef4f19">核心优势</span>
      </div>
      <div class="intro">
        您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素
      </div>
    </div>
    <div class="middle">
      <div class="middle-box">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp"
          alt=""
        />
        <div  class="title">实时沟通平台</div>
        <p >
          応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤
        </p>
      </div>
      <div class="middle-box">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp"
          alt=""
        />
        <div  class="title">实时沟通平台</div>
        <p >
          応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤
        </p>
      </div>
      <div class="middle-box">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp"
          alt=""
        />
        <div  class="title">实时沟通平台</div>
        <p >
          応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤
        </p>
      </div>
      <div class="middle-box">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp"
          alt=""
        />
        <div  class="title">实时沟通平台</div>
        <p >
          応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤
        </p>
      </div>
    </div>
    <div class="swiper"><Swiper></Swiper></div>
    <div class="footer-po"><Footer></Footer></div>
  </div>
</template>

<script>
import Swiper from './swiper.vue'
import Footer from '../components/Footer.vue'
export default {
  name: "Service",
  components:{
    Swiper,Footer
  }
};
</script>

<style scoped>
.service {
  position: absolute;
  top: 67px;
  left: 0;
  height: 197px;
  background: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9jNTJhNGU3MmZlNGEzYTRmZjgyMGIxN2JkYzkyYzhlMS05MC53ZWJw.webp");
  background-position: center;
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.top-title {
  color: #000;
  font-size: 36px;
  line-height: 100px;
}
.intro {
  font-size: 16px;
  color: #fff;
}
.middle {
  position: absolute;
  top: 264px;
  left: 0;
  height: 755px;
  width: 100%;
  padding: 100px 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

}
.middle-box {
  width: 40%;
  background-color: transparent;
  border-radius: 15px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.title {
  color: rgb(239, 79, 25);
  font-size: 20px;
  padding: 20px 0;
}
.swiper{
  position: absolute;
  top:1019px;
  width: 100%;
  height: 662px;
}
.footer-po{
  position: absolute;
  top: 1681px;
  width: 100%;
  height: 347px;
}
</style>