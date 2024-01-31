// goodsInfo.js
const url = getApp().globalData.API_URL;
const Uid = getApp().globalData.uid;
Component({
  data: {
    uid:getApp().globalData.uid,
    pid: '',
    value: '0', //数量计数
    caloricSum: '',
    goodsInfo: {},
    status: ['可编辑', '已删除'],
    kindtext: ['饮食', '运动', '常用', '自定义项目'],
    upInfo: '',
    upSpecification: '',
    upCaloric: '',
    upKind: '',

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
        url: `${url}/sys-products/find/pid/${pid}`,
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
    showPicker(e) {
      const {
        mode
      } = e.currentTarget.dataset;
      this.setData({
        mode,
        [`${mode}Visible`]: true,
      });
    },
    hidePicker() {
      const {
        mode
      } = this.data;
      this.setData({
        [`${mode}Visible`]: false,
      });
    },
    onConfirm(e) {
      const {
        value
      } = e.detail;
      const {
        mode
      } = this.data;
      // 获取用户选择的年、月、日
      const selectedTime = new Date(value);
      const year = selectedTime.getFullYear();
      const month = selectedTime.getMonth();
      const day = selectedTime.getDate();
      // 获取当前时间的时、分、秒
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      // 构建新的日期对象，日期部分为用户选择的年、月、日，时、分、秒部分为当前时间的时、分、秒
      const timestampDate = new Date(year, month, day, hours, minutes, seconds);
      // 获取该新日期对象的时间戳
      const timestamp = timestampDate.getTime(); // 获取选中时间的时间戳
      console.log('confirm', value);
      this.setData({
        [mode]: value,
        [`${mode}Text`]: value,
        timeStamp: timestamp, // 存储时间戳
      });
      this.hidePicker();
    },
    onColumnChange(e) {
      console.log('pick', e.detail.value);
    },
    // 步进器值，用于添加记录数量，并计算卡路里总量
    handleChange(e) {
      const goodsInfo = this.data.goodsInfo;
      const {
        value
      } = e.detail;
      this.setData({
        value,
        caloricSum: parseInt(value) * goodsInfo.caloric,
      });
    },
    // 添加大订单（order）
    addOrder(e) {
      const timeStamp = this.data.timeStamp;
      const uid = this.data.uid;
      wx.request({
        url: `${url}/sys-orders/exists?date=${timeStamp}&uid=${uid}`,
        method: 'POST',
        success: function (res) {
          console.log('数据发送成功', res);
          // 这里可以处理后端响应的数据
        },
        fail: function (err) {
          // 500是已有记录，取消报错提示
          if (err.statusCode !== 500) {
            console.error('数据发送失败', err);
          }
        },
      });
    },
    // 添加详情记录（details）
    addDetails() {
      this.addOrder(); //每次添加details前先添加order，防止order未生成
      const caloricSum = this.data.caloricSum;
      const timeStamp = this.data.timeStamp;
      const uid = this.data.uid;
      const goodsInfo = this.data.goodsInfo;
      const quantity = this.data.value;
      wx.request({
        url: `${url}/sys-detail/add?caloricSum=${caloricSum}
        &date=${timeStamp}
        &info=${goodsInfo.info}
        &kind=${goodsInfo.kind}
        &name=${goodsInfo.name}
        &pid=${goodsInfo.pid}
        &quantity=${quantity}
        &specification=${goodsInfo.specification}
        &uid=${uid}`,
        method: 'POST',
        success: function (res) {
          console.log('数据发送成功', res);
          if (res.data.status == "400"){
            wx.showToast({
              title: '添加失败',
              icon: 'error',
              duration: 2000//持续的时间
            })
          }else{
            wx.showToast({
              title: '添加成功请刷新',
              icon: 'success',
              duration: 2000//持续的时间
            })
            // 关闭当前页面，跳转页面。
            setTimeout(function(){
              wx.switchTab({
                url: '../goodsList/goodsList'
              });
            },2000)
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
          if (res.data.status == "500"){
            wx.showToast({
              title: '删除失败',
              icon: 'error',
              duration: 2000//持续的时间
            })
          }else{
            wx.showToast({
              title: '删除成功请刷新',
              icon: 'success',
              duration: 2000//持续的时间
            })
            // 关闭当前页面，跳转页面。
            setTimeout(function(){
              wx.switchTab({
                url: '../goodsList/goodsList'
              });
            },2000)
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
    },
    // 获取input
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
    updateGoodsInfo() {
      if (!this.data.goodsInfo) {
        this.setData({
          goodsInfo: {} // 初始化 goodsInfo 对象为空对象
        });
      }
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
      wx.request({
        url: `${url}/sys-products/upd`,
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
    }


  },
});