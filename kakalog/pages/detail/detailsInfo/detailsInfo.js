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
    //时间选择器
    mode: '',
    dateVisible: false,
    date: '', // 支持时间戳传入
    dateText: '',
    timeStamp: '', //传给后端的时间戳，年月日为选中的日期，时分秒为当前时间
    // 指定选择区间起始值
    // start: '2000-01-01 00:00:00',
    // end: '2030-09-09 12:12:12',
  },
  methods: {
    // 步进器值，用于添加记录数量
    handleChange(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },

    // 获取上个界面产品的pid
   
    onLoad(options) {
      const { did } = options;
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
                pid:res.data.pid,
                date:res.data.date
              });

              //this.getProductsInfo();
              wx.request({
                url: `${url}/sys-products/find/pid/${that.data.pid}`,
                method: 'GET',
                success: function (res) {
                  console.log('从sys-products/find/pid获取的数据：', res.data);
                  that.setData({
                    productsInfo: res.data[0],
                  });
                },
                fail: function (err) {
                  console.error('请求失败', err);
                },
              });

          },
          fail: function (err) {
            console.error('请求失败', err);
          },
         
        });
        
      },

      delGoodsInfo(){

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
                        if (res.data.status == "500"){
                            wx.showToast({
                              title: '删除失败',
                              icon: 'error',
                              duration: 1000//持续的时间
                            })
                          }else{
                            wx.showToast({
                              title: '删除成功返回',
                              icon: 'success',
                              duration: 1000//持续的时间
                            })
                            // 关闭当前页面，跳转页面。
                            setTimeout(function(){
                              wx.navigateTo({
                                url: '../details/details'
                              });
                            },1000)
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
                })

              } else { 


                } 
        }); 

        

      },

    //时间选择器
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

  },
});