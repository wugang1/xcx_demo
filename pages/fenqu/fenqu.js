// pages/fenqu/fenqu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fenqu:"",
    //标题title
    fytitle:"",
    //标题下标
    fjNum:"",
    //标签下的数据
    movie:[
      
    ],
    id:'',
    name:'',
    //滑动标签
    biaoqian:''
  },
  fjPro:function(e){
    var then = this;
    console.log(e.currentTarget.dataset.key);
    this.setData({
      fjNum: e.currentTarget.dataset.key
    })
    wx.request({
      url: 'http://www.fufugay.com/index/api/kewordscon',
      method:'POST',
      header:{
        'content-type':'application/x-www-form-urlencoded'
      },
      data:{
        'content': then.data.biaoqian[e.currentTarget.dataset.key].labelname,
        'cateid': then.data.id,
        
      },
      success:function(res){
        console.log(992, then.data);
        then.setData({
          movie:res.data,
        })
      }
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(787878,options);
    var then=this;
    var app = getApp();
    this.data.id=app.globalData.fqId;
    this.data.name= app.globalData.fqName;
    console.log(666, this.data.id, this.data.name, app.globalData)
    this.setData({
      fenqu: app.globalData.fenqu,
      fytitle: app.globalData.fuye.tp[app.globalData.fenqu].catename
    })
    wx.setNavigationBarTitle({
      title:this.data.fytitle
    })
    wx.request({
      url: 'http://www.fufugay.com/index/api/keywordsname',
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        then.setData({
          biaoqian:res.data
        })
        console.log(3232,then.data.biaoqian);
      }
    })
      wx.request({
        url: 'http://www.fufugay.com/index/api/kewordscon',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'content': '爱情',
          'cateid': then.data.id,

        },
        success: function (res) {
          console.log(999, res);
          then.setData({
            movie: res.data,
          })
        }
      })
    // console.log(this.data.fytitle)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      fjNum:0
    })

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