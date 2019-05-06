// pages/seekitem/seekitem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: "",
    checked: 1,
    title: ""
  },
  checked(e) {
    wx.request({
      url: 'http://www.fufugay.com/index/api/selects',
      data: {
        state: e.target.dataset.num,
        content: this.data.title
      },
      method: 'POST',
      header: {
        "Content-Type": 'application/x-www-form-urlencoded',
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          list: res.data,
          checked: e.target.dataset.num
        })
      }
    })
    this.setData({

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
    console.log(options.title)
    wx.request({
      url: 'http://www.fufugay.com/index/api/select',
      data: {
        content: options.title
      },
      method: 'POST',
      header: {
        "Content-Type": 'application/x-www-form-urlencoded',
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          list: res.data
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