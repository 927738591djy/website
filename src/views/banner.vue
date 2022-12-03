
<template>
  <div class="banner">
    <div class="top">
      <div class="top1"></div>
      <div class="top2"></div>
      <div class="top3"></div>
      <div class="title">可视化分析大数据系统</div>
      <div class="second-title">VISUAL BIG DATA SYSTEM</div>
      <div class="button">免费试用版本</div>
    </div>

    <div class="bottom">
      <div class="bottom-box">
        <img
          @mouseover="isHoverfirst = !isHoverfirst"
          @mouseleave="hoverRemove"
          :class="{ 'hover-swing': isHoverfirst }"
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kY2Q2YjZmM2I5YzAxZmEwYTkxMTlmNjNlYjg0Y2RkMC0xMzJ4MTAwLTkwLndlYnA_p_p100_p_3D.webp"
        />
        <div class="small-title">可视化报表</div>
        <div>応损捠捡枛换换攴朰朲朳枛朸桹</div>
      </div>
      <div class="bottom-box">
        <img
          @mouseover="isHovertwo = !isHovertwo"
          @mouseleave="hoverRemove"
          :class="{ 'hover-swing': isHovertwo }"
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kY2Q2YjZmM2I5YzAxZmEwYTkxMTlmNjNlYjg0Y2RkMC0xMzJ4MTAwLTkwLndlYnA_p_p100_p_3D.webp"
        />
        <div class="small-title">可视化报表</div>
        <div>応损捠捡枛换换攴朰朲朳枛朸桹</div>
      </div>
      <div class="bottom-box">
        <img
          @mouseover="isHoverthree = !isHoverthree"
          @mouseleave="hoverRemove"
          :class="{ 'hover-swing': isHoverthree }"
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kY2Q2YjZmM2I5YzAxZmEwYTkxMTlmNjNlYjg0Y2RkMC0xMzJ4MTAwLTkwLndlYnA_p_p100_p_3D.webp"
        />
        <div class="small-title">可视化报表</div>
        <div>応损捠捡枛换换攴朰朲朳枛朸桹</div>
      </div>
      <div class="bottom-box">
        <img
          @mouseover="isHoverfour = !isHoverfour"
          @mouseleave="hoverRemove"
          :class="{ 'hover-swing': isHoverfour }"
          src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kY2Q2YjZmM2I5YzAxZmEwYTkxMTlmNjNlYjg0Y2RkMC0xMzJ4MTAwLTkwLndlYnA_p_p100_p_3D.webp"
        />
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
      isHoverfirst: false,
      isHovertwo: false,
      isHoverthree: false,
      isHoverfour: false,
      timer: null,
    };
  },
  mounted() {
    let top1 = document.querySelector(".top1");
    let top2 = document.querySelector(".top2");
    let top3 = document.querySelector(".top3");
    show(top1, top2, top3);
  },
  methods: {
    // hoverShow() {
    //   this.isHover = !this.isHover;
    // },
    hoverRemove() {
      this.timer = setTimeout(() => {
        this.isHoverfirst = !this.isHoverfirst;
        this.isHovertwo = !this.isHovertwo;
        this.isHoverthree = !this.isHoverthree;
        this.isHoverfour = !this.isHoverfour;
      }, 1500);
    },
  },
};
</script>

<style scoped>
.banner {
  /* position: relative;   */
  position: absolute;
  top:27px;
  width: 100%;
}
.top {
  width: 100%;
  top: 27px;
  position: absolute;
}
.bottom {
  top: 487px;
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
}
.hover-swing {
  animation: swing 2s;
  transition: all 2s;
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
  left: 50px;
  color: #d3d3d3;
  font-size: 48px;
  z-index: 10;
  animation: move 1s;
}
.second-title {
  position: absolute;
  top: 230px;
  left: 50px;
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
  left: 50px;
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
.box {
  z-index: 10;
  width: 300px;
  height: 300px;
}
.box img {
  width: 100%;
  height: 100%;
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
</style>