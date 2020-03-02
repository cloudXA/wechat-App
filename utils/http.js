import { config } from '../config.js'


class HTTP {
  constructor() {
    this.baseRestUrl = config.api_base_url
  }

  request(params) {
    // this指向new HTTP实例，有个属性baseRestUrl
    var that = this
    var url = this.baseRestUrl + params.url;
    if (!params.method) {
      params.method = 'GET';
    }
    wx.request({
      url: url,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey':config.appkey
      },
      method: params.method,
      success: (result) => {
        var code = result.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          params.success && params.success(result.data);
        } else {
          params.error && params.error(result)
        }
      },
      fail: (err) => {
        params.fail && params.fail(err)
      }
    })
  }
}

export { HTTP }