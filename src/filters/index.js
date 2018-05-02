export default {
  cvtSex: sex => {
    switch (sex) {
      case 0: {
        return '无'
        break
      }
      case 1: {
        return '男'
        break
      }
      case 2: {
        return '女'
        break
      }
    }
  }
}