const url = getApp().globalData.API_URL;
const Uid = getApp().globalData.uid;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:getApp().globalData.uid,
    user:{},
    cur: {},
    position: [
      { value: 'top', text: '顶部弹出' },
      { value: 'left', text: '左侧弹出' },
      { value: 'center', text: '中间弹出' },
      { value: 'bottom', text: '底部弹出' },
      { value: 'right', text: '右侧弹出' },
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.getUser();
  },

  getUser() {
    let that = this;
    const uid =this.data.uid;
    wx.request({
      url: `${url}/sys-user/find/uid/${uid}`,
      method: 'GET',
      success: function (res) {
        console.log('从后端获取的数据：', res.data);
        that.setData({
          user: res.data, // 正确更新 goods
        });
        console.log(that.data.user); // 访问正确的 goods
      },
      fail: function (err) {
        console.error('请求失败', err);
      },
    });
  },

  onGoLogin() {
    wx.navigateTo({
      "url": "/pages/login/login"
    })
  },
  //定个目标
  onGoTarget() {
    wx.navigateTo({
      "url": "/pages/my/target/target"
    })
  },
  // 个人信息
//   onGoInfo() {
//     wx.navigateTo({
//       "url": "/pages/my/login/login"
//     })
//   },
onGoInfo: function() {
    const app = getApp();  
    const  uid= app.globalData.uid; // 获取全局的uid  
        
    if (uid) { // 检查用户是否已经登录  
      wx.navigateTo({  
        url: '/pages/my/info/info?uid=' + app.globalData.uid, // 导航到个人信息页面并传递uid  
            });
        } else {
            // 如果用户未登录，则跳转到登录页面  
      wx.navigateTo({  
        url: '/pages/my/login/login',
            });
        }
    },
  //关于我们
  onGoAbout() {
    wx.navigateTo({
      "url": "/pages/my/about/about"
    })
  },
  sign() {
    wx.getUserProfile({
      desc: 'desc',
      success: (res) => {
        console.log(res.userInfo);
      }
    })
  },
  handlePopup(e) {
    const { item } = e.currentTarget.dataset;

    this.setData(
      {
        cur: item,
      },
      () => {
        this.setData({ visible: true });
      },
    );
  },
  onVisibleChange(e) {
    this.setData({
      visible: e.detail.visible,
    });
  },

})