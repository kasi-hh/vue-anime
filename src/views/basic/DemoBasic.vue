<template>
    <div>
        <div class="container">
            <div ref="item1" class="item"></div>
            <div ref="item2" class="item"></div>
            <div ref="item3" class="item"></div>
            <div ref="item4" class="item"></div>
            <div ref="win" class="win">some Text</div>
            <div ref="tl1" class="item"></div>
            <div ref="tl2" class="item"></div>
            <div ref="tl3" class="item"></div>
            <div ref="tl4" class="item"></div>
            <div ref="rect" class="item"></div>
        </div>
        <div class="action">
            <b-button @click="play">Play</b-button>
            <b-button @click="pause">Pause</b-button>
            <b-button @click="reset">Reset</b-button>
            <b-button @click="reverse">Reverse</b-button>
        </div>
    </div>
</template>

<script>
    import anime from 'animejs/lib/anime.es'

    export default {
        anime: null,
        anim2: null,
        name: "DemoBasic",
        mounted() {
            anime({
                targets:this.$refs.rect,
                translateX:{
                    value:500,
                    duration:2000,
                },
                scale:{
                    value:3,
                    delay:2000,
                    duration:1000,
                },
                rotate:{
                    value:'1turn',
                    delay:3000,
                    duration:2000,
                },
                duration:5000,
                loop:true,
                direction:'alternate',
                easing:'easeInOutElastic(2,0.5)'
            })
            const timeline = anime.timeline({
                duration:3000,
                direction:'alternate',
                loop:true
            });
            timeline.add({
                targets:[this.$refs.tl1, this.$refs.tl2],
                translateX:400,
            })
            timeline.add({
                targets:[this.$refs.tl3, this.$refs.tl4],
                translateX:600,
                duration:5000,
            },1000)
            anime({
                targets:[this.$refs.win],
                height:100,
                duration:2000,
                loop:true,
                direction:'alternate',
                autoplay:true,
                easing:'linear'
            });
            this.anim2 = anime({
                targets: [this.$refs.item3, this.$refs.item4],
                translateX: 270,
                rotate: anime.stagger([-360, 360]),
                duration:5000,
                delay: anime.stagger(100) // increase delay by 100ms for each elements.
            });
            this.anime = anime({
                targets: [this.$refs.item1, this.$refs.item2],
                translateX: [100, anime.stagger(500)],
                borderRadius: ['0%', '10%'],
                delay: anime.stagger(200),
                scale: {
                    value: [1, 2],
                    duration: 10000
                },
                rotate: ('20deg'),
                perspective: 20,
                screw: 30,
                direction: 'alternate',
                duration: 5000,
                autoplay: true
            });
        },
        methods: {
            play() {
                if (this.anime) {
                    this.anime.play();
                }
            },
            pause() {
                if (this.anime) {
                    this.anime.pause();
                }
            },
            reset() {
                if (this.anime) {
                    this.anime.reset();
                }
            },
            reverse() {
                if (this.anime) {
                    this.anime.reverse();
                }
            }
        }
    }
</script>

<style scoped>
    .win {
        position:absolute;
        right:20px;
        top:20px;
        height:0;
        background-color: yellow;
        overflow:hidden;
    }
    .container {
        border: 1px solid #000;
        position:relative;
    }

    .item {
        box-sizing: border-box;
        border: 1px solid #000;
        margin: 5px;
        background-color: #0c0;
        height: 20px;
        width: 20px;
    }
</style>