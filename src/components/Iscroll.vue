<template>
  <div ref="scrollView" class="iscroll-wrapper" :style="wrapperStyle" :class="wrapperClass">
    <div ref="scroller" class="iscroll-scroller" :style="scrollerStyle" :class="scrollerClass">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // import IScroll from 'iscroll'
  // import IScroll from 'iscroll/build/iscroll-infinite.js'
  // import IScroll from 'iscroll/build/iscroll-probe.js'
  // import IScroll from 'iscroll/build/iscroll-view.js'
  // import IScroll from 'iscroll/build/iscroll-zoom.js'
  import IScroll from 'iscroll/build/iscroll-lite.js';

  export default {
    props: {
      options: {
        type: Object,
        default() {
          return {}
        }
      },
      wrapperClass: {
        type: Object,
        default() {
          return {}
        }
      },
      wrapperStyle: {
        type: Object,
        default() {
          return {}
        }
      },
      scrollerClass: {
        type: Object,
        default() {
          return {}
        }
      },
      scrollerStyle: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      _registPullEvents() {
        const {iscroll} = this;
        iscroll.on('scrollEnd', e => {
          if (iscroll.y <= iscroll.maxScrollY) {
            this.$emit('pullUp', iscroll)
          } else if (iscroll.y >= 0) {
            this.$emit('pullDown', iscroll)
          }
        })
      },
      zoom() {
        this.$nextTick(() => this.iscroll.zoom.apply(this.iscroll, arguments))
      },
      goToPage() {
        this.$nextTick(() => this.iscroll.goToPage.apply(this.iscroll, arguments))
      },
      next() {
        this.$nextTick(() => this.iscroll.next.apply(this.iscroll, arguments))
      },
      prev() {
        this.$nextTick(() => this.iscroll.prev.apply(this.iscroll, arguments))
      },
      scrollToElement() {
        this.$nextTick(() => this.iscroll.scrollToElement.apply(this.iscroll, arguments))
      },
      scrollBy() {
        this.$nextTick(() => this.iscroll.scrollBy.apply(this.iscroll, arguments))
      },
      scrollTo() {
        this.$nextTick(() => this.iscroll.scrollTo.apply(this.iscroll, arguments))
      },
      refresh() {
        this.$nextTick(() => this.iscroll.refresh.apply(this.iscroll, arguments))
      }
    },
    beforeDestroy() {
      this.iscroll && this.iscroll.destroy();
      this.iscroll = null;
    },
    mounted() {
      const events = [
        'beforeScrollStart',
        'scrollCancel',
        'scrollStart',
        'scrollEnd',
        'scroll',
        'flick',
        'zoomStart',
        'zoomEnd'
      ];
      setTimeout(() => {
        let key;
        let value;
        let attributes = this.$refs.scrollView.attributes;
        this.$refs.scrollView.scrollTop = 0;
        for (key in attributes) {
          value = attributes[key];
          if (value instanceof global.Attr && value.name.indexOf('data-v-') > -1) {
            this.$refs.scroller.attributes.setNamedItem(document.createAttribute(value.name))
          }
        }
        try {
          global.location.hash && this.iscroll.scrollToElement(global.location.hash, 0)
        } catch (e) {
        }
      }, 0);
      this.$nextTick(() => {
        this.iscroll = new IScroll(this.$refs.scrollView, this.options);
        events.forEach(event => {
          this.iscroll.on(event, () => this.$emit(event, this.iscroll))
        });
        this._registPullEvents()
      })
    }
  }

  // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, (() => {
  //   let supportsPassiveOption = false;
  //   try {
  //     addEventListener("test", null, Object.defineProperty({}, 'passive', {
  //       get: function () {
  //         supportsPassiveOption = true;
  //       }
  //     }));
  //   } catch(e) {}
  //   return supportsPassiveOption;
  // })() ? {
  //   capture: false,
  //   passive: false
  // } : false);
</script>

<style lang="scss">
  .iscroll{
    &-wrapper{
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100vh;
      background: #ccc;
      overflow: hidden;
    }
    
    &-scroller{
      position: absolute;
      z-index: 1;
      width: 100%;
      min-height: 100vh;
      transform: translateZ(0);
      user-select: none;
      text-size-adjust: none;
    }
  }
</style>