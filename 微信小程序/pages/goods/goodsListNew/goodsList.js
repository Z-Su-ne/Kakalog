const url = getApp().globalData.API_URL;
const Uid =  getApp().globalData.uid;
Component({
  data: {
    current: 0,
    stickyProps: {
      zIndex: 2,
    },
    isKind: "kind0", //更新方法后，isKind用于区分后端请求函数
    sumCalories: 0, // 用于存储总热量
    goodsList: {}, // 用于显示饮食与运动
  },
  attached() {
    this.getGoodsList();
  },
  methods: {
    // 类别获取
    onTabsChange(event) {
      // console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
      this.setData({
        current: event.detail.value,
      });
    },
    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
      this.setData({
        current: event.detail.value,
      });
      this.updateIsKind(event.detail.value);
    },
    onStickyScroll(event) {
      console.log(event.detail);
    },
    // 更新 isKind 的值
    updateIsKind(current) {
      // console.log(`Updating isKind with current index: ${current}`);
      // const flag = current === "0" ? "kind0" : "kind";
      const flag ="kind"+current;
      console.log(`New isKind value will be: ${flag}`);
      this.setData({
        current: current,
        isKind: flag
      });
    },
    // 列表获取
    getGoodsList() {
      let that = this;
      const current = this.data.current;
      const isKind = this.data.isKind;
      // console.log("现在uid:" + wx.getStorageSync('token'))
      let requestUrl = `${url}/sys-products/find/${isKind}/${current}/${Uid}`;
      wx.request({
        url: requestUrl, // 使用选择的 URL`
        method: 'GET',
        success: function (res) {
          console.log(requestUrl);
          // console.log('从后端获取的数据：', res.data);
          that.setData({
            goodsList: res.data, // 正确更新 goods
          });
          console.log(that.data.goodsList); // 访问正确的 goods
        },
        fail: function (err) {
          console.error('请求失败', err);
        },
      });
    },

    // 详情查看
    toGoodsInfo(event) {
      const pid = event.currentTarget.dataset.pid; // 获取点击的食物pid
      wx.navigateTo({
        url: `/pages/goods/goodsInfo/goodsInfo?pid=${pid}`, // 传递食物pid到goodsInfo页面
      });
    },

    // 添加新goods
    toAdd() {
      wx.navigateTo({
        url: '../goodsAdd/goodsAdd',
      })
    },

    // 跳转历史记录
    toDetails() {
      wx.navigateTo({
        url: '../../detail/details_new/details',
      })
    },
  },
});