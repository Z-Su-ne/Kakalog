const url = getApp().globalData.API_URL;

// pages/tip/tip.js
Page({
  data: {
    tips: [],
    images:["https://img2.imgtp.com/2024/04/29/NY5MuguR.gif",
            "https://img2.imgtp.com/2024/04/29/kxcc8UAo.gif",
            "https://img2.imgtp.com/2024/04/29/nMOgIfcH.gif",
            "https://img2.imgtp.com/2024/04/29/bpxXdXdX.gif"],
    image:'',
    title: '', // 初始化为字符串
    content: '' // 初始化为字符串
  },
  onLoad: function () {
    
    this.gettips();
    this.getiamges();
    
  },
  onShow:function(){
    setTimeout(function () {
      // 页面跳转到目标页面
      console.log("???????????")
      wx.switchTab({
        url:"/pages/index/index"
      })
    }, 3000); // 2秒后跳转
  },
  getiamges(){
    let that=this;
    console.log(that.data.images.length);
    var ran = Math.floor(Math.random() * (that.data.images.length));
    that.setData({
      image: that.data.images[ran]
    })
  },
  gettips() {
    let that = this;
    wx.request({
      url: `${url}/sys-tips/getalltips/`,
      method: 'GET',
      success: function (res) {
        console.log('从tips：', Object.values(res.data).length - 1);
        that.setData({
          tips: Object.values(res.data),
        });
        var who = Math.floor(Math.random() * (that.data.tips.length));
        console.log(who);
        that.setData({
          title: that.data.tips[who].title,
          content: that.data.tips[who].content
        });
        console.log("那条信息" + that.data.title + that.data.content); // 访问正确的 
      },
      fail: function (err) {
        console.error('请求失败', err);
      },
    });
  },
  onTapLogin: function () {

  }
});
