export default {
  parseTime: (time,cFormat) => {
    if (arguments.length === 0) {
      return null
    }

    if ((time + '').length <= 10) {
      time = +time * 1000
    }

    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
      date = time
    } else {
      date = new Date(parseInt(time))
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key]
      if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
      if(result.length > 0 && value < 10) {
        value = '0' + value
      }
      return value || 0
    })
    return time_str
  },

  test: () => {
    console.log('全局函数测试')
  },

   /**
    * 设置localStorage
    * @param  {[type]} name    [description]
    * @param  {[type]} content [description]
    * @return {[type]}         [description]
    */
   setStore: (name, content) => {
     if (!name) return;
     if (typeof content != 'string') {
       content = JSON.stringify(content)
     }
     window.localStorage.setItem(name,content)
   },
   /**
    * 获取localStorage
    * @param  {[type]} name [description]
    * @return {[type]}      [description]
    */
   getStore: (name) => {
     if(!name) return;
     return window.localStorage.getItem(name)
   },
   /**
    * 删除localStorage
    */
   removeStore: name => {
     if(!name) return;
     window.localStorage.removeItem(name)
   },

   //拼接后台url的函数
   parseURL: (url) => {
     return "http://localhost:3000/resource/" + url
   }
}