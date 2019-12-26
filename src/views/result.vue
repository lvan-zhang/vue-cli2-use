<template>
  <div id="home">
    <div class="top-logo"></div>
    <div class="main"
         @click="close"></div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
  name: 'Result',
  data () {
    return {
    }
  },
  methods: {
    close () {
      wx.closeWindow()
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: url(../assets/bg-index.png) no-repeat;
  background-size: cover;
  font-size: 0.3rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.top-logo {
  width: 3.92rem;
  height: 0.32rem;
  box-sizing: border-box;
  background: url(../assets/logo-company.png) no-repeat;
  background-size: cover;
  float: right;
  margin-top: 0.24rem;
  margin-right: 0.21rem;
}
.btn-submit {
  display: block;
  width: 2.51rem;
  height: 0.73rem;
  box-sizing: border-box;
  background: url(../assets/btn-submit.png) no-repeat;
  background-size: 100% auto;
  margin: 0.3rem auto;
}
.main {
  width: 4.91rem;
  height: 1.27rem;
  background: url(../assets/logo-result.png) no-repeat;
  background-size: 100% auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
