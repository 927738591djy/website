<template>
    <div>
        <div class="contact">
            <div class="code"></div>
            <div class="bottom-form">
             <div class="bottom-form-wrap">
                <div class="left">
                    <p><span style="color:#ef4f19">温馨提示：</span>使用表单之前需要配置表单的收件邮箱和网站的发件邮箱。详情请参考教程<span
                            style="color:#ef4f19">如何设置表单中的邮箱</span></p>
                    <form action="">
                        <div class="first-input">
                            <div class="input" style="margin-right: 8px">
                                <div>
                                    <label for="">姓名</label> <span style="color: #ef4f19">*</span>
                                </div>
                                <input type="text" value="" placeholder="" />
                            </div>
                            <div class="input">
                                <div><label for="">联系电话</label></div>
                                <input type="text" value="" placeholder="" />
                            </div>
                        </div>

                        <div class="input" style="margin-right: 8px">
                            <div>
                                <label for="">邮箱</label> <span style="color: #ef4f19">*</span>
                            </div>
                            <input type="text" value="" placeholder="" />
                        </div>

                        <div class="input">
                            <div>
                                <label for="">内容</label> <span style="color: #ef4f19">*</span>
                            </div>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>

                        <button class="confirm">提交</button>

                    </form>
                </div>
                <div class="right">
                    <h3>联系我们</h3>
                    <span>当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式，无论您是普通互联网用户 还是专业网站制作人员都能使用起飞页设计出最具专业水准的网站。</span>
                    <p>苏州工业园区金鸡大道99号</p>
                    <p>营业时间：9:00 – 18:00</p>
                    <p>工作日：周一至周五；休息日：周六、日</p>
                    <p>info@abcdefg.com</p>
                    <p>0500-67006000</p>
                </div>
             </div>
            </div>
        </div>
        <div class="footer-po">
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
    name: 'Contact',
    components: {
        Footer
    }
}
</script>

<style scoped>
.contact {
    position: absolute;
    top: 67px;
    left: 0;
    background-color: rgb(224, 224, 220);
    height: 500px;
    width: 100%;
}

.bottom-form {
    position: absolute;
    top: 500px;
    background-color: #333;
    height: 516px;
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    padding: 0 250px;
}
.bottom-form-wrap{
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
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
   border:1px solid rgb(121, 121, 121);
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
   border:1px solid rgb(121, 121, 121);
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

.left p{
    font-size: 14px;
    color: #666;
    line-height: 1.4em;
    margin-bottom: 15px;
}


.footer-po {
    position: absolute;
    top: 1083px;
    width: 100%;
    height: 347px;
}
.right h3{
    color: #a9a9a9;
    font-size: 22px;
    font-weight: 400;
}
.right span{
    display: inline-block;
    color: #808080;
    font-size: 13px;
    margin-top: 30px;
    margin-bottom: 10px;
    line-height: 1.8em;
}
.right p {
    font-size:14px;
    color: #808080;
    line-height: 2em;

}
</style>