<template>
  <div id="home">
    <Confirm ref="myConfirm"
             @userBehavior="userBehaviorFun"></Confirm>
    <button v-stat="{ event_id: 'cb', event_comment: '开始答题' }">打点测试</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import wx from 'weixin-js-sdk'
import API from '../api/api'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      state: (state) => {
        return Object.assign({}, state)
      }
    })
  },
  created () {
    // 获取题目和时间
    API.getQuestionsInfo().then(res => {
      if (res.data.code === 200) {
        this.replace({
          prop: 'quesTimeType',
          value: res.data.data
        }).then(res => {
          console.log('')
        })
      }
    })
  },
  methods: {
    ...mapActions(['replace']),
    useAlert () {
      let configObj = {
        titleText: '对不起', // 提示框标题
        content: '不在开放时间', // 提示框的内容
        confirmText: '确定', // 确认按钮的文字
        type: 'alert', // 表明
        data: 'toRank'
      }
      this.$refs.myConfirm.show(configObj)
    },
    userBehaviorFun (type, data) {
      // data是弹框传入的值，可以根据data来执行不同的操作
      if (data === 'toRank') {
        wx.closeWindow()
      }
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // background: url(../assets/bg_front.png) no-repeat;
  background-size: cover;
  font-size: 0.3rem;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
