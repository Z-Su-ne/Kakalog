// goodsInfo.js
const url = getApp().globalData.API_URL;
const Uid = getApp().globalData.uid;
Component({
  data: {
    defaultVal: null,
    // note: ['', '未收藏', '未收藏', '收藏中', '收藏中'],
    note:['未收藏', '收藏中'],
    uid: getApp().globalData.uid,
    pid: '',
    value: '0', //数量计数
    caloricSum: '',
    goodsInfo: {},
    label: ['说明', '规格', '热量'],
    status: ['• 编辑中', '• 已删除'],
    is3: ['收藏中', '未收藏'],
    kindtext: ['','• 饮食 ', '• 运动 ', '• 饮食 ', '• 运动 ','• 收藏'],
    upInfo: '',
    upSpecification: '',
    upCaloric: '',
    upKind: null,

    //时间选择器
    mode: '',
    dateVisible: false,
    date: new Date().getTime(), // 支持时间戳传入
    dateText: '',
    timeStamp: '', //传给后端的时间戳，年月日为选中的日期，时分秒为当前时间
  },
  onLoad(options) {
    console.log('从上一个页面接收到的pid:', options.pid1);
    this.setData({
      pid: options.pid1,
    });
    this.getGoodsInfo();
    const kind = this.data.goodsInfo.kind;
    this.setData({
      // defaultVal: kind > 3 ? false : true,
      upKind: kind > 2 ? kind - 2 : kind, // 设置 upKind 的初始值
    })
  },
  methods: {
    // 加载
    onLoad(options) {
      // console.log('从上一个页面接收到的pid:',options.pid1);
      this.setData({
        pid: options.pid1,
      });
      this.getGoodsInfo();
      const kind = this.data.goodsInfo.kind;
      this.setData({
        defaultVal: kind > 3 ? false : true,
        upKind: kind > 2 ? kind - 2 : kind, // 设置 upKind 的初始值
      })
      // console.log(that.data.defaultVal);
    },
    // 获取上个界面产品的pid
    getGoodsInfo() {
      const pid = this.data.pid;
      let that = this;
      // 时间和数量恢复初始状态
      this.setData({
        value: '0',
        caloricSum: 0,
        date: new Date().getTime(),
        dateText: '',
        timeStamp: '',
      });
      wx.request({
        url: `${url}/sys-products/find/pid/${pid}`,
        method: 'GET',
        success: function (res) {
          console.log('从后端获取的数据：', res.data);
          that.setData({
            goodsInfo: res.data[0],
            upKind: res.data[0].kind,
            // upKind: res.data[0].kind > 2 ? res.data[0].kind - 2 : res.data[0].kind, 
            // 设置 upKind 的值
          });
        },
        fail: function (err) {
          console.error('请求失败', err);
        },
      });
    },

    // 开关
    handleChange(e) {
      console.log(e.detail.value);
      const upKind = e.detail.value ? (this.data.goodsInfo.kind % 2 == 1 ? 3 : 4) : (this.data.goodsInfo.kind % 2 == 1 ? 1 : 2);
      this.setData({
        defaultVal: e.detail.value,
        upKind: upKind,
      });
    },
    // 按钮
    upKindChange() {
      const oldKind = this.data.upKind;
      this.setData({
        // upKind: e.detail.value
        upKind: oldKind > 2 ? oldKind - 2 : oldKind + 2,
      })
    },

    // 删除详情
    delGoodsInfo() {
      let goodsInfo = this.data.goodsInfo;
      goodsInfo.delFlag = 1;
      this.setData({
        goodsInfo: goodsInfo
      });
      wx.request({
        url: `${url}/sys-products/del/${goodsInfo.pid}`,
        method: 'DELETE',
        success: function (res) {
          console.log('数据发送成功', res);
          if (res.data.status == "500") {
            wx.showToast({
              title: '删除失败',
              icon: 'error',
              duration: 2000 //持续的时间
            })
          } else {
            wx.showToast({
              title: '删除成功请刷新',
              icon: 'success',
              duration: 2000 //持续的时间
            })
            // 关闭当前页面，跳转页面。
            setTimeout(function () {
              wx.switchTab({
                url: '/pages/goods/goodsListNew/goodsList'
              });
            }, 2000)
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
      });
    },
    // 获取input
    handleInfoInput(e) {
      // console.log('InfoInput值： ' + e.detail.value)
      this.setData({
        upInfo: e.detail.value
      })
    },
    handleSpecificationInput(e) {
      // console.log('SpecificationInput值： ' + e.detail.value)
      this.setData({
        upSpecification: e.detail.value
      })
    },
    handleCaloricInput(e) {
      // console.log('CaloricInput值： ' + e.detail.value)
      this.setData({
        upCaloric: e.detail.value
      })
    },
    handleKindInput(e) {
      // console.log('KindInput值： ' + e.detail.value)
      this.setData({
        upKind: e.detail.value
      })
    },
    // 更新信息
    updateGoodsInfo() {
      if (!this.data.goodsInfo) {
        this.setData({
          goodsInfo: {} // 初始化 goodsInfo 对象为空对象
        });
      }
      const app = getApp();
      const goodsInfo = this.data.goodsInfo;
      const {
        upInfo,
        upSpecification,
        upCaloric,
        upKind
      } = this.data;
      if (upInfo !== '') {
        goodsInfo.info = upInfo;
      }
      if (upSpecification !== '') {
        goodsInfo.specification = upSpecification;
      }
      if (upCaloric !== '') {
        goodsInfo.caloric = parseFloat(upCaloric); // Assuming caloric value is a number
      }
      if (upKind !== '') {
        goodsInfo.kind = upKind;
      }
      if (app.globalData.uid == goodsInfo.uid) {
        wx.request({
          url: `${url}/sys-products/upd`,
          method: 'POST',
          data: goodsInfo,
          success: function (res) {
            console.log('数据发送成功', res);
            if (res.data.status == "500") {
              wx.showToast({
                title: '更新失败请刷新',
                icon: 'error',
                duration: 2000 //持续的时间
              })
              // 关闭当前页面，跳转页面。
              setTimeout(function () {
                wx.switchTab({
                  url: '/pages/goods/goodsListNew/goodsList'
                });
              }, 2000)
            } else {
              wx.showToast({
                title: '更新成功',
                icon: 'success',
                duration: 2000 //持续的时间
              })
              setTimeout(function () {
                wx.switchTab({
                  url: '/pages/goods/goodsListNew/goodsList'
                });
              }, 2000)
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
        });
        // const pid = this.data.pid;
        // console.log('当前pid:', parseInt(pid) + 1);
        // this.setData({
        //   pid: parseInt(pid) + 1,
        // });
        // this.getGoodsInfo();
      } else {
        // wx.showToast({
        //   title: '非用户创建',
        //   icon: 'none',
        //   duration: 2000 //持续的时间
        // })
        goodsInfo.uid = getApp().globalData.uid;
        wx.request({
          url: `${url}/sys-products/add`,
          method: 'POST',
          data: goodsInfo,
          success: function (res) {
            console.log('数据发送成功', res);
            if (res.data.status == "500") {
              wx.showToast({
                title: '更新失败请刷新',
                icon: 'error',
                duration: 2000 //持续的时间
              })
              // 关闭当前页面，跳转页面。
              setTimeout(function () {
                wx.switchTab({
                  url: '/pages/goods/goodsListNew/goodsList'
                });
              }, 2000)
            } else {
              wx.showToast({
                title: '更新成功',
                icon: 'success',
                duration: 2000 //持续的时间
              })
              setTimeout(function () {
                wx.switchTab({
                  url: '/pages/goods/goodsListNew/goodsList'
                });
              }, 2000)
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
        });
        // const pid = this.data.pid;
        // console.log('当前pid:', parseInt(pid) + 1);
        // this.setData({
        //   pid: parseInt(pid) + 1,
        // });
        // this.getGoodsInfo();
      }

    }


  },
});