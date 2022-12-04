<template>
  <div>
    <div class="price-image">
      <div class="title">互联网时代的<span style="color:#ef4f19">工作态度</span></div>
      <p class="big-intro">
        让企业更高效，让工作更简单，提供企业沟通、协作、办公、管理所需的一切方式
      </p>
      <div class="boxs">
        <div class="box">
          <div class="box-top">
            <h6>个人版</h6>
            <p>点击编辑按钮修改套餐描述</p>
          </div>
          <div class="box-bottom">
            <div class="price-title">
              $ <span style="font-size: 40px; font-weight: 600">999</span>元/年
            </div>
            <div class="intro">功能特性和描述一</div>
            <div class="intro">功能特性和描述一</div>
            <button>免费使用版本</button>
            <p>或立即购买</p>
          </div>
        </div>
        <div class="box middle-box">
          <div class="box-top middle-box-top">
            <h6>个人版</h6>
            <p>点击编辑按钮修改套餐描述</p>
          </div>
          <div class="box-bottom">
            <div class="price-title">
              $ <span style="font-size: 40px; font-weight: 600">999</span>元/年
            </div>
            <div class="intro">功能特性和描述一</div>
            <div class="intro">功能特性和描述一</div>
            <button>免费使用版本</button>
            <p>或立即购买</p>
          </div>
        </div>
        <div class="box">
          <div class="box-top">
            <h6>个人版</h6>
            <p>点击编辑按钮修改套餐描述</p>
          </div>
          <div class="box-bottom">
            <div class="price-title">
              $ <span style="font-size: 40px; font-weight: 600">999</span>元/年
            </div>
            <div class="intro">功能特性和描述一</div>
            <div class="intro">功能特性和描述一</div>
            <button>免费使用版本</button>
            <p>或立即购买</p>
          </div>
        </div>
      </div>
    </div>
    <div class="advert-po"><Advert></Advert></div>
    <div class="footer-po"><Footer></Footer></div>
  </div>
</template>

<script>
import Advert from "../components/advert.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Price",
  components: {
    Advert,
    Footer,
  },
};
</script>

<style scoped>
.price-image {
  color: #fff;
  position: absolute;
  top: 67px;
  left: 0;
  height: 842px;
  width: 100%;
  background-image: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9jOTNjM2FjZjQ1MzM5YTgzZDU0YjdmMTY1NzY4YmE5NC05MC53ZWJw.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.footer-po {
  position: absolute;
  top: 1069px;
  width: 100%;
  height: 347px;
}
.advert-po {
  position: absolute;
  top: 909px;
  width: 100%;
  height: 160px;
}
.title {
  font-size: 36px;
  margin: 30px 0;
}
.big-intro{
    margin: 50px 0;
  font-size: 18px;
}
.box {
  height: 471px;
  width: 309px;
  background-color: #fff;
}
.box-top {
  background-color: #c4c4c4;
  text-align: center;
}
.box-top h6 {
  font-size: 26px;
  font-weight: 500;
  padding-top: 30px;
  padding-bottom: 10px;
}
.box-top p {
  padding-bottom: 20px;
}
.box-bottom {
  color: #000;
  background-color: #fff;
  text-align: center;
}
.price-title {
  font-size: 24px;
  padding: 30px 0;
}
.intro {
  padding: 20px 0;
}
.box-bottom button {
  background-color: #fff;
  font-size: 18px;
  color: #ef4f19;
  border: 1px solid #ef4f19;
  padding: 10px 60px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}
.box-bottom p {
  font-size: 14px;
  color: #ef4f19;
}
.boxs{
    display: flex;
    align-items: flex-end;
}
.middle-box-top{
    background-color: #ef4f19;
}
.middle-box{
    height: 516px;
    margin: 0 30px;
}
</style>