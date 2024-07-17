<template>
    <div class="service-area service-default-area text-center">
        <div class="shape-wrapper">
            <img src="/images/blog/author-01.jpg" alt="test">
            <div class="shape-round shape-round-one">
                <img src="/images/shape-test.png" alt="">
            </div>
            <div class="shape-round">
                <img src="/images/shape-test.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .shape-wrapper {
        position: relative;
        .shape-round {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            z-index: -1;
            img {
                animation: animation-scale-one 2.8s infinite;
            }
            &-one {
                width: 200px;
                height: 200px;
                img {
                    animation: animation-scale-two 2.8s infinite;
                    transition-delay: .5s;
                }
            }
        }
    }

    @keyframes animation-scale-one {
        0% {
            transform: scale(0.7);
            opacity: 1;
        }
        100% {
            transform: scale(1.2);
            opacity: 0;
        }
    }

    @keyframes animation-scale-two {
        0% {
            transform: scale(0.7);
            opacity: 1;
        }
        100% {
            transform: scale(0.7);
            opacity: 0;
        }
    }
</style>