// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tp:[
      
      ]
  },
  tzfq: function (e) {
    var then=this;
    // console.log(e.currentTarget.dataset.key)   
    var app = getApp();
    app.globalData.fenqu = e.currentTarget.dataset.key;
    app.globalData.fuye = this.data;
    app.globalData.fqName = this.data.tp[e.currentTarget.dataset.key].catename;
    app.globalData.fqId = this.data.tp[e.currentTarget.dataset.key].id;
    wx.navigateTo({
      url: '../fenqu/fenqu'
    })
 
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var then=this;
   
   wx.request({
     url: 'http://www.fufugay.com/index/api/cate',
     method:'GET',
     success:function(res){
       then.setData({
         tp: res.data
       })
        console.log(then.data);
     }
   });
   
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