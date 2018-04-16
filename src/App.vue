<template>
  <div class="font-serif mx-auto" id="app">
    <waterfall :class="next?'blur':''"/>
    <div class="start-interface flex flex-col items-center justify-end" :class="next?'show-login':''">
      <div class="logo w-full text-center">
        <img src="https://picsum.photos/150" @load="loaded" class="logo-image animated fadeInUp">
        <div class="logo-name animated fadeInUp">Image Life</div>
      </div>
      <div class="next-btn text-center animated fadeInUp" @click="next=!next">></div>
    </div>
  </div>
</template>

<script>
  import waterfall from './components/waterfall'
  import Iscroll from './components/Iscroll'

  // const deepstream = require('deepstream.io-client-js');
  // const client = deepstream('localhost:6020').login();

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
      // this.clientLogin();
    },
    filters: {},
    methods: {
      loaded(e){
        console.log(e);
      },
      clientLogin() {
        client.login({
          type: 'email',
          email: 'user@example.com',
          password: 'sesame'
        }, (success, data) => {
          if (success) {
            // data will be an object with {id: 'user-id'} plus
            // additional data specified in clientData
            // start application
            // client.getConnectionState() will now return 'OPEN'
          } else {
            // extra data can be returned from the permissionHandler as client data
            // both successful and unsuccesful logins

            // client.getConnectionState() will now return
            // 'AWAITING_AUTHENTICATION' or 'CLOSED'
            // if the maximum number of authentication
            // attempts has been exceeded.
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  @import './app.scss';
  @import "~animate.css/source/_base.css";
  @import "~animate.css/source/fading_entrances/fadeInUp.css";

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
        box-shadow: 0px 5px 5px #ccc;
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