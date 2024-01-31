
// details.js
const url = getApp().globalData.API_URL;
const Uid = getApp().globalData.uid;
Component({
  data: {
    current: 0,
    uid:getApp().globalData.uid,
    oid:'',
    did:'',
    date: '',
    options: [
      { value: 1, label: '饮食' },
      { value: 2, label: '运动' },
      { value: 3, label: '常用' },
      { value: 4, label: '自定义' },
    ],
    detailsList: {}, // 用于显示饮食与运动
    orders: {}, //用户的订单信息
    orderdetails: {}, //用户对应订单的详情
  },
  ready: function () {
     this.getOrders();
    //  this.getOrdersDetails();
  },
  onPageScroll(res) {
    wx.lin.setScrollTop(res.scrollTop)
  },

  methods: {
      onClick(){
          this.getOrders();
          
      },
    onChange(event) {
      const { value } = event.detail;
      this.setData({
        current: value,
      });
      this.getOrders();
    },

    getOrders(e){
    let that = this;
        wx.request({
            url: `${url}/sys-orders/find/uid/${this.data.uid}`,
            method: 'GET',
            success: function (res) {
              
              that.setData({
                orders: res.data, // 正确更新 
              });

              if (!res.data || res.data.length === 0) { // 检查数据是否为空
                wx.showToast({
                    title: '您还没有热量记账，点击左下角加号，为美好生活加一单吧',
                    duration:1000,
                });
            } else {
                console.log('从后端获取的orders：', res.data); // 访问正确的 
            }
              
              
            },
            fail: function (err) {
              console.error('请求失败', err);
            },
          });
    },

    getOrdersDetails(e){
        let that = this;
        this.setData({
            date : e.currentTarget.dataset.date,
        });
        if(this.data.current==0){
            // wx.showToast({
            //   title: '请先选择对应的类目',
            //   duration:1000,
            // })
            wx.showModal({   
                title: '温馨提醒',   
                content: '请先选择对应的类目',      
                confirmText: '好的',   
            }).then(res => { 
                if (res.confirm) {   
                  } else { 

                    } 
            }); 
        }
        // this.data.oid = ((this.data.uid.concat(this.data.date)).replace('-','')).replace('-','');
        this.data.oid = ((this.data.uid+this.data.date).replace('-','')).replace('-','');
        console.log(this.data.current);
        wx.request({
            url: `${url}/sys-detail/find/kind/{kind}/{oid}?kind=${this.data.current}&oid=${this.data.oid}`,
            method: 'GET',
            success: function (res) {
              that.setData({
                orderdetails: res.data, // 正确更新 
              });


              if (!res.data || res.data.length === 0) { // 检查数据是否为空
                // wx.showToast({
                //     title: '该日没有对应类目的热量账单记录',
                //     duration:1000,
                // });
                wx.showModal({   
                    title: '温馨提醒',   
                    content: '该日没有对应类目的热量账单记录哦',      
                    confirmText: '好的',   
                }).then(res => { 
                    if (res.confirm) {   
                      } else { 
    
                        } 
                }); 

            } else {
                console.log('从后端获取的ordersDetails：' + that.data.orderdetails);
            }



            








              // 访问正确的 
            },
            fail: function (err) {
              console.error('请求失败', err);
            },
          });

    },
    
    toDetailsInfo(event) {
      this.data.did = event.currentTarget.dataset.did; // 获取点击的食物pid
      wx.navigateTo({
        url: `/pages/detail/detailsInfo/detailsInfo?did=${this.data.did}`, // 传递食物pid到detailsInfo页面
      });
      console.log(this.data.did)
    },

  },
});

