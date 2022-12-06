<template>
  <div class="idea">
    <div class="left">
      <div class="title">您的宝贵意见是我们前进的动力</div>
      <form action="">
        <div class="first-input">
          <div class="input" style="margin-right: 8px">
            <div>
              <label for="">姓名</label> <span style="color: #ef4f19">*</span>
            </div>
            <input type="text" value="" placeholder="" name="name" />
          </div>
          <div class="input">
            <div><label for="">联系电话</label></div>
            <input type="text" value="" placeholder="" name="name" />
          </div>
        </div>

        <div class="input" style="margin-right: 8px">
          <div>
            <label for="">邮箱</label> <span style="color: #ef4f19">*</span>
          </div>
          <input type="text" value="" placeholder="" name="name" />
        </div>

        <div class="input">
          <div>
            <label for="">内容</label> <span style="color: #ef4f19">*</span>
          </div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>

        <button class="confirm">提交</button>
        <p><span style="color:#ef4f19">温馨提示：</span>使用表单之前需要配置表单的收件邮箱和网站的发件邮箱。详情<br>请参考教程<span
            style="color:#ef4f19">如何设置表单中的邮箱</span></p>
      </form>

    </div>
    <div class="right">
      <img
        src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9kN2UyNGNkYzMyMDQ0ZjcwYTUwNDI4ZDEyOTNjZDhiNi05MC53ZWJw.webp"
        class="front_image  attachment-full" alt="02145" title="" description="" data-title="02145" src-img="" style="">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.idea {
  position: absolute;
  position: relative;
  width: 100%;
  top: 2773px;
  left: 0;
  background-color: #f7f7f7;
  height: 643px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 250px;
}

.title {
  color: #ef4f19;
  font-size: 28px;
  margin-bottom: 40px;
}

.first-input {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.first-input .input {
  width: 50%;
}

.input input {
  border: 1px solid rgb(156, 156, 156);
  height: 40px;
  font-size: 14px;
  margin-top: 10px;
  background-color: transparent;
  width: 100%;
}

.input {
  margin: 10px 0;
}

.input textarea {
  border: 1px solid rgb(156, 156, 156);
  margin-top: 10px;
  background-color: transparent;
  width: 100%;
  height: 58px;
}

.left {
  flex: 1;
}

.right {
  width: 38%;
  margin-left: 130px;
  /* margin-right: 50px; */
  animation: appear 20s linear infinite;
}

.right img {
  width: 100%;
}

.confirm {
  color: #fff;
  background-color: #ef4f19;
  border: 0;
  padding: 10px 70px;
  font-size: 15px;
  margin: 10px 0;
  margin-bottom: 15px;
}

.confirm:hover {
  background-color: transparent;
  border: 1px solid #ef4f19;
  color: #ef4f19;
}

.left p {
  color: #666;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: rotate(-360deg);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
}
</style>