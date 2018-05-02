import { getMsgSrv } from '../../api/home'

const state = {
  msg: null
}

const mutations = {
  HOME_SET_MSG: (state, data) => {
    state.msg = data.msg
  }
}

const actions = {
  home_setMsgAct: (context) => {
    return new Promise((resolve,reject) => {
      getMsgSrv()
      .then(res => {
        if(res.status == '1') {
          context.commit('HOME_SET_MSG',res.data) //此操作是同步阻塞
          resolve({msg:'获取成功', data:res.data})
        }
        reject('获取失败')
      })
      .catch(err => {
        reject(error)
      })
    })
  }
}

const getters = {
  home_msgGt: (state, getters, rootState) => {
    return state.msg
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}