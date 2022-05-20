<template>
  <div class="nav-top-wrap" :class="classObj">
    <b-container>
      <b-navbar :class="[ isScroll ?  'animate__animated animate__slideInDown' : '']" toggleable="lg" fixed="top" sticky type="dark" variant="nav-top">
        <b-navbar-brand to="/home" active-class="nav-top-active">
          <div v-if="!isScroll" class="byn-logo"></div>
          <div v-else class="byn-logo byn-logo-blue"></div>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse" class="byn-toggler-icon"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-md-auto">
            <b-nav-item
              v-for="(navitem, index) in navTopList"
              :active="routePath(navitem.i18Key)"
              :key="index"
              :to="navitem.i18Key"
              >{{ $t(`home.${navitem.i18Key}`) }}</b-nav-item
            >
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#" @click="handleSetLanguage('en')">EN</b-dropdown-item>
              <b-dropdown-item href="#" @click="handleSetLanguage('zh-cn')">中文</b-dropdown-item>
            </b-nav-item-dropdown>
            <!-- <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import { watchScrollDirection } from '@/utils/index'
export default {
  data() {
    return {
      isScroll: false,
      navTopList: [
        {
          i18Key: 'about'
        },
        {
          i18Key: 'product'
        },
        {
          i18Key: 'social'
        },
        {
          i18Key: 'news'
        },
        {
          i18Key: 'contact'
        }
      ]
    }
  },
  mounted() {
    this.isScroll = false
    // 监听是否页面滚动
    this.unwatch = watchScrollDirection(window, (...args) => {
      if (args[1].y >= 72) {
        this.isScroll = true
      } else {
        this.isScroll = false
      }
    })
  },
  computed: {
    language() {
      return this.$store.getters.language
    },
    classObj() {
      return {
        'bg-nav-scroll': this.isScroll
      }
    },
    routeChange() {
      return this.$route.name
    },
    routePath(path) {
      return function () {
        this.$route.path === '/' + path
      }
    }
  },
  watch: {
    routeChange() {
      window.scrollTo(0, 0)
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
    }
  },
  destroyed() {
    this.unwatch()
  }
}
</script>
<style scoped lang="scss">
@media (max-width: 992px) {
  .byn-logo {
    width: 63px;
    height: 26px;
    background-image: url('../assets/logo@2x-phone.png');
  }
}
@media (min-width: 992px) {
  .nav-top-wrap {
    min-height: 72px;
    line-height: 72px;
  }
  .byn-logo {
    width: 85px;
    height: 36px;
    background-image: url('../assets/logo@2x.png');
  }
}
// 大屏pc
@media (min-width: 1200px) {
  .nav-item {
    margin-left: 40px;
  }
}
.nav-top-wrap {
  position: fixed;
  z-index: 1111;
  width: 100%;
  font-size: 14px;
}
.bg-nav-scroll {
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
.bg-nav-top {
  min-height: 56px;
}
.nav-top-active {
  color: skyblue;
}
.byn-logo {
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
}
.router-link-active {
  color: #1578db !important;
}
.byn-logo-blue {
  background-image: url('../assets/logo@2x-blue.png');
}
.navbar-toggler {
  color: #fff !important;
  border-width: 0;
}
// .byn-toggler-icon .navbar-toggler-icon {

// }
</style>
