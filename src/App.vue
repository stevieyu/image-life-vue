<template>
  <div class="font-serif mx-auto" id="app">
    <waterfall :class="next?'blur':''"/>
    <div class="start-interface flex flex-col items-center justify-end" :class="next?'show-login':''">
      <div class="logo w-full text-center">
        <img src="https://picsum.photos/150" class="logo-image animated fadeInUp">
        <div class="logo-name animated fadeInUp">Image Life</div>
      </div>
      <div class="next-btn text-center animated fadeInUp" @click="next=!next">></div>
    </div>
  </div>
</template>

<script>
  import waterfall from './components/waterfall.vue'
  import Iscroll from './components/Iscroll.vue'

  export default {
    components: {
      waterfall,
      Iscroll
    },
    data() {
      return {
        next: false,
        iscroll_options: {
          // click: true,
          // scrollY: true,
          // mouseWheel: true
        }
      }
    },
    mounted() {
    },
    filters: {},
    methods: {
    }
  }
</script>

<style lang="scss">
  @import './app.scss';

  #app {
    max-width: 450px;
    position: absolute;
    width: 100%;
    min-height: 100vh;
    z-index: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .blur {
    transition: filter .8s;
    filter: blur(15px);
  }

  .start-interface {
    width: 100%;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    background-image: linear-gradient(0deg, rgba(243, 243, 243, 1), rgba(243, 243, 243, 1), rgba(243, 243, 243, .2));

    .logo {
      margin-bottom: 11vh;

      &-image {
        width: 20%;
        border-radius: 25%;
        box-shadow: 0 5px 5px #ccc;
        margin-bottom: 10px;
        animation-delay: 2s;
      }

      &-name {
        animation-delay: 2.5s;
      }
    }

    .next-btn {
      margin-bottom: 7vh;
      animation-delay: 3s;
      padding: 0 1rem;
    }

    &.show-login {
      background-image: linear-gradient(0deg, rgba(243, 243, 243, 1), rgba(243, 243, 243, 1), rgba(243, 243, 243, .6));
    }
  }
</style>