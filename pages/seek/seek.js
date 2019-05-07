// pages/seek/seek.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    list:"",
    seek:"",
    inputValue1:""

  },
  // 搜索框
  inputBind: function (event) {
    console.log(event.detail.value)
    wx.request({
      url: 'http://www.fufugay.com/index/api/input',
      data: {
        content: event.detail.value
      },
      method: 'POST',
      header: {
        "Content-Type": 'application/x-www-form-urlencoded',
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          seek:res.data,
          inputValue1: event.detail.value,
          inputValue:event.detail.value
        })
      }
    })
    // this.setData({
    //   inputValue: event.detail.value
    // })
  },
  // 大家都在搜
  item(e){
    console.log(e.target.dataset.title)
    console.log(e.target.dataset.id)
    wx.navigateTo({
      url: '/pages/video/video_xqy/video_xqy?id=' + e.target.dataset.id,
    })
  },
  // 搜索点击
  jumpitem(e){
    wx.navigateTo({
      url: '/pages/seekitem/seekitem?title=' + e.target.dataset.title,
    })
    console.log(e.target.dataset.title)
  },
  achieve(){
    if (this.data.inputValue){
      wx.navigateTo({
        url: '/pages/seekitem/seekitem?title=' + this.data.inputValue,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://www.fufugay.com/index/api/clickmost',
      data: {
       
      },
      method: 'POST',
      header: {
        "Content-Type": 'application/x-www-form-urlencoded',
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
        list:res.data
        })
      }
    })
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

  }
})