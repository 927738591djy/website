<template>
  <div class="banner">
    <div class="top">
      <div class="top1"></div>
      <div class="top2"></div>
      <div class="top3"></div>
    </div>

    <div class="bottom">2</div>
  </div>
</template>

<script>
import show from '../utils/show'
export default {
  name: "Banner",
  data() {
    return {
      i: 1,
    };
  },
  mounted() {
    let top1 = document.querySelector(".top1");
    let top2 = document.querySelector(".top2");
    let top3 = document.querySelector(".top3");
    show(top1,top2,top3)
   
  },
};
</script>

<style scoped>
.top {
  position: relative;
}

.top1 {
  opacity: 1;
  transition: all 1s;
  position: absolute;
  width: 100%;
  height: 460px;
  background: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8wZDJlOGJhYjNhYTllOTEzNDM5YzA3NDM4MDk4OTcwNC05MC53ZWJw.webp");
}

.top2 {
  opacity: 0;
  transition: all 1s;
  position: absolute;
  width: 100%;
  height: 460px;
  background: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMC9jOTNjM2FjZjQ1MzM5YTgzZDU0YjdmMTY1NzY4YmE5NC05MC53ZWJw.webp");
}

.top3 {
  opacity: 0;
  transition: all 1s;
  position: absolute;
  width: 100%;
  height: 460px;
  background: url("https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS84NGI3MTgzMTQ0NWVkZWEyODMzOTRkMGI4NjI3ZTJmMS05MC53ZWJw.webp");
}

.banner {
  height: 600px;
  margin-bottom: 400px;
}
</style>