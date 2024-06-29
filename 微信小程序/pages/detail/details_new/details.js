const url = getApp().globalData.API_URL;
const app=getApp();
Page({
  data: {
    current: 0,
    mode: '',
    monthVisible: false,
    month: "",
    monthText: '',
    // 指定选择区间起始值
    start: '2020-01-01 00:00:00',
    end: '2030-12-12 12:12:12',
    detailsList: {}, // 用于显示饮食与运动
    isAll: "kind0",
  },
  onLoad() {
    this.initializeMonth();
    this.getDetailsList();
  },
  attached() {
    this.getDetailsList();
  },
  // 类别获取
  onTabsChange(event) {
    // console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    this.setData({
      current: event.detail.value,
    });
    // this.updateIsAll(event.detail.value);
    // this.getDetailsList();
  },
  onTabsClick(event) {
    // console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    this.setData({
      current: event.detail.value,
    });
    this.updateIsAll(event.detail.value);
    // this.getDetailsList();
  },
  onStickyScroll(event) {
    console.log(event.detail);
  },
  // 年月
  initializeMonth() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // 补齐两位
    this.setData({
      month: `${year}-${month}`
    });
  },
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
    console.log('confirm', value);
    this.setData({
      [mode]: value,
      [`${mode}Text`]: value,
    });
    this.hidePicker();
    const kind = this.data.current;
    this.updateIsAll(kind);
    this.getDetailsList();
  },
  onColumnChange(e) {
    console.log('pick', e.detail.value);
  },
  // 更新 isAll 的值
  updateIsAll(current) {
    // console.log(`Updating isAll with current index: ${current}`);
    // const flag = current === "0" ? "kind0" : "kind";
    // console.log(`New isAll value will be: ${flag}`);
    const flag = "kind" + current;
    this.setData({
      current: current,
      isAll: flag
    });
  },
  // 获取记录列表
  getDetailsList() {
    let that = this;
    const {
      current,
      month,
      isAll
    } = this.data;
    const uid=app.globalData.uid;
    const [year, monthNumber] = month.split('-');
    // 构建 URL 时使用最新的 isAll 值
    let requestUrl = `${url}/sys-detail/find/${isAll}/{uid}/{year}/{monthNumber}/{kind}?kind=${current}&month=${monthNumber}&uid=${uid}&year=${year}`;
    // console.log(`New isAll value will be: ${requestUrl}`);
    wx.request({
      url: requestUrl, // 使用选择的 URL
      method: 'GET',
      success: function (res) {
        console.log(requestUrl);
        // console.log('从后端获取的数据：', res.data);
        // 对返回的数据进行格式转换
        let transformedData = [];
        res.data.forEach(item => {
          const date = item.date.substring(6, 8);
          const existingDayData = transformedData.find(data => data.day === date);
          if (existingDayData) {
            existingDayData.data.push(item);
          } else {
            transformedData.push({
              day: date,
              data: [item]
            });
          }
        });
        // 将转换后的数据存储在 detailsList 中
        that.setData({
          detailsList: transformedData,
        });
        // console.log(that.data.detailsList);
      },
      fail: function (err) {
        console.error('请求失败', err);
      },
    });
  },
  // 添加新记录
  toAddOrder() {
    wx.switchTab({
      url: '../../goods/goodsListNew/goodsList',
    })
  },
  //查看详情
  // toDetailsInfo(event) {
  //   const did = event.currentTarget.dataset.did;
  //   console.log("记录的item.did:", did);
  //   wx.navigateTo({
  //     url: `/pages/detail/info/detailsInfo?did=${did}`, // 传递食物pid到detailsInfo页面
  //   });
  // },
  toDetailsInfo(event) {
    const did = event.currentTarget.dataset.did;
    console.log("记录的item.did:", did);
    wx.redirectTo({
      url: `/pages/detail/info/detailsInfo?did=${did}`, // 传递食物pid到detailsInfo页面
    });
  },
  

});