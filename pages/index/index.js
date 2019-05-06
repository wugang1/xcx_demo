//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputValue:'',
    checked:17,
    list:"",
    listitem:""
  },
  jump_item(e){
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
  }
})
