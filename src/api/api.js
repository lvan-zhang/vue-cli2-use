import util from '../libs/util'

const API = {
  getTest (data) {
    return util.ajax.get('/do/gettest', {
      responseType: 'json',
      params: data
    })
  },
  postTest (data) {
    return util.ajax.post('/do/posttest', util.transParams(data), util.headersUrlencoded)
  }
}
export default API
