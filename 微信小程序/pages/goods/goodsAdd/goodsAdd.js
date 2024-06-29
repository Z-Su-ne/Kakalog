// goodsInfo.js
const url = getApp().globalData.API_URL;
const Uid = getApp().globalData.uid;
const app = getApp();
Component({
  data: {
    uid: app.globalData.uid,
    pid: '',
    value: '0', //数量计数
    caloricSum: '',
    goodsInfo: {},
    // status: ['可编辑', '已删除'],
    kindtext: ['饮食', '运动'],
    upuid: app.globalData.uid,
    upName: '',
    upInfo: '',
    upSpecification: '',
    upCaloric: '',
    upKind: 1,
    // upKind: null,

  },
  methods: {
    // 加载
    onLoad(options) {
      const {
        pid
      } = options;
      console.log('从上一个页面接收到的pid:', pid);
      this.setData({
        pid: pid,
      });
      this.getGoodsInfo();
    },
    // 获取上个界面产品的pid
    getGoodsInfo() {
      const pid = this.data.pid;
      let that = this;

      wx.request({
        url: `${url}/sys-products/find/pid/1`,
        method: 'GET',
        success: function (res) {
          console.log('从后端获取的数据：', res.data);
          that.setData({
            goodsInfo: res.data[0],
          });

          console.log(that.data.goodsInfo);
        },
        fail: function (err) {
          console.error('请求失败', err);
        },
      });
    },

    // 获取input
    handleNameInput(e) {
      console.log('NameInput值： ' + e.detail.value)
      this.setData({
        upName: e.detail.value
      })
    },
    handleInfoInput(e) {
      console.log('InfoInput值： ' + e.detail.value)
      this.setData({
        upInfo: e.detail.value
      })
    },
    handleSpecificationInput(e) {
      console.log('SpecificationInput值： ' + e.detail.value)
      this.setData({
        upSpecification: e.detail.value
      })
    },
    handleCaloricInput(e) {
      console.log('CaloricInput值： ' + e.detail.value)
      this.setData({
        upCaloric: e.detail.value
      })
    },
    handleKindInput() {
      // console.log('KindInput值： ' + e.detail.value)
      const oldKind = this.data.upKind;
      this.setData({
        // upKind: e.detail.value
        upKind: (oldKind+1)%2
      })
    },
    // 更新信息
    addGoods() {
      if (!this.data.goodsInfo) {
        this.setData({
          goodsInfo: {} // 初始化 goodsInfo 对象为空对象
        });
      }
      const goodsInfo = this.data.goodsInfo;
      const {
        upuid,
        upName,
        upInfo,
        upSpecification,
        upCaloric,
        upKind
      } = this.data;
      console.log(upuid + '!!!!!!!');
      goodsInfo.uid = upuid;
      if (upName !== '') {
        goodsInfo.name = upName;
      }
      if (upInfo !== '') {
        goodsInfo.info = upInfo;
      }
      if (upInfo !== '') {
        goodsInfo.info = upInfo;
      }
      if (upSpecification !== '') {
        goodsInfo.specification = upSpecification;
      }
      if (upCaloric !== '') {
        goodsInfo.caloric = parseFloat(upCaloric); // Assuming caloric value is a number
      }
      // if (upKind !== '4') {
      //   goodsInfo.kind = upKind;
      // }
      goodsInfo.kind = upKind+3;
      goodsInfo.uid = getApp().globalData.uid;
      wx.request({
        url: `${url}/sys-products/add`,
        method: 'POST',
        data: goodsInfo,
        success: function (res) {
          console.log('数据发送成功', res);
          console.log('数据发送成功', goodsInfo.uid);
          if (res.data.status == "500") {
            wx.showToast({
              title: '更新失败请刷新',
              icon: 'error',
              duration: 2000 //持续的时间
            })
            // 关闭当前页面，跳转页面。
            setTimeout(function () {
              wx.switchTab({
                url: '../goodsListNew/goodsList'
              });
            }, 2000)
          } else {
            wx.showToast({
              title: '新建成功',
              icon: 'success',
              duration: 2000 //持续的时间
            })
            setTimeout(function () {
              wx.switchTab({
                url: '../goodsListNew/goodsList'
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

      this.getGoodsInfo();

    },


  },
});