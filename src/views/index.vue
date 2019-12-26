<template>
  <div id="index">
    <div class="top-logo"></div>
    <div class="main"
         ref="main">
      <div v-for="item in questionsAll"
           :key="item.id"
           class="main-item">
        <!-- 标题 -->
        <div class="title"
             v-html="item.id + '.&nbsp;' + (item.type === 2 ? '[多选]' : '') + '&nbsp;' + item.title">
        </div>
        <!-- 遍历选项 -->
        <ul class="options">
          <li v-for="(ques,index) in item.options"
              :key="index">
            <input class="hide-input"
                   :value="ques[0]"
                   :type="item.type === 1 ?'radio':'checkbox'"
                   :id="('ques' + item.id) + index"
                   v-model="answerAll['answer' + item.id]">
            <label :for="('ques' + item.id) + index"
                   class="choice">
              <i>{{ques[0]}}</i>
              <div class="label-main">{{ques.substr(2)}}</div>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <button class="btn-submit"
            @click="submit"></button>
    <!-- <button class="btn-submit"
            v-stat="{ event_id: 'cb', event_comment: '提交' }"></button> -->
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex'
import questionsAll from '../../static/data/questions'
import { Toast } from 'vant'
import API from '../api/api'
export default {
  name: 'Index',
  data () {
    return {
      answerAll: {},
      questionsAll: questionsAll
    }
  },
  methods: {
    submit () {
      let resultLength = Object.keys(this.answerAll).length
      if (resultLength !== this.questionsAll.length) {
        Toast('还有题目未完成')
        return false
      }
      API.postTest(this.answerAll).then(res => {
        if (res.data.code === 200) {
          this.$router.push({
            name: 'Result'
          })
        } else {
          Toast(res.data.message)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#index {
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
  width: 100%;
  overflow-y: scroll;
  clear: right;
  .main-item {
    margin: 0 auto;
    box-sizing: border-box;
    background: #ffffff;
    width: 6.48rem;
    border-radius: 0.1rem;
    padding: 0.39rem 0.37rem;
    margin-top: 0.29rem;
  }
  .title {
    margin-bottom: 0.5rem;
    color: #2c4e85;
    font-size: 0.25rem;
    font-weight: bold;
  }
  .options {
    width: 100%;
    color: #2c4e85;
    font-size: 0.24rem;
    margin-left: 0.4rem;
    li {
      margin: 0.13rem 0;
    }
    .choice {
      display: flex;
      align-items: center;
      margin-top: 0.2rem;
      .label-main {
        width: 5.5rem;
      }
      i {
        display: inline-block;
        text-align: center;
        font-style: normal;
        vertical-align: top;
        width: 0.37rem;
        height: 0.37rem;
        margin-right: 0.4rem;
        background: radial-gradient(
          circle closest-side,
          #e8f1fc 50%,
          #e8f1fc 50%
        );
        border: 1px solid #561d67;
      }
    }
    input[type='text'] {
      border-radius: 0;
      outline: none;
    }
    .hide-input {
      display: none;
      .select {
        width: 0.2rem;
        height: 0.2rem;
        background: #2c4e85;
      }
    }
    .hide-input:checked + label > i {
      background: #2c4e85;
      color: #ffffff;
    }
  }
}
</style>
