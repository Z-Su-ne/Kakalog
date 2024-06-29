const url = getApp().globalData.API_URL;
const app = getApp();

Page({
  data: {
    uid: '',
    pw: '', 
    name:'',
  },

  onLoad(){
    wx.removeStorageSync('token')
  },

  getUID(e) {
    this.setData({
      name: e.detail.value 
    });
  },

  getPassword(e) {
    this.setData({
      pw: e.detail.value 
    });
  },

  loadByAccount() {
    const name = this.data.name; 
    const pw = this.data.pw;
    const app =getApp();
    wx.request({
      url: `${url}/sys-user/find/name/${name}`,
      method: 'GET',
      success: function (res) {
        console.log('数据发送成功', res);
        console.log('账号', res.data.uid);
        console.log('数据发送成功', res.data);
        if ( res.data.password === pw) {
          wx.showToast({
            title: '登录成功',
            icon: "success",
            duration: 2000,
            success() {
              app.globalData.uid = res.data.uid;
              setTimeout(() => {
                wx.navigateTo({
                  url: '/pages/tip/tip',
                });
              }, 2000);
              wx.setStorageSync('token', res.data.uid)
              console.log("全局UID为：" + app.globalData.uid);
            }
          });
        } else {
          wx.showToast({
            title: '用户名或密码错误',
            icon: 'error',
            duration: 2000
          });
        }
      },
      fail: function (err) {
        console.error('数据发送失败', err);
        wx.showToast({
          title: '失败请重试',
          icon: 'error',
          duration: 2000
        });
      },
    });
  },

  register: function () {
    wx.navigateTo({
      url: '/pages/my/register/register',
    });
  },
});
