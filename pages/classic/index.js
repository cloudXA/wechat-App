// import { HTTP } from '../../utils/http'
// let http = new HTTP()
import { Modelclass } from '../../models/class.js'
let model = new Modelclass()

//pages/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    classic: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    model.getLike((data) => {
      this.setData({
        classic: data
      })
    });

    // http.request({
    //   url:'/classic/favor',
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
    // console.log(http)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
生命
  }


})