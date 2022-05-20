<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <!--  -->
      <layout-footer :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import LayoutFooter from '@/components/layout-footer'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '关于我',
          to: {
            name: 'About'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  components: { LayoutFooter },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
