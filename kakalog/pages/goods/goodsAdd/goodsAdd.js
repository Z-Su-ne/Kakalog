// goodsInfo.js
const url = getApp().globalData.API_URL;
const Uid =  getApp().globalData.uid;
const app = getApp();
Component({
  data: {
    uid: app.globalData.uid,
    pid: '',
    value: '0', //数量计数
    caloricSum: '',
    goodsInfo: {},
    status: ['可编辑', '已删除'],
    kindtext: ['饮食', '运动', '常用', '自定义项目'],
    upName: '',
    upInfo: '',
    upSpecification: '',
    upCaloric: '',
    upKind: '4',

    //时间选择器
    mode: '',
    dateVisible: false,
    date: new Date().getTime(), // 支持时间戳传入
    dateText: '',
    timeStamp: '', //传给后端的时间戳，年月日为选中的日期，时分秒为当前时间
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
      // 时间和数量恢复初始状态
      this.setData({
        value: '0',
        caloricSum: 0,
        date: new Date().getTime(),
        dateText: '',
        timeStamp: '',
      });
      wx.request({
        url: `${url}/sys-products/find/pid/52`,
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
    // 时间选择器


    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },
    // 步进器值，用于添加记录数量，并计算卡路里总量

    // 添加大订单（order）

    // 添加详情记录（details）

    // 删除详情

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
    handleKindInput(e) {
      console.log('KindInput值： ' + e.detail.value)
      this.setData({
        upKind: e.detail.value
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
        upName,
        upInfo,
        upSpecification,
        upCaloric,
        upKind
      } = this.data;
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
      if (upKind !== '4') {
        goodsInfo.kind = upKind;
      }
      wx.request({
        url: `${url}/sys-products/add`,
        method: 'POST',
        data: goodsInfo,
        success: function (res) {
          console.log('数据发送成功', res);
          if (res.data.status == "500"){
            wx.showToast({
              title: '更新失败请刷新',
              icon: 'error',
              duration: 2000//持续的时间
            })
            // 关闭当前页面，跳转页面。
            setTimeout(function(){
              wx.switchTab({
                url: '../goodsList/goodsList'
              });
            },2000)
          }else{
            wx.showToast({
              title: '更新成功',
              icon: 'success',
              duration: 2000//持续的时间
            })
          }
        },
        fail: function (err) {
          console.error('数据发送失败', err);
          wx.showToast({
            title: '失败!',
            icon: 'error',
            duration: 2000//持续的时间
          })
        },
      });
      const pid = this.data.pid;
      console.log('当前pid:', parseInt(pid) + 1);
      this.setData({
        pid: parseInt(pid) + 1,
      });
      this.getGoodsInfo();
    
    },


  },
});