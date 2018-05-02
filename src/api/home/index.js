import request from '../../utils/request'

export const getMsgSrv = (data) => {
  return request.get('/getMsg')
}