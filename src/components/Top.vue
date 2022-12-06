<template>
    <div class="top">
        <div class="top-inner">
            <div class="logo">
                <router-link to="/"><span><img
                            src="https://ccdn.goodq.top/caches/4ce61cd756c0c3467de0977d6849043b/aHR0cDovLzU3ZWEyMzYwMzY5YjUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS82NWU2YWNkMDVhNjJhZjA1MDU0YTE5N2U5NGRkMWRjOC05MC53ZWJw.webp"
                            alt="软件开发公司"></span></router-link>
            </div>
            <div>
                <ul class="nav">
                    <li><router-link :class="navcurrentindex == 1 ? 'nav-active' : ''" @click.native="to(1)"
                            to="/">首页</router-link>
                    </li>
                    <li><router-link :class="navcurrentindex == 2 ? 'nav-active' : ''" @click.native="to(2)"
                            to="/service">服务</router-link></li>
                    <li><router-link :class="navcurrentindex == 3 ? 'nav-active' : ''" @click.native="to(3)"
                            to="/price">定价</router-link></li>
                    <li><router-link :class="navcurrentindex == 4 ? 'nav-active' : ''" @click.native="to(4)"
                            to="/news">新闻</router-link></li>
                    <li><router-link :class="navcurrentindex == 5 ? 'nav-active' : ''" @click.native="to(5)"
                            to="/about">关于</router-link></li>
                    <li><router-link :class="navcurrentindex == 6 ? 'nav-active' : ''" @click.native="to(6)"
                            to="/contact">联系</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Top",
    data() {
        return {
            navcurrentindex: 1,//当前选中tab索引
        }
    },
    methods: {
        to(index) {
            this.navcurrentindex = index;
        },
    },
}
</script>

<style scoped>
.top {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background-color: #22282d;
    padding: 0px 130px;
    height: 67px;
}

.top-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav {
    display: flex;
}

.nav li {
    font: normal normal 15px / 23px "微软雅黑", Helvetica, Arial, Verdana, sans-serif;
    padding:21px 30px;
}

.nav li a {
    color: #cecece;
    display: inline-block;
    height: 100%;
}

.nav li:hover a {
    color: #ef4f19;
}

.nav li:hover {
    border-bottom: 1px solid #ef4f19;
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

.nav li .nav-active {
    color: #ef4f19;
}
</style>