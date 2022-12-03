<template>
  <div class="ability">
    <div class="background"></div>
    <div class="top">
      您可以双击这里或者点击编辑按钮来修改内容，您还可以添加图标按钮图片等常用元素
    </div>
    <div class="bottom">
        <div class="bottom-box">
            <img src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp" alt="">
            <div class="title">实时沟通平台</div>
            <p>応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤</p>
        </div>
        <div style="margin:0 40px" class="bottom-box">
            <img src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp" alt="">
            <div class="title">实时沟通平台</div>
            <p>応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤</p>
        </div>
        <div class="bottom-box">
            <img src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC81NTg2ZmNlYjkxNDg5NDhjMWY5ODk4NDgwM2VhZTI3Mi0xNDB4MTE4LTkwLndlYnA_p_p100_p_3D.webp" alt="">
            <div class="title">实时沟通平台</div>
            <p>応损捠捡换换攴朰朲朳枛朸桹，夲夳夵壱売壳圢圦圧圩圪囡団囤囥咍咎壱売壳圢圤</p>
        </div>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "Ability",
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
  height: 100%;
  width: 100%;
  background-color: rgba(247, 247, 247, 0.7);
}
.top{
    z-index:15;
    margin-bottom:50px;
    font-family: '微软雅黑';
    color:#696969;
    font-size: 15px;
}
.bottom{
    z-index:15;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0 150px;
}
.bottom-box{
    background-color: transparent;
    width:100%;border-radius:15px;
    border:1px solid rgba(255,181,153,1);
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.bottom-box:hover{
    background-color: #fff;
    border:1px solid rgb(239, 79, 25);;
}
.title{
    color: rgb(239, 79, 25);
    font-size: 20px;
    padding:20px 0;
}
</style>