<template>
    <div class="footer">
        <div class="footer-inner">
            <div class="first">
                <div class="title">关于我们</div>
                <p>応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢団囤囥。</p>
            </div>
            <div class="second">
                <div class="title">我们的服务</div>
                <ul>
                    <li>自主建站平台</li>
                    <li>IT外包项目</li>
                    <li>定制软件开发</li>
                    <li>可视化内容编辑</li>
                </ul>
            </div>
            <div class="second">
                <div class="title">新品发布新闻</div>
                <p>Created especially for you
                    October 1, 2</p>
                <p>Awesome theme with endless possibilities. August 28, 2013</p>
            </div>
            <div class="four">
                <div class="title">联系方式</div>
                <div>
                    <div>
                        <img src="" alt="">
                        <p>info@softwore.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="banquan">版权所有 ©2017   地址：苏州市工业园区大道金鸡湖大道99号     苏ICP备0000000000号</div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
    position: absolute;
    width: 100%;
    /* top:3576px; */
    left: 0;
    background-color: #32383d;
    height: 100%;
    font-size: 12px;
}

.footer-inner {
    margin: 30px 0;
    display: flex;
    justify-content: center;
}
.banquan{
    margin: 80px 0;
    display: flex;
    justify-content: center;
    font-size: 13px;
}

.first {
    width: 270px;
    margin-right: 50px;
}

.second {
    width: 250px;
}
.second ul li{
padding: 5px 0;
}
.second p {
    padding: 10px 0;
}
.four{
    margin-left: 50px;
    width: 270px;
}
.title{
    font-weight: 600;
    line-height: 70px;
    font-size: 18px;
    font-family: "Open Sans", Helvetica, Arial, Verdana, sans-serif;
}
</style>