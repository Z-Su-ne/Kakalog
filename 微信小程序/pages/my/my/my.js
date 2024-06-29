const url = getApp().globalData.API_URL;
const Uid = getApp().globalData.uid;
const app = getApp();
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    needRefresh:'',
    uid:app.globalData.uid,
    user:{},
    cur: {},
    health:[],
    Psex:101,
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

    onHide: function() {
        this.setData({
          needRefresh: true
        });
      },
      onShow: function() {
        if (this.data.needRefresh) {
          this.fetchData();
          this.setData({
            needRefresh: false
          });
        }
      },
      fetchData: function() {
        // 假设你通过网络请求获取了新的图片URL
        this.getUser();
        this.getUserHealth();
      },
    ready: function () {
        // 页面显示时执行
        this.getUser();
            this.getUserHealth();
      },
    onLoad: function (options) {
        wx.clearStorage();
            this.getUser();
            this.getUserHealth();
    },
    onReady:function(){
        this.getUser();
        this.getUserHealth();
    },
    
    UserInfo(){

    },
    getUser() {
        let that = this;
        const app=getApp();
        wx.request({
        url: `${url}/sys-user/find/uid/${app.globalData.uid}`,
        method: 'GET',
        success: function (res) {
            console.log('从后端获取用户的数据：', res.data);
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
    getUserHealth() {
        let that = this;
        const app=getApp();
        wx.request({
        url: `${url}/sys-health/find/${app.globalData.uid}`,
        method: 'GET',
        success: function (res) {
            console.log('从后端获取用户的数据：', res.data);
            that.setData({
            health: res.data, // 正确更新 goods
            });
            if(res.data.sex=="男"){
                that.setData({
                    Psex:101,
                })
            }else{
                that.setData({
                    Psex:102,
                })
            }
            console.log(that.data.user); // 访问正确的 goods
        },
        fail: function (err) {
            console.error('请求失败', err);
        },
        });
    },
    onGoLogin() {
        // wx.clearStorage();
        // wx.navigateTo({
        //   "url": "/pages/login/login"
        // })
        wx.clearStorageSync(); // 清除缓存 
        wx.clearStorage();
        const app = getApp();
        app.globalData.uid='';
        wx.reLaunch({url: '/pages/login/login'}); 
    
    },
  //定个目标
    onGoTarget() {
        wx.navigateTo({
        "url": "/pages/my/target/target"
        })
    },
  // 个人信息
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
    getUserList() {
        let com = this;  
        wx.request({
            url: `${url}/sys-user/find/uid/${app.globalData.uid}`,
            method: 'GET',
            success: function (res) {
                console.log('data', res.data)
                com.setData({
                    user: res.data
                });
                
            },
            fail(error) {
                // 处理请求失败的回调函数，可以根据需要进行错误处理或提示用户  
                console.error('请求用户名失败:', error);
            }
        });
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