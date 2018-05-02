<template>
  <div>
    <h2>State的数据</h2>
    <h1>{{msg}}</h1>
    <h2>Getters的数据</h2>
    <h1>{{msgGt}}</h1>
    <h2>Axios的数据</h2>
    <h1>State:{{home_msg}}</h1>
    <h2>Getters:{{home_msgGt}}</h2>
    <h2>{{sex|cvtSex}}</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState, mapMutations} from 'vuex'
export default {
  data() {
    return {
      sex:1
    }
  },
  computed: {
    ...mapGetters(['msgGt', 'home_msgGt']),
    ...mapState({
      msg: state => state.msg,
      home_msg: state => state.home.msg
    })
  },
  methods: {
    ...mapActions(['setMsgAct', 'home_setMsgAct'])
  },
  mounted() {
    console.log('[utils 全局工具函数使用测试]:',
    this.$utils.parseTime(1520389324,'{y}-{m}-{d} {h}:{i}'))
    this.$utils.test()
    this.$utils.setStore("token",'Im a token')
    console.log(this.$utils.getStore("token"))
    this.$utils.removeStore("token")
    console.log(this.$utils.getStore("token"))
    console.log(this.$utils.parseURL('testurl'))
    this.home_setMsgAct()
    .then(res => {
      //常用控制台输出日志
        console.log('测试成功与否')
        console.log('[log]', res)
        console.info('[info]', res)
        console.warn('[warn]', res)
        console.error('[error]', res)
        console.table(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>
<style scoped>

</style>

