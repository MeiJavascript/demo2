<template>
    <div class="swipe">
        <van-swipe :autoplay="30000" indicator-color="white">
            <van-swipe-item>
                <div class="swipeContent">
                   <ul class="swipeUl">
                       <li>
                            <img src="@/assets/images/family.png" alt="">
                            <p>家族产业</p>
                       </li>
                        <li>
                            <img src="@/assets/images/person.png" alt="">
                            <p>家族名人</p>
                       </li>
                        <li>
                            <img src="@/assets/images/branch.png" alt="">
                            <p>家族分支</p>
                       </li>
                        <li>
                            <img src="@/assets/images/shi@2x.png" alt="">
                            <p>家族视频</p>
                       </li>
                   </ul>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="swipeContent">
                   <ul class="swipeUl">
                       <li>
                            <img src="@/assets/images/family.png" alt="">
                            <p>家族产业</p>
                       </li>
                        <li>
                            <img src="@/assets/images/person.png" alt="">
                            <p>家族名人</p>
                       </li>
                        <li>
                            <img src="@/assets/images/branch.png" alt="">
                            <p>家族分支</p>
                       </li>
                        <li>
                            <img src="@/assets/images/shi@2x.png" alt="">
                            <p>家族视频</p>
                       </li>
                   </ul>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style  lang="less">
    .swipe {
        height: 2rem;
        width: 100%;
        background-color:  #ffffff;
        border-radius: 0.2rem;
        margin-bottom: 0.4rem;
        box-shadow: 0 0 8px #ccc;
        .van-swipe {
            height: 100%;
        }
        // 标记点父元素
        .van-swipe__indicators {
            // 标记点子元素
            .van-swipe__indicator{
                width: 0.36rem;
                height: 0.06rem;
                background-color: #999999 !important;
            }
            .van-swipe__indicator--active {
                opacity: none;
                background-color: #D2211B !important;
            }
            .van-swipe__indicator {
                opacity: none;
            }
            
        }
        .swipeContent {
            height: 1.3rem;
            width: 100%;
            img {
                width: 0.88rem;
                height: 0.88rem;
            }
            .swipeUl {
                height: 100%;
                display: flex;
                    li {
                        width: 25%;
                        height: 100%;
                        position: relative;
                        img {
                            position: absolute;
                            top: 0.28rem;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                        p {
                            font-size: 0.2rem;
                            position: absolute;
                            bottom: -0.2rem;
                            left: 50%;
                            transform: translateX(-50%);
                            margin: 0;

                        }
                    }
                }
        }
    }
</style>
