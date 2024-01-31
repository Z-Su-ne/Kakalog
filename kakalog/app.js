App({

  globalData: {
    statusBarHeight: wx.getSystemInfoSync()['statusBarHeight'], // 获取导航栏的高度
    statusBarHeight: wx.getSystemInfoSync()['navBarHeight'], // 获取导航栏的高度
    uid: '',

    // 手机热点连接电脑，命令行ipconfig使用笔记本热点ip即可实现真机调试时调用后端数据库
    // API_URL : 'http://192.168.20.6:8076'
    API_URL: 'http://localhost:8080',
  },

  onLaunch() {
    ``
    // 获取手机信息以配置顶栏
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.statusBarHeight = res.statusBarHeight
        this.globalData.navBarHeight = 44 + res.statusBarHeight
        this.globalData.screenWidth = res.screenWidth
        this.globalData.screenHeight = res.screenHeight
      },
    })
    // let token = new Token();
    // token.verify();
  },
  onLaunch: function () {
    this.login() // 调用
  },

  login: function () {
    // wx.login()获取code
    wx.login({
      success: (res) => {
        console.log("code: " + res.code);
      }
    })
  }

})