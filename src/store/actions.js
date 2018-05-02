const actions = {
  setMsgAct: (context, { newMsg }) => {
    return new Promise((resolve, reject) => {
      context.commit('SET_MSG')
      resolve()
      //操作错误则reject()
    })
  }
}

export default actions