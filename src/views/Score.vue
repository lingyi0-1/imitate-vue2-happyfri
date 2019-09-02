<template>
    <div class="score">
        <div class="score_content">
            <div class="score_num">{{this.$store.state.score}}分!</div>
            <div class="commentary">{{commentary}}</div>
        </div>
        <div class="button_share" v-on:click="shareOrNot = true"></div>
        <div class="attention">关注葡萄之家，获取答案</div>
        <div class="qr_code"></div>
        <div class="share" v-if="shareOrNot" v-on:click="shareOrNot = false">
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "score",
        data(){
            return {
                shareOrNot: false //分享页面显示与否的控制器
            }
        },
        computed: {
            commentary: function(){
                if(this.$store.state.score <= 20){
                    return '你说，是不是把知识都还给老师了';
                }else if(this.$store.state.score == 40){
                    return '还不错，但还需要继续加油哦！';
                }else if(this.$store.state.score == 60){
                    return '不要得瑟还有进步的空间！';
                }else if(this.$store.state.score == 80){
                    return '智商离爆表只差一步';
                }else{
                    return '你太聪明了，葡萄之家欢迎你！';
                }





            }
        }
    }
</script>

<style lang="scss">
    .score{
        width: 100vw;
        height: 103vh;
        position: relative;
        margin-top: vw(-16.5);
        background-image: url("../assets/images/4-1.jpg");
        background-size: 100vw 103vh;
    }

    .score_content{
        width: vw(227.34);
        height: vw(213.28);
        position: absolute;
        top: vw(45);
        right: vw(73.83);
        background-image: url("../assets/images/4-2.png");
        background-size: vw(227.34) vw(213.28);
    }

    .score_num{
        width: vw(227.34);
        height: vw(44);
        position: absolute;
        top: vw(110.16);
        font-family: "Microsoft YaHei";
        font-size: vw(32.81);
        font-weight: 900;
        color: #A51D31;
        text-align: center;
    }

    .commentary{
        width: vw(210.94);
        height: vw(40);
        position: absolute;
        top: vw(164.06);
        right: vw(2.34);
        font-family: "Microsoft YaHei";
        font-size: vw(15.23);
        font-weight: 100;
        text-align: center;
        color: #3E2415;
    }

    .button_share{
        width: vw(141.2);
        height: vw(56.25);
        position: absolute;
        top: vw(280.01);
        right: vw(116.91);
        background-image: url("../assets/images/4-3.png");
        background-size: vw(141.2) vw(56.25);
    }

    .attention{
        width: vw(164.06);
        height: vw(16);
        position: absolute;
        top: vw(370);
        right: vw(105.28);
        font-family: "Microsoft YaHei";
        font-size: vw(12);
        font-weight: 500;
        text-align: center;
    }

    .qr_code{
        width: vw(124.22);
        height: vw(124.22);
        position: absolute;
        top: vw(397.7);
        right: vw(125.39);
        background-image: url("../assets/images/4-4.png");
        background-size: vw(124.22) vw(124.22);
    }

    .share{
        width: 100vw;
        height: 103vh;
        position: relative;
        margin-top: vw(-16.5);
        background-image: url("../assets/images/5-1.png");
        background-size: 100vw 103vh;

        div{
            width: vw(280.08);
            height: vw(257.22);
            position: absolute;
            top: vw(28.22);
            right: vw(55.46);
            background-image: url("../assets/images/5-2.png");
            background-size: vw(280.08) vw(257.22);
        }
    }
</style>