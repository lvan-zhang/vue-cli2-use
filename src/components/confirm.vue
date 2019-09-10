<template>
  <div class="confirm"
       v-show="isShowConfirm">
    <!-- <div class="confirm" v-show="show"> -->
    <div class="mask"></div>
    <div class="content">
      <div class="top"
           v-if="outerData !== 'noBtn'">
        <a href="javascript:;"
           class="close"
           @click="clickFun('clickClose')"></a>
      </div>
      <div class="main"
           :class="mainClass">
        <div class="title"
             v-html="titleText"></div>
        <div class="text"
             v-html="content"></div>
        <div class="btns"
             v-if="outerData !== 'noBtn'">
          <button type="button"
                  class="btn btn-continue"
                  @click="clickFun('clickConfirm')">{{confirmText}}</button>
          <button type="button"
                  class="btn btn-cancel"
                  @click="clickFun('clickCancel')"
                  v-if="type === 'confirm'">{{cancelText}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 使用方式：
// 打开：this.$refs.myConfirm.show(configObj)
// 关闭：this.$refs.myConfirm.hidden()
import dayjs from 'dayjs'
export default {
  name: 'Confirm',
  data () {
    return {
      isShowConfirm: false, // 用于控制整个窗口的显示/隐藏
      titleText: '操作提示', // 提示框标题
      content: '', // 提示框的内容
      cancelText: '取消', // 取消按钮的文字
      confirmText: '确认', // 确认按钮的文字
      type: 'alert', // 表明弹框的类型：confirm - 确认弹窗（有取消按钮）；alert - 通知弹框（没有取消按钮）
      mainClass: '',
      timer: null,
      time: null,
      outerData: null // 用于记录外部传进来的数据，也可以给外部监听userBehavior，事件的函数提供判断到底是哪个事件触发的
    }
  },
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  // model: {
  //   prop: 'show',
  //   event: 'change'
  // },
  methods: {
    // handleCancel () {
    //   this.$emit('change', false)
    // },
    show (config) {
      if (Object.prototype.toString.call(config) === '[object Object]') {
        // 确保传递的是一个对象
        this.titleText = config.titleText || ''
        this.content = config.content || ''
        this.cancelText = config.cancelText || '取消'
        this.confirmText = config.confirmText || '确认'
        this.type = config.type || 'alert'
        this.outerData = config.data || null
        this.mainClass = config.mainClass || ''
        this.time = config.time || ''
        if (this.time) {
          this.showTime(this.time)
        }
      }
      this.isShowConfirm = true
    },
    showTime (unixEnd) {
      let self = this
      let endTime = dayjs.unix(unixEnd)
      self.timer = setInterval(() => {
        let currentTime = dayjs()
        let restTime = endTime.diff(currentTime, 'mm:ss')
        if (restTime <= 0) {
          self.hidden()
          clearInterval(self.timer)
        } else {
          self.content = dayjs(restTime).format('mm:ss')
        }
      }, 1000)
    },
    hidden () {
      this.isShowConfirm = false
      // this.titleText = '操作提示'
      // this.cancelText = '取消'
      // this.confirmText = '确认'
      // this.type = 'alert'
      // this.outerData = null
      // this.time = null
      // this.mainClass = null
    },
    clickFun (type) {
      this.hidden()
      this.$emit('userBehavior', type, this.outerData)
    }
  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="less" scoped>
.confirm {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 9;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: #000;
  }
}
.content {
  width: 4.8rem;
  box-sizing: border-box;
  border-radius: 0.15rem;
  background-color: #fff;
  font-size: 0.3rem;
  position: relative;
  overflow: hidden;
  color: #7f03ed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  .top {
    width: 100%;
    height: 0.32rem;
    .close {
      width: 0.32rem;
      height: 100%;
      // background: url(../assets/icon/icon-del.svg) no-repeat;
      background-size: cover;
      float: right;
      margin: 0.2rem 0.2rem 0 0;
    }
  }
  .main {
    padding: 0.4rem 0.4rem 0 0.4rem;
    .title {
      font-size: 0.36rem;
      font-weight: bold;
      text-align: center;
      font-style: italic;
      font-stretch: normal;
      line-height: 0.48rem;
      letter-spacing: 0.01rem;
      color: #7f03ed;
      margin-bottom: 0.36rem;
    }
  }
  .main-center {
    .text {
      text-align: center;
    }
  }
  .main-center-padding {
    padding: 0.4rem;
    .text {
      text-align: center;
    }
  }
  .btns {
    margin-top: 0.76rem;
  }
  .btn {
    width: 4rem;
    height: 0.8rem;
    background-color: #7f03ed;
    border-radius: 0.4rem;
    line-height: 0.8rem;
    text-align: center;
    color: #fff;
    margin-bottom: 0.4rem;
    border: none;
  }
  .btn-cancel {
    background-color: #aba2b3;
  }
}
</style>
