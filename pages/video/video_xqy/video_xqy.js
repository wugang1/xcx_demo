// pages/video/video_xqy/video_xqy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tiaozhuan:[],
      time:"",
      list:[],
      sun:[],
     baidu:"",
     id:null,
     sum:""
  },
  //详情页接口
  jishu(e){
    console.log(e.currentTarget.dataset.key)
    var order = e.currentTarget.dataset.key+1
    console.log(this.data.sum)
    var that=this
      wx:wx.request({
        url: 'http://www.fufugay.com/index/api/jump',
        data:{
          media_id:that.data.id,
          sort_order: order
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success:(res)=>{
            console.log(res)
          wx.navigateTo({

            url: '/pages/video/video_twb/video_twb?url='+res.data.src, 
          
            success: function () {

            },       //成功后的回调；

            fail: function () { },         //失败后的回调；

            complete: function () { }      //结束后的回调(成功，失败都会执行)

          })
        }
    
      })
     
  },
  xiangqing:function(){
    var that=this
    let load=this;
    let time=this;
    let nums=this;
  wx:wx.request({
    url: 'http://www.fufugay.com/index/api/details',
    data: {
      id:that.data.id
    },
    method: 'POST',
    header:{
      "Content-Type": "application/x-www-form-urlencoded"

    },
    success:(res)=>{
      load.setData({
      list:res.data
      })
      var abc = res.data
      var aa;
      var chapter_nums;
       for(var a of abc){
        aa=a.time
         chapter_nums = a.chapter_nums;
       }
       var sum=[];
       
      for (var jun=1; jun < chapter_nums;jun++){
         
        sum.push(jun)
      }
      
      // console.log(typeof (nums));
      this.setData(
        {
          sum: sum
        }
      )
      
      var time = new Date(aa* 1000);
      time = time.toLocaleString();
      this.setData({
        time: time
      })
     
    
    },
    
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
   
    this.xiangqing();
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