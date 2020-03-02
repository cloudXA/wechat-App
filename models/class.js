import { HTTP } from '../utils/http.js'

class Modelclass extends HTTP {
  
  getLike(scallback) {
    this.request({
      url: '/classic/latest',
      success: (result) => {
        scallback(result)
      },
    })
  }
}

export { Modelclass }