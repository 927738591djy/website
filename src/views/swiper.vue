<template>
  <div class="swiper">
    <div class="swiper-container backgroundfff">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kYjU1NWFmYzgzZjE3YjYyNzM0MjFjMDJmODRlZDQ4Ny05MC53ZWJw.webp"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kYjU1NWFmYzgzZjE3YjYyNzM0MjFjMDJmODRlZDQ4Ny05MC53ZWJw.webp"
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kYjU1NWFmYzgzZjE3YjYyNzM0MjFjMDJmODRlZDQ4Ny05MC53ZWJw.webp"
          />
        </div>
      </div>
      <!-- Add Pagination -->
    

      <div
        class="
          swiper-pagination
          swiper-pagination-clickable
          swiper-pagination-bullets
          swiper-pagination-horizontal
        "
      >
        <span class="swiper-pagination-bullet" tabindex="0">1</span
        ><span class="swiper-pagination-bullet" tabindex="0">2</span
        ><span
          class="swiper-pagination-bullet swiper-pagination-bullet-active"
          tabindex="0"
          aria-current="true"
          >3</span
        ><span class="swiper-pagination-bullet" tabindex="0">4</span
        ><span class="swiper-pagination-bullet" tabindex="0">5</span
        ><span class="swiper-pagination-bullet" tabindex="0">6</span
        ><span class="swiper-pagination-bullet" tabindex="0">7</span
        ><span class="swiper-pagination-bullet" tabindex="0">8</span
        ><span class="swiper-pagination-bullet" tabindex="0">9</span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Swiper",
  mounted() {
    this.myswiper();
  },
  methods: {
    myswiper: function () {
      new Swiper(".swiper-container", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.swiper {
  position: absolute;
  top: 1525px;
  width: 100%;
  height: 662px;
  background-color: pink;
}
</style>