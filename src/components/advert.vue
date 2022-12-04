<template>
  <div class="advert">
    <p>SOFTWARE让应用程序操作更加简单、更高效、更可靠。</p>
    <button class="advert-button">免费试用版本</button>
  </div>
</template>

<script>
export default {
  name: "Advert",
};
</script>

<style scoped>
.advert {
  /* position: absolute; */
  /* width: 100%; */
  /* top:3416px; */
  /* left: 0; */
  background-color: #000;
  height: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;
}
.advert p {
  color: #808080;
}
.advert-button {
  background-color: #ef4f19;
  color: #fff;
  padding: 12px 40px;
  border-radius: 30px;
}
.advert-button:hover {
  background-color: transparent;
  color: #ef4f19;
  border: 1px solid #ef4f19;
}
</style>