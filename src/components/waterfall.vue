<template>
  <waterfall :watch="items"
             :line-gap="125"
             :min-line-gap="105"
             :max-line-gap="141">
    <waterfall-slot
      v-for="(item, index) in items"
      :width="item.image.width"
      :height="item.image.height"
      :order="index"
      :key="item.src"
      class="animated fadeInUp"
    >
      <img :src="item.dataUrl">
    </waterfall-slot>
  </waterfall>
</template>

<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
  import * as random from 'lodash/random'

  export default {
    components: {
      Waterfall,
      WaterfallSlot
    },
    data() {
      return {
        items: [],
      }
    },
    mounted() {
      this.fetch();
    },
    methods: {
      async fetch() {
        let i = 16;
        let three = [];
        while (i--) {
          const url = this.picsum(i);

          if (i % 4 !== 0 || !three.length) {
            three.push(this.getContentTxt(url));
          } else {
            three = await Promise.all(three);
            let len = three.length;
            while (len--) {
              const item = three[len];
              if (!item) continue;
              this.items.push(item);
            }
            three = [];
          }
        }
      },
      picsum(val) {
        return 'https://picsum.photos/160/' + random(100, 250) + '?image=' + (val + 1);
      },
      getContentTxt(url) {
        return new Promise(resolve => {
          //新建图片
          let image = new Image();
          //解决canvas无法读取画布问题
          image.setAttribute('crossOrigin', 'anonymous');
          //通加载图片完毕保证快速读取
          image.onload = () => {
            const dataUrl = this.getBase64Image(image);
            resolve({
              dataUrl,
              image
            });
          };
          image.src = url;
        });
      },
      getBase64Image(img) {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        return canvas.toDataURL("image/jpeg");
      }
    }
  }
</script>

<style lang="scss">
  .vue-waterfall{
    min-height: 100vh;
    
    img{
      vertical-align: middle;
    }
  }
</style>