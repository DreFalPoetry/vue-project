<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://dimg04.c-ctrip.com/images/350u1a0000019by6z96FA_C_640_360_Q60.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">dalian</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe643;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ["http://img1.qunarzz.com/sight/p0/1811/50/50949f30feac23d3a3.water.jpg_r_800x800_5af83d08.jpg","http://img1.qunarzz.com/sight/p0/1811/af/af05278e3b5c9908a3.water.jpg_r_800x800_ace65ca5.jpg"]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-image
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
