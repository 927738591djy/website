
<template>
  <div class="banner">
    <div class="top">
      <div class="bacoground"></div>
      <div class="top1"></div>
      <div class="top2"></div>
      <div class="top3"></div>
      <div class="title">可视化分析大数据系统</div>
      <div class="second-title">VISUAL BIG DATA SYSTEM</div>
      <div class="button">免费试用版本</div>
      <div class="top-img"> <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS85Y2ZjYzhhYjU2ZDQ3OTY0YjZmMWUzMWM1YTY4MzBiMy05MC53ZWJw.webp"
          alt=""></div>
    </div>

    <div class="bottom">
      <div class="bottom-box">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kY2Q2YjZmM2I5YzAxZmEwYTkxMTlmNjNlYjg0Y2RkMC0xMzJ4MTAwLTkwLndlYnA_p_p100_p_3D.webp" />
        <div class="small-title">可视化报表</div>
        <div>応损捠捡枛换换攴朰朲朳枛朸桹</div>
      </div>
      <div class="bottom-box">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kY2Q2YjZmM2I5YzAxZmEwYTkxMTlmNjNlYjg0Y2RkMC0xMzJ4MTAwLTkwLndlYnA_p_p100_p_3D.webp" />
        <div class="small-title">可视化报表</div>
        <div>応损捠捡枛换换攴朰朲朳枛朸桹</div>
      </div>
      <div class="bottom-box">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kY2Q2YjZmM2I5YzAxZmEwYTkxMTlmNjNlYjg0Y2RkMC0xMzJ4MTAwLTkwLndlYnA_p_p100_p_3D.webp" />
        <div class="small-title">可视化报表</div>
        <div>応损捠捡枛换换攴朰朲朳枛朸桹</div>
      </div>
      <div class="bottom-box">
        <img
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kY2Q2YjZmM2I5YzAxZmEwYTkxMTlmNjNlYjg0Y2RkMC0xMzJ4MTAwLTkwLndlYnA_p_p100_p_3D.webp" />
        <div class="small-title">可视化报表</div>
        <div>応损捠捡枛换换攴朰朲朳枛朸桹</div>
      </div>
    </div>
  </div>
</template>

<script>
import show from "../utils/show";
export default {
  name: "Banner",
  data() {
    return {
    };
  },
  mounted() {
    let top1 = document.querySelector(".top1");
    let top2 = document.querySelector(".top2");
    let top3 = document.querySelector(".top3");
    show(top1, top2, top3);
  },
  methods: {
  },
};
</script>

<style scoped>
.banner {
  /* position: relative;   */
  position: absolute;
  width: 100%;
}

.top {
  width: 100%;
  top: 67px;
  position: absolute;
}

.bottom {
  top: 527px;
  width: 100%;
  position: absolute;
  height: 285px;
  background-color: #32383d;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.bottom-box {
  /* margin: 0 80px; */
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

}


.bottom-box img {
  width: 70%;
  margin-bottom: 30px;
  animation: scale 0.5s forwards;
}
.bottom-box:hover img{
  animation: swing 1s;
}
.small-title {
  font-weight: 600;
  margin-bottom: 10px;
}

.top1 {
  opacity: 1;
  transition: all 2s;
  position: absolute;
  width: 100%;
  height: 460px;
  background: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wZDJlOGJhYjNhYTllOTEzNDM5YzA3NDM4MDk4OTcwNC05MC53ZWJw.webp");
}

.top2 {
  opacity: 0;
  transition: all 2s;
  position: absolute;
  width: 100%;
  height: 460px;
  background: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9jOTNjM2FjZjQ1MzM5YTgzZDU0YjdmMTY1NzY4YmE5NC05MC53ZWJw.webp");
}

.top3 {
  opacity: 0;
  transition: all 2s;
  position: absolute;
  width: 100%;
  height: 460px;
  background: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS84NGI3MTgzMTQ0NWVkZWEyODMzOTRkMGI4NjI3ZTJmMS05MC53ZWJw.webp");
}

.title {
  position: absolute;
  top: 140px;
  left: 120px;
  color: #d3d3d3;
  font-size: 48px;
  z-index: 10;
  animation: move 1s;
}

.second-title {
  position: absolute;
  top: 230px;
  left: 120px;
  color: #fff;
  font-size: 28px;
  z-index: 10;
  opacity: 0;
  animation: move 1s forwards;
  animation-delay: 0.2s;
}

.button {
  position: absolute;
  top: 300px;
  left: 120px;
  color: #fff;
  font-size: 16px;
  z-index: 10;
  background-color: #ef4f19;
  padding: 12px 40px;
  border: 1px solid #ef4f19;
  border-radius: 30px;
  opacity: 0;
  animation: move 1s forwards;
  animation-delay: 1s;
}

.button:hover {
  background-color: transparent;
  color: #ef4f19;
  border: 1px solid #ef4f19;
}

.box {
  z-index: 10;
  width: 300px;
  height: 300px;
}

.box img {
  width: 100%;
  height: 100%;
}

.top-img {
  position: absolute;
  z-index: 10;
  right: 300px;
  top: 70px;
  animation: appear 20s linear infinite;
}

.bacoground {
  position: absolute;
  background-color: rgba(51, 60, 63, 0.7);
  z-index: 5;
  width: 100%;
  height: 460px;
}

@keyframes move {
  0% {
    transform: translateX(-500px);
  }

  100% {
    transform: translateX(-0px);
    opacity: 1;
  }
}

@keyframes swing {
  20% {
    transform: rotate(15deg);
  }

  40% {
    transform: rotate(-10deg);
  }

  60% {
    transform: rotate(5deg);
  }

  80% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

@keyframes scale {
  0% {
    transform: scale(0.3);
  }

  100% {
    transform: scale(1);
  }
}

.top-img img:hover {
  animation: tada 0.8s .2s ease both;
}

@keyframes tada {
  0% {
    transform: scale(1);
  }

  10%,
  20% {
    transform: scale(0.9) rotate(-3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale(1.1) rotate(3deg);
  }

  40%,
  60%,
  80% {
    transform: scale(1.1) rotate(-3deg);
  }

  100% {
    transform: scale(1) rotate(0);
  }
}

@keyframes appear {
  0% {
    transform: rotate(-360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>