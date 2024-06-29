
// import * as wxCharts from '../../echarts/ec-canvas/echarts.js';
const url = getApp().globalData.API_URL; 
const Uid =  getApp().globalData.uid;
const app = getApp();
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
    {
      value: `${imageCdn}/swiper1.png`,
      ariaLabel: '图片1',
    },
    {
      value: `${imageCdn}/swiper2.png`,
      ariaLabel: '图片2',
    },
    {
      value: `${imageCdn}/swiper1.png`,
      ariaLabel: '图片1',
    },
    {
      value: `${imageCdn}/swiper2.png`,
      ariaLabel: '图片2',
    },
  ];
  
Page({
  onReady: function (e) {
    let lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
      series: [{
        name: '数据1',
        data: [100, 200, 150, 300, 200, 350, 300]
      }],
      width: 300,
      height: 200,
      tips: [],
      tip:''
    });
  }
});

  
Component({
  data: {
    health:{},
    DateCaloric:'暂无数据',
    caloriesDaily:'暂无数据',
    eatCan:'暂无数据',
    uid: app.globalData.uid,
    countday:'暂无数据',
    countorder:'暂无数据',
    countcaloric:'暂无数据',
    visible: false,
    value: null,
    tips: [],
    title:'',
    content:'',
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,


    cur: {},
      position: [
        { value: 'top', text: '顶部弹出' },
        { value: 'left', text: '左侧弹出' },
        { value: 'center', text: '中间弹出' },
        { value: 'bottom', text: '底部弹出' },
        { value: 'right', text: '右侧弹出' },
      ],
  },
  
  pageLifetimes: {
    show: function() {
        // 当页面显示时调用 updateData 方法
        this.gethealth();
        this.getDateCaloric();
        this.getCountcaloric();
        this.getCountday();
        this.getCountorder();
    }
    },
  ready: function () {
    // 页面显示时执行
    this.gethealth();
    this.getDateCaloric();
    this.getCountcaloric();
    this.getCountday();
    this.getCountorder();
  },
  attached:function(){
      this.gethealth();
      this.getDateCaloric();
      this.getCountcaloric();
      this.getCountday();
      this.getCountorder();
  },

  methods: {
//
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
  onClose() {
    this.setData({
      visible: false,
    });
  },
 // 
    gethealth(e){
        let that = this
        console.log(app.globalData.uid)
        wx.request({
            url: `${url}/sys-health/find/${app.globalData.uid}`,
            method: 'GET',
            success: function (res) {
            console.log('从后端获取的health：', res.data);
            that.setData({
                health: res.data, // 正确更新 
                caloriesDaily:res.data.caloriesDaily|| "暂无数据"
            });
            
            console.log("健康信息"+that.data.health); // 访问正确的 
            },
            fail: function (err) {
            console.error('请求失败', err);
            },
        })
    },

    getDateCaloric(e){
        let that = this
        console.log(app.globalData.uid)
        wx.request({
            url: `${url}/sys-detail/selectDateSumByUidAndDate/uid/${app.globalData.uid}`,
            method: 'GET',
            success: function (res) {
            console.log('从后端获取的DateCaloric：', res.data);
            that.setData({
                DateCaloric: res.data || 0, // 正确更新 
                eatCan: that.data.caloriesDaily - res.data
            });
            
            console.log("健康信息"+that.data.DateCaloric); // 访问正确的 
            },
            fail: function (err) {
            console.error('请求失败', err);
            },
        })
    },

    getCountday(){
        let that = this;
        console.log(app.globalData.uid)
        wx.request({
            url: `${url}/sys-detail/selectCountDayByUid/uid/${app.globalData.uid}`,
            method: 'GET',
            success: function (res) {
            console.log('从后端获取的health：', res.data);
            that.setData({
                countday:res.data,
            });
            
            console.log("健康信息"+that.data.countday); // 访问正确的 
            },
            fail: function (err) {
            console.error('请求失败', err);
            },
        })
    },
    getCountorder(){
        let that = this
        console.log(app.globalData.uid)
        wx.request({
            url: `${url}/sys-detail/selectCountOrderByUid/uid/${app.globalData.uid}`,
            method: 'GET',
            success: function (res) {
            console.log('从后端获取的health：', res.data);
            that.setData({
                countorder:res.data,
            });
            
            console.log("健康信息"+that.data.countorder); // 访问正确的 
            },
            fail: function (err) {
            console.error('请求失败', err);
            },
        })
    },
    getCountcaloric(){
        let that = this
        console.log(app.globalData.uid)
        wx.request({
            url: `${url}/sys-detail/selectCountCaloricByUid/uid/${app.globalData.uid}`,
            method: 'GET',
            success: function (res) {
            console.log('从后端获取的health：', res.data);
            that.setData({
                countcaloric:res.data||0,
            });
            
            console.log("健康信息"+that.data.countcaloric); // 访问正确的 
            },
            fail: function (err) {
            console.error('请求失败', err);
            },
        })
    },

    gotoAbout(){
        wx.navigateTo({
          url: '../my/about/about',
        })
    },
    //界面跳转
    onClick: function() {
      wx.navigateTo({
        url: '/pages/spark/spark',
      })
   },
   
   //target页面跳转
   gotoTarget(e){
    wx.navigateTo({
      url: '../../pages/my/info/info',
    })
   },
   gotoDetails(e){
    wx.navigateTo({
        // url: '../../pages/detail/details/details',
        url: '../../pages/detail/details_new/details',
      })
   },
   gotoGoods(e){
    wx.switchTab({
        url: '/pages/goods/goodsListNew/goodsList',
      })
   },
   
  }
})

