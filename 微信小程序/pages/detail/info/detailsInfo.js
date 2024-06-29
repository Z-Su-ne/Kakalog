// detailsInfo.js
const url = getApp().globalData.API_URL;
Component({
  data: {
    uid: '',
    pid: '',
    did: '',
    value: '0', //数量计数
    detailsInfo: {},
    productsInfo: {},
    kindtext: ['• 饮食', '• 运动', '• 收藏'],
    is3: [' 未收藏', ' 收藏中'],
    createDate:'',
    date:null,
  },
  methods: {
    // 获取上个界面产品的pid
    onLoad(options) {
      const {
        did
      } = options;
      console.log('从上一个页面接收到的did:', did);
      this.setData({
        did: did,
      });
      this.getDetailsInfo();
    },


    getDetailsInfo() {
      let that = this;
      wx.request({
        url: `${url}/sys-detail/find/did/${this.data.did}`,
        method: 'GET',
        success: function (res) {
          console.log('从sys-detail/find/did获取的数据：', res.data);
          console.log('从后端获取的pid数据：', res.data.pid);
          that.setData({
            detailsInfo: res.data,
          });
          that.setData({
            pid: res.data.pid,
            date:res.data.date,
            createDate:res.data.date,
          });
          //this.getProductsInfo();
          // wx.request({
          //   url: `${url}/sys-products/find/pid/${that.data.pid}`,
          //   method: 'GET',
          //   success: function (res) {
          //     console.log('从sys-products/find/pid获取的数据：', res.data);
          //     that.setData({
          //       productsInfo: res.data[0],
          //     });
          //   },
          //   fail: function (err) {
          //     console.error('请求失败', err);
          //   },
          // });
        },
        fail: function (err) {
          console.error('请求失败', err);
        },
      });
    },
    
    delGoodsInfo() {
      wx.showModal({
        title: '温馨提醒',
        content: '清确定是否要删除该记录',
        confirmText: '删除',
      }).then(res => {
        if (res.confirm) {
          wx.request({
            url: `${url}/sys-detail/updateDel/did/${this.data.detailsInfo.did}`,
            method: 'GET',
            success: function (res) {
              console.log('数据发送成功', res);
              if (res.data.status == "500") {
                wx.showToast({
                  title: '删除失败',
                  icon: 'error',
                  duration: 1000 //持续的时间
                })
              } else {
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 1000 //持续的时间
                })
                // 关闭当前页面，跳转页面。
                setTimeout(function () {
                  wx.navigateTo({
                    url: '/pages/detail/details_new/details'
                  });
                }, 1000)
              }
            },
            fail: function (err) {
              console.error('数据发送失败', err);
              wx.showToast({
                title: '失败!',
                icon: 'error',
                duration: 2000 //持续的时间
              })
            },
          })
        }
      });
    },   
  },
});
