<template>
  <div class="index-container">
    <b-header />
    <div class="byn-carousel-wrap">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        background="#000000"
        style="text-shadow: 1px 1px 2px #333"
      >
        <b-carousel-slide> 
          <template v-slot:img>
          <img
            class="d-block img-fluid w-100 byn-carousel-img"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
        </b-carousel-slide>
        <b-carousel-slide> 
          <template v-slot:img>
          <img
            class="d-block img-fluid w-100 byn-carousel-img"
            src="https://picsum.photos/1024/480/?image=12"
            alt="image slot"
          >
        </template>
        </b-carousel-slide>
      </b-carousel>
      <div class="byn-indicators">
        <b-container>
          <ul class="byn-carousel-title">
            <li>FOR A</li>
            <li>BEAUTIFUL</li>
            <li>WORLD</li>
          </ul>
          <div class="byn-carousel-desc">
            Thanks to continuous technological enhancements,advanced battery technologies progressively enable the creation and deployment of new products and applications.
          </div>
          <ul class="byn-carousel-indicators">
            <li v-for="(item, index) in 2" @click="carouselChange(index)" :class="[ index == slide ? 'active' : '']" :key="index"></li>
          </ul>
        </b-container>
      </div>
      <!-- <b-container >1</b-container> -->
    </div>

    <b-container fluid class="p-4 bg-dark animate__animated animate__bounce">
      <b-row>
        <b-col>
          <div class="scale">
            <img src="https://picsum.photos/250/250/?image=54" alt="Image 1" />
          </div>
          <!-- <img src="" alt="" :style="`backgroundImage:url(https://picsum.photos/250/250/?image=54)`"> -->
        </b-col>
        <b-col>
          <div class="size-110" :style="`backgroundImage:url(https://picsum.photos/250/250/?image=59)`"></div>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BHeader from '@/components/b-header.vue'
export default {
  components: {
    BHeader
  },
  data() {
    return {
      slide: 0
    }
  },
  methods: {
    carouselChange(index) {
      this.slide = index
    }
  },
  mounted() {}
}
</script>

<style scoped lang="scss">
@media (max-width: 992px) {
  .byn-carousel-indicators {
    display: none !important;
  }
  .byn-carousel-img {
    height: 756px !important;
  }
}
@media (min-width: 992px) {
  .byn-carousel-img {
    height: 572px !important;
  }
}
.byn-carousel-wrap {
  position: relative;
}
.byn-indicators {
  padding: 0 1rem;
  width: 100%;
  position: absolute;
  top: 166px;
  left: 0;
  color: #FFFFFF;
}
.byn-carousel-title {
  font-size: 58px;
  font-weight: 800;
  line-height: 62px;
}
.byn-carousel-desc {
  margin-top: 16px;
  max-width: 394px;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 19px;
}
.byn-carousel-indicators {
  display: flex;
  margin-top: 76px;
  cursor: pointer;
  li {
    // flex: 1;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-left: 12px;
    background: rgba(0, 0, 0, 0.2);
  }
  li.active {
    background: #1578DB;
  }
}
</style>
