<template>
    <div class="top">
      <div class="top-inner">
        <div class="logo">
            <a href="http://57ea2360369b5.t73.qifeiye.com/"><span><img
                        src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS82NWU2YWNkMDVhNjJhZjA1MDU0YTE5N2U5NGRkMWRjOC05MC53ZWJw.webp"
                        alt="软件开发公司"></span></a>
        </div>
        <div>
            <ul class="nav">
                <li>首页</li>
                <li><router-link to="/service">服务</router-link></li>
                <li><router-link to="/price">定价</router-link></li>
                <li><router-link to="/news">新闻</router-link></li>
                <li>关于</li>
                <li>联系</li>
            </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "Top"
}
</script>

<style scoped>
.top {
    position: absolute;
    width: 100%;
    left: 0;
    top:0;
    background-color: #22282d;
    padding: 20px 130px;
}
.top-inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav {
    display: flex;
}

.nav li {
    font: normal normal 15px / 23px "微软雅黑", Helvetica, Arial, Verdana, sans-serif;
    padding: 0 30px;
}

.logo {
    width: 139px;
    height: 27px;
    display: block;
}

.logo img {
    width: 100%;
    height: 100%;
}
</style>