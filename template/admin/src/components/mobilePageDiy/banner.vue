<template>
  <div class="mobile-page" :style="{ marginTop: `${mTOP}px` }">
    <div
      class="bg"
      :style="{
        background: `linear-gradient(90deg,${bgColor[0].item} 0%,${bgColor[1].item} 100%)`,
      }"
      v-if="bgColor.length > 0 && isShow"
    ></div>
    <div v-if="!isShow" class="bgset"></div>
    <div
      class="banner"
      :style="{
        paddingLeft: edge + 'px',
        paddingRight: edge + 'px',
      }"
    >
      <img :class="{ doc: imgStyle }" :src="imgSrc" alt="" v-if="imgSrc" />
      <div class="empty-box" :class="{ on: imgStyle }" v-else>
        <span class="iconfont-diy icontupian"></span>
      </div>
    </div>
    <div>
      <div
        class="dot"
        :style="{
          paddingLeft: edge + 10 + 'px',
          paddingRight: edge + 10 + 'px',
          justifyContent:
            dotPosition === 1
              ? 'center'
              : dotPosition === 2
              ? 'flex-end'
              : 'flex-start',
        }"
        v-if="docStyle == 0"
      >
        <div class="dot-item" :style="{ background: `${dotColor}` }"></div>
        <div class="dot-item"></div>
        <div class="dot-item"></div>
      </div>
      <div
        class="dot line-dot"
        :style="{
          paddingLeft: edge + 10 + 'px',
          paddingRight: edge + 10 + 'px',
          justifyContent:
            dotPosition === 1
              ? 'center'
              : dotPosition === 2
              ? 'flex-end'
              : 'flex-start',
        }"
        v-if="docStyle == 1"
      >
        <div class="line_dot-item" :style="{ background: `${dotColor}` }"></div>
        <div class="line_dot-item"></div>
        <div class="line_dot-item"></div>
      </div>
      <div
        class="dot number"
        :style="{
          paddingLeft: edge + 10 + 'px',
          paddingRight: edge + 10 + 'px',
          justifyContent:
            dotPosition === 1
              ? 'center'
              : dotPosition === 2
              ? 'flex-end'
              : 'flex-start',
        }"
        v-if="docStyle == 2"
      >
        <div class="num">1/3</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "banner", // ????????????
  cname: "?????????", // ????????????
  icon: "icontupianguanggao1",
  defaultName: "swiperBg", // ??????????????????
  configName: "c_banner", // ??????????????????
  type: 0, // 0 ???????????? 1 ???????????? 2????????????
  props: {
    index: {
      type: null,
    },
    num: {
      type: null,
    },
  },
  computed: {
    ...mapState("mobildConfig", ["defaultArray"]),
  },
  watch: {
    pageData: {
      handler(nVal, oVal) {
        this.setConfig(nVal);
      },
      deep: true,
    },
    num: {
      handler(nVal, oVal) {
        let data = this.$store.state.mobildConfig.defaultArray[nVal];
        this.setConfig(data);
      },
      deep: true,
    },
    defaultArray: {
      handler(nVal, oVal) {
        let data = this.$store.state.mobildConfig.defaultArray[this.num];
        this.setConfig(data);
      },
      deep: true,
    },
  },
  data() {
    return {
      // ?????????????????????????????????
      defaultConfig: {
        name: "swiperBg",
        timestamp: this.num,
        setUp: {
          tabVal: 0,
        },
        // ????????????
        // tabConfig: {
        //   tabVal: 0,
        //   type: 1,
        //   tabList: [
        //     {
        //       name: "????????????",
        //       icon: "iconbanner_1",
        //     },
        //     {
        //       name: "????????????1",
        //       icon: "iconbanner_2",
        //     },
        //     {
        //       name: "????????????2",
        //       icon: "iconbanner_3",
        //     },
        //   ],
        // },
        // ????????????
        swiperConfig: {
          title:
            "???????????????10????????????????????????750px?????????????????????????????????????????? ??????",
          maxList: 10,
          list: [
            {
              img: "",
              info: [
                {
                  title: "??????",
                  value: "????????????",
                  tips: "??????????????????4??????",
                  max: 4,
                },
                {
                  title: "??????",
                  value: "",
                  tips: "???????????????",
                  max: 100,
                },
              ],
            },
          ],
        },
        isShow: {
          title: "?????????????????????",
          val: true,
        },
        // ????????????
        bgColor: {
          title: "????????????(??????)",
          default: [
            {
              item: "#F62C2C",
            },
            {
              item: "#F96E29",
            },
          ],
          color: [
            {
              item: "#F62C2C",
            },
            {
              item: "#F96E29",
            },
          ],
        },
        dotColor: {
          title: "???????????????",
          default: [
            {
              item: "#fff",
            },
          ],
          color: [
            {
              item: "#fff",
            },
          ],
        },
        // ????????????
        lrConfig: {
          title: "????????????",
          val: 10,
          min: 0,
        },
        // ????????????
        mbConfig: {
          title: "????????????",
          val: 0,
          min: 0,
        },
        // ??????????????????
        docConfig: {
          cname: "swiper",
          title: "???????????????",
          type: 0,
          list: [
            {
              val: "??????",
              icon: "iconDot",
            },
            {
              val: "??????",
              icon: "iconSquarepoint",
            },
            {
              val: "??????",
              icon: "iconshuzi",
            },
            {
              val: "????????????",
              icon: "iconjinyong",
            },
          ],
        },
        txtStyle: {
          title: "???????????????",
          type: 0,
          list: [
            {
              val: "??????",
              icon: "icondoc_left",
            },
            {
              val: "??????",
              icon: "icondoc_center",
            },
            {
              val: "??????",
              icon: "icondoc_right",
            },
          ],
        },
        // ????????????
        imgConfig: {
          cname: "docStyle",
          title: "???????????????",
          type: 0,
          list: [
            {
              val: "??????",
              icon: "iconPic_fillet",
            },
            {
              val: "??????",
              icon: "iconPic_square",
            },
          ],
        },
      },
      pageData: {},
      bgColor: [],
      mTOP: 0,
      edge: 0,
      imgStyle: 0,
      imgSrc: "",
      docStyle: 0,
      dotPosition: 0,
      dotColor: "",
      isShow: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.pageData = this.$store.state.mobildConfig.defaultArray[this.num];
      this.setConfig(this.pageData);
    });
  },
  methods: {
    setConfig(data) {
      if (!data) return;
      if (data.mbConfig) {
        this.isShow = data.isShow.val;
        this.bgColor = data.bgColor.color;
        this.mTOP = data.mbConfig.val;
        this.edge = data.lrConfig.val;
        this.imgStyle = data.imgConfig.type;
        this.imgSrc = data.swiperConfig.list.length
          ? data.swiperConfig.list[0].img
          : "";
        this.docStyle = data.docConfig.type;
        this.dotPosition = data.txtStyle.type;
        this.dotColor = data.dotColor.color[0].item;
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.empty-box {
  height: 170px;
}

.mobile-page {
  position: relative;
  width: auto;

  /* height: 140px; */
  .banner {
    /* position: absolute; */
    /* left: 0; */
    /* top: 0; */
    width: 100%;
    margin-top: -48px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 6px;

      &.doc {
        border-radius: 0;
      }
    }
  }

  .bg {
    width: 100%;
    height: 50px;
    background: linear-gradient(90deg, #F62C2C 0%, #F96E29 100%);
  }

  .bgset {
    width: 100%;
    height: 50px;
  }
}

.dot {
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;

  &.number {
    bottom: 4px;
  }

  .num {
    width: 25px;
    height: 18px;
    line-height: 18px;
    background-color: #000;
    color: #fff;
    opacity: 0.3;
    border-radius: 8px;
    font-size: 12px;
    text-align: center;
  }

  .dot-item {
    width: 5px;
    height: 5px;
    background: #AAAAAA;
    border-radius: 50%;
    margin: 0 3px;
  }

  &.line-dot {
    bottom: 20px;

    .line_dot-item {
      width: 8px;
      height: 2px;
      background: #AAAAAA;
      margin: 0 3px;
    }
  }
}
</style>
