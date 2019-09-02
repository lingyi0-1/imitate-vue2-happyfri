<template>
    <div>
        <div class="tip">
            <div v-if="fatherComponent == 'home'">第一周</div>
            <div v-if="fatherComponent == 'item'">题目{{itemNum + 1}}</div>
        </div>

        <div class="item" v-bind:class="{ home_background:fatherComponent == 'home', item_background: fatherComponent == 'item'}" >
            <div v-if="fatherComponent == 'item'">
                <p>{{itemContent[itemNum].problem}}</p>
                <div v-for="option in itemContent[itemNum].options">
                    <input type="radio" :value="option.value" v-model="result[itemNum]"/>
                    <label>{{option.description}}</label>
                </div>
            </div>
        </div>


        <div class="button" :class="{
                button_start: fatherComponent == 'home',
                button_next_question: fatherComponent == 'item' && itemNum != 4,
                button_submit: fatherComponent == 'item' && itemNum == 4
            }" v-on:click="navigate"></div>
    </div>
</template>

<script>
    export default {
        name: "ItemContainer",
        props: ['fatherComponent'],//fatherComponent代表当前用到该组件的组件（即父组件）是哪个组件
        data(){
            return {
                itemNum: 0,//第几题
                result:[],//选择的答案放入该数组
                //选择题数组
                itemContent:[
                    {
                        problem: '题目一',
                        answer: 'B',//当前选择题的答案
                        options: [
                            {
                                value: 'A',//radio的value
                                description: 'A.答案aaaa'//radio的label
                            },
                            {
                                value: 'B',
                                description: 'B.正确答案'
                            },
                            {
                                value: 'C',
                                description: 'C.答案cccc'
                            },
                            {
                                value: 'D',
                                description: 'D.答案dddd'
                            }
                        ]

                    },
                    {
                        problem: '题目二',
                        answer: 'C',
                        options: [
                            {
                                value: 'A',
                                description: 'A.答案A'
                            },
                            {
                                value: 'B',
                                description: 'B.答案B'
                            },
                            {
                                value: 'C',
                                description: 'C.正确答案'
                            },
                            {
                                value: 'D',
                                description: 'D.答案D'
                            }
                        ]

                    },
                    {
                        problem: '题目三',
                        answer: 'D',
                        options: [
                            {
                                value: 'A',
                                description: 'A.测试A'
                            },
                            {
                                value: 'B',
                                description: 'B.BBBBBBB'
                            },
                            {
                                value: 'C',
                                description: 'C.CCCCCCC'
                            },
                            {
                                value: 'D',
                                description: 'D.正确答案'
                            }
                        ]

                    },
                    {
                        problem: '题目四',
                        answer: 'A',
                        options: [
                            {
                                value: 'A',
                                description: 'A.正确答案'
                            },
                            {
                                value: 'B',
                                description: 'B.答案bbbb'
                            },
                            {
                                value: 'C',
                                description: 'C.答案cccc'
                            },
                            {
                                value: 'D',
                                description: 'D.答案dddd'
                            }
                        ]

                    },
                    {
                        problem: '题目五',
                        answer: 'B',
                        options: [
                            {
                                value: 'A',
                                description: 'A.答案aaaa'
                            },
                            {
                                value: 'B',
                                description: 'B.正确答案'
                            },
                            {
                                value: 'C',
                                description: 'C.答案错误'
                            },
                            {
                                value: 'D',
                                description: 'D.答案dddd'
                            }
                        ]
                    },
                ]

            }
        },
        methods:{
            navigate: function(){
                if(this.fatherComponent == 'home'){
                    //导航进入item页面
                    this.$router.push('/item')
                }else if(this.fatherComponent == 'item' && this.itemNum != 4){
                    //根据答题与否选择提醒答题或进入下一题
                    if(this.result[this.itemNum]){
                        this.itemNum += 1
                    }else{
                        alert('你还没有选择答案哦')
                    }
                }else{
                    //根据答题与否选择提醒答题或进入score页面
                    if(this.result[this.itemNum]){
                        this.$store.commit('updateScore',this.result.map((x, index)=>{
                            if(x == this.itemContent[index].answer){
                                return true;
                            }
                            else{
                                return false;
                            }
                        }).filter((x)=>{return x;}).length*20);
                        this.$router.push('/score')
                    }else{
                        alert('你还没有选择答案哦')
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .tip{
        width: vw(76.17);
        height: vw(172.27);
        position: absolute;
        top: vw(-30.47);
        right: vw(37.5);
        background-image: url("../assets/images/WechatIMG2.png");
        background-size: vw(76.17) vw(172.27);

        div{
            width: vw(58.59);
            height: vw(16.41);
            position: absolute;
            top: vw(131.08);
            right: vw(6.33);
            font-family: \\9ED1\4F53;
            font-size: vw(14.06);
            text-align: center;
            line-height: vw(16.41);
            color: #A57C50;
        }
    }

    .item{
        width: vw(308.2);
        height: vw(272.45);
        position: absolute;
        top: vw(96.09);
        right: vw(43.36);

        &>div{
            width: vw(187.5);
            height: vw(164.06);
            position: absolute;
            top: vw(56.25);
            right: vw(50.39);
            color: #FFFFFF;

            p{
                width: vw(187.5);
                height: vw(16);
                line-height: vw(16.41);
                font-family: "Microsoft YaHei";
                font-size: vw(15.23);
            };

            div{
                width: vw(234.38);
                height: vw(21.58);
                margin-top: vw(9.38);
                font-family: "Microsoft YaHei";
                font-size: vw(14.06);

            }
        }
    }

    .home_background{
        background-image: url("../assets/images/1-2.png");
        background-size: vw(308.2) vw(272.45);
    }

    .item_background{
        background-image: url("../assets/images/2-1.png");
        background-size: vw(308.2) vw(272.45);
    }

    .button{
        width: vw(101.95);
        height: vw(49.22);
        position: absolute;
        top: vw(386.72);
        right: vw(141.8);
        background-size: vw(101.95) vw(49.22);
    }

    .button_start {
        background-image: url("../assets/images/1-4.png");
    }

    .button_next_question{
        background-image: url("../assets/images/2-2.png");
    }

    .button_submit{
        background-image: url("../assets/images/3-1.png");
    }
</style>