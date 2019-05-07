//index.js
//获取应用实例
const app = getApp()
var page
var page1=1
var page2=1
var page3=1
var page4=1
Page({
  data: {
    inputValue:'',
    checked:17,
    list:"",
    listitem:""
  },
  jump_item(e){
    wx.navigateTo({
      url: '/pages/video/video_xqy/video_xqy?id='+e.currentTarget.dataset.id,
    })
    console.log(e.currentTarget.dataset.id
)
  },
  inputBind:function(event){
    this.setData({
      inputValue: event.detail.value
    })
  },
  seek(){
    wx.navigateTo({
      url: '/pages/seek/seek',
    })
  },
  checked(e){
    this.setData({
      checked: e.target.dataset.num
    })
    
      wx.request({
        url: 'http://www.fufugay.com/index/api/catecontent',
        data: {
          cateid: e.target.dataset.num
        },
        method: 'POST',
        header: {
          "Content-Type": 'application/x-www-form-urlencoded',
        },
        success: (res) => {
          console.log(res.data)
          this.setData({
            listitem: res.data
          })
        }
      })
    
  
    
  },
  onLoad: function () {
   wx.request({
     url: 'http://www.fufugay.com/index/api/cate',
     success:(res)=>{
       console.log(res.data)
       this.setData({
         list:res.data
       })
     }
   })
    wx.request({
      url: 'http://www.fufugay.com/index/api/catecontent',
      data:{
        cateid: this.data.checked
      },
      method: 'POST',
      header: {
        "Content-Type": 'application/x-www-form-urlencoded',
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          listitem: res.data
        })
      }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1
    if (that.data.checked==17){
      page1 = page1 + 1;
      page=page1
    } else if (that.data.checked == 16){
      page2 = page2 + 1;
      page = page2
    } else if (that.data.checked == 18){
      page3 = page3 + 1;
      page = page3
    }else{
      page4 = page4 + 1;
      page = page4
    }
  
   
    wx.request({
      url: 'http://www.fufugay.com/index/api/homepage' ,
      method: "Post",
      data:{
        cateid:that.data.checked,
        page:page
      },
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      success: function (res) {
        console.log(page)
       console.log(res.data)
        if(res.data==""){
          wx.hideLoading();
          wx.showToast({
            title: '没有更多数据',
            icon: 'none',
            duration: 1500
          })
        }else{
        // 回调函数
        // var moment_list = that.data.listitem;

        // for (var i = 0; i < res.data.length; i++) {
        //   moment_list.push(res.data.data[i]);
        //  }
        //  console.log(moment_list)
        var a=that.data.listitem
        for(var i of res.data){
         a.push(i)
        }
        console.log(a)
          that.setData({
            listitem:a
          })
        }
        // 设置数据
        // that.setData({
        //   moment: that.data.moment
        // })
        // 隐藏加载框
        wx.hideLoading();
      }
    })
  },
})

    