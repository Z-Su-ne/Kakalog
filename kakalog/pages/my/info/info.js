    const url = getApp().globalData.API_URL;
    const Uid =  getApp().globalData.uid;
    const app = getApp()
    Component({
        // 定义页面数据  
        data: {
            uid:app.globalData.uid,
            text: "小程序",
            healths: [], // 用于存储从后端获取的健康数据列表  
        },
        methods: {
            onLoad: function (options) {
                const uid = options.uid
                const app = getApp();
                this.setData({  
                    uid: app.globalData.uid  // 将options.account的值赋给this.data.uid  
                });  
                // const uid = options.account;
                console.log('Account from login:', app.globalData.uid);
                this.getHealthsList(); 
            },
            onTap: function (uid) { // 添加uid作为参数  
                wx.navigateTo({  
                    url: '/pages/my/Alter/index?this.data.uid=' + uid, // 使用传递进来的uid  
                })      
            },  
            getHealthsList() {
                let com = this;  
                wx.request({
                    url: `${url}/sys-health/find/${app.globalData.uid}`,
                    method: 'GET',
                    success: function (res) {
                        console.log('data', res.data)
                        com.setData({
                            healths: res.data
                        });
                        
                    },
                    fail(error) {
                        // 处理请求失败的回调函数，可以根据需要进行错误处理或提示用户  
                        console.error('请求失败:', error);
                    }
                });
            },
        },
    });