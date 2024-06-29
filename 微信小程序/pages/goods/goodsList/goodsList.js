// goodsList.js
const url = getApp().globalData.API_URL;
Component({
  data: {
    current: null,
    options: [
      { value: 1, label: '饮食' },
      { value: 2, label: '运动' },
      { value: 3, label: '常用' },
      { value: 4, label: '自定义' },
    ],
    sumCalories: 0, // 用于存储总热量
    goodsList: {}, // 用于显示饮食与运动
  },
    onShow: function () {
        this.onLoad();
    },
  onLoad: function () {
    this.getGoodsList(); // Fetch data when the component loads
  },
  methods: {
    onChange(event) {
      const { value } = event.detail;
      this.setData({
        current: value,
      });
    },
    getGoodsList() {
      let that = this;
      const current =this.data.current;
      const uid =wx.getStorageSync('token');
      console.log("现在uid:"+wx.getStorageSync('token'))
      wx.request({
        url: `${url}/sys-products/find/kind/${current}/${uid}`,
        method: 'GET',
        success: function (res) {
          console.log('从后端获取的数据：', res.data);
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
    toGoodsInfo(event) {
      const pid = event.currentTarget.dataset.pid; // 获取点击的食物pid
      wx.navigateTo({
        url: `/pages/goods/goodsInfo/goodsInfo?pid=${pid}`, // 传递食物pid到goodsInfo页面
      });
    },
    toAdd(){
      wx.navigateTo({
        url: '../goodsAdd/goodsAdd',
      })
    },
    toDetails(){
      wx.navigateTo({
        url: '../../detail/details_new/details',
      })
    },
  },
});
