const url = getApp().globalData.API_URL; 
const Uid =  getApp().globalData.uid;
const app = getApp();
import Message from 'tdesign-miniprogram/message/index';
Page({
    /**
     * 页面的初始数据
     */
    data: {
      uid: '',
      text: "小程序",
      healths: [],
      username: '',//初始化username数据
      gender: '男',
      height: 0, 
      cityVisible: false,
      weighVisible: false,
      ageVisible: false,
      ageText: '',
      phone: '',
      ageValue: [],
      ages:[{ label: '10岁', value: '10岁' },
      { label: '11岁', value: '11岁' },
      { label: '12岁', value: '12岁' },
      { label: '13岁', value: '13岁' },
      { label: '14岁', value: '14岁' },
      { label: '15岁', value: '15岁' },
      { label: '16岁', value: '16岁' },
      { label: '17岁', value: '17岁' },
      { label: '18岁', value: '18岁' },
      { label: '19岁', value: '19岁' },
      { label: '20岁', value: '20岁' },
      { label: '21岁', value: '21岁' },
      { label: '22岁', value: '22岁' },
      { label: '23岁', value: '23岁' },
      { label: '24岁', value: '24岁' },
      { label: '25岁', value: '25岁' },
      { label: '26岁', value: '26岁' },
      { label: '27岁', value: '27岁' },
      { label: '28岁', value: '28岁' },
      { label: '29岁', value: '29岁' },
      { label: '30岁', value: '30岁' },  
        { label: '31岁', value: '31岁' },  
        { label: '32岁', value: '32岁' },  
        { label: '33岁', value: '33岁' },  
        { label: '34岁', value: '34岁' },  
        { label: '35岁', value: '35岁' },  
        { label: '36岁', value: '36岁' },  
        { label: '37岁', value: '37岁' },  
        { label: '38岁', value: '38岁' },  
        { label: '39岁', value: '39岁' },  
        { label: '40岁', value: '40岁' },  
        { label: '41岁', value: '41岁' },  
        { label: '42岁', value: '42岁' },  
        { label: '43岁', value: '43岁' },  
        { label: '44岁', value: '44岁' },  
        { label: '45岁', value: '45岁' },  
        { label: '46岁', value: '46岁' },  
        { label: '47岁', value: '47岁' },  
        { label: '48岁', value: '48岁' },  
        { label: '49岁', value: '49岁' },  
        { label: '50岁', value: '50岁' },  
        { label: '51岁', value: '51岁' },  
        { label: '52岁', value: '52岁' },  
        { label: '53岁', value: '53岁' },  
        { label: '54岁', value: '54岁' },  
        { label: '55岁', value: '55岁' },  
        { label: '56岁', value: '56岁' },
        { label: '57岁', value: '57岁' },
        { label: '58岁', value: '58岁' },
        { label: '59岁', value: '59岁' },  
        { label: '60岁', value: '60岁' },  
        { label: '61岁', value: '61岁' },  
        { label: '62岁', value: '62岁' },  
        { label: '63岁', value: '63岁' },
        { label: '64岁', value: '64岁' },
        { label: '65岁', value: '65岁' },  
        { label: '66岁', value: '66岁' },  
        { label: '67岁', value: '67岁' },  
        { label: '68岁', value: '68岁' },  
        { label: '69岁', value: '69岁' },  
        { label: '70岁', value: '70岁' },  
        { label: '71岁', value: '71岁' },  
        { label: '72岁', value: '72岁' },  
        { label: '73岁', value: '73岁' },  
        { label: '74岁', value: '74岁' },  
        { label: '75岁', value: '75岁' },  
        { label: '76岁', value: '76岁' },  
        { label: '77岁', value: '77岁' },  
        { label: '78岁', value: '78岁' },  
        { label: '79岁', value: '79岁' },  
        { label: '80岁', value: '80岁' },  
        { label: '81岁', value: '81岁' },  
        { label: '82岁', value: '82岁' },  
        { label: '83岁', value: '83岁' },  
        { label: '84岁', value: '84岁' },
        { label: '85岁', value: '85岁' },
        { label: '86岁', value: '86岁' },  
        { label: '87岁', value: '87岁' },  
        { label: '88岁', value: '88岁' },  
        { label: '89岁', value: '89岁' },  
        { label: '90岁', value: '90岁' },
        { label: '91岁', value: '91岁' },
        { label: '92岁', value: '92岁' },
        { label: '93岁', value: '93岁' },
        { label: '94岁', value: '94岁' },
        { label: '95岁', value: '95岁' },
        { label: '96岁', value: '96岁' },
            
      ],
    weighText: '',
    weighValue: [],
    weighs: [
        { label: '30kg', value: '30kg' },  
        { label: '31kg', value: '31kg' },  
        { label: '32kg', value: '32kg' },  
        { label: '33kg', value: '33kg' },  
        { label: '34kg', value: '34kg' },  
        { label: '35kg', value: '35kg' },  
        { label: '36kg', value: '36kg' },  
        { label: '37kg', value: '37kg' },  
        { label: '38kg', value: '38kg' },  
        { label: '39kg', value: '39kg' },  
        { label: '40kg', value: '40kg' },  
        { label: '41kg', value: '41kg' },  
        { label: '42kg', value: '42kg' },  
        { label: '43kg', value: '43kg' },  
        { label: '44kg', value: '44kg' },  
        { label: '45kg', value: '45kg' },  
        { label: '46kg', value: '46kg' },  
        { label: '47kg', value: '47kg' },  
        { label: '48kg', value: '48kg' },  
        { label: '49kg', value: '49kg' },  
        { label: '50kg', value: '50kg' },  
        { label: '51kg', value: '51kg' },  
        { label: '52kg', value: '52kg' },  
        { label: '53kg', value: '53kg' },  
        { label: '54kg', value: '54kg' },  
        { label: '55kg', value: '55kg' },  
        { label: '56kg', value: '56kg' },  
        { label: '57kg', value: '57kg' },
        { label: '58kg', value: '58kg' },
        { label: '59kg', value: '59kg' },  
        { label: '60kg', value: '60kg' },  
        { label: '61kg', value: '61kg' },  
        { label: '62kg', value: '62kg' },  
        { label: '63kg', value: '63kg' },
        { label: '64kg', value: '64kg' },
        { label: '65kg', value: '65kg' },  
        { label: '66kg', value: '66kg' },  
        { label: '67kg', value: '67kg' },  
        { label: '68kg', value: '68kg' },  
        { label: '69kg', value: '69kg' },  
        { label: '70kg', value: '70kg' },  
        { label: '71kg', value: '71kg' },  
        { label: '72kg', value: '72kg' },  
        { label: '73kg', value: '73kg' },  
        { label: '74kg', value: '74kg' },  
        { label: '75kg', value: '75kg' },  
        { label: '76kg', value: '76kg' },  
        { label: '77kg', value: '77kg' },  
        { label: '78kg', value: '78kg' },  
        { label: '79kg', value: '79kg' },  
        { label: '80kg', value: '80kg' },  
        { label: '81kg', value: '81kg' },  
        { label: '82kg', value: '82kg' },  
        { label: '83kg', value: '83kg' },  
        { label: '84kg', value: '84kg' },
        { label: '85kg', value: '85kg' },
        { label: '86kg', value: '86kg' },  
        { label: '87kg', value: '87kg' },  
        { label: '88kg', value: '88kg' },  
        { label: '89kg', value: '89kg' },  
        { label: '90kg', value: '90kg' },
        { label: '91kg', value: '91kg' },
        { label: '92kg', value: '92kg' },
        { label: '93kg', value: '93kg' },
        { label: '94kg', value: '94kg' },
        { label: '95kg', value: '95kg' },
        { label: '96kg', value: '96kg' },
        { label: '97kg', value: '97kg' },
        { label: '98kg', value: '98kg' },
        { label: '98kg', value: '98kg' },
        { label: '100kg', value: '100kg' },
    ],
    cityText: '',
    cityValue: [],
       citys: [
        { label: '30kg', value: '30kg' },  
        { label: '31kg', value: '31kg' },  
        { label: '32kg', value: '32kg' },  
        { label: '33kg', value: '33kg' },  
        { label: '34kg', value: '34kg' },  
        { label: '35kg', value: '35kg' },  
        { label: '36kg', value: '36kg' },  
        { label: '37kg', value: '37kg' },  
        { label: '38kg', value: '38kg' },  
        { label: '39kg', value: '39kg' },  
        { label: '40kg', value: '40kg' },  
        { label: '41kg', value: '41kg' },  
        { label: '42kg', value: '42kg' },  
        { label: '43kg', value: '43kg' },  
        { label: '44kg', value: '44kg' },  
        { label: '45kg', value: '45kg' },  
        { label: '46kg', value: '46kg' },  
        { label: '47kg', value: '47kg' },  
        { label: '48kg', value: '48kg' },  
        { label: '49kg', value: '49kg' },  
        { label: '50kg', value: '50kg' },  
        { label: '51kg', value: '51kg' },  
        { label: '52kg', value: '52kg' },  
        { label: '53kg', value: '53kg' },  
        { label: '54kg', value: '54kg' },  
        { label: '55kg', value: '55kg' },  
        { label: '56kg', value: '56kg' },  
        { label: '57kg', value: '57kg' },
        { label: '58kg', value: '58kg' },
        { label: '59kg', value: '59kg' },  
        { label: '60kg', value: '60kg' },  
        { label: '61kg', value: '61kg' },  
        { label: '62kg', value: '62kg' },  
        { label: '63kg', value: '63kg' },
        { label: '64kg', value: '64kg' },
        { label: '65kg', value: '65kg' },  
        { label: '66kg', value: '66kg' },  
        { label: '67kg', value: '67kg' },  
        { label: '68kg', value: '68kg' },  
        { label: '69kg', value: '69kg' },  
        { label: '70kg', value: '70kg' },  
        { label: '71kg', value: '71kg' },  
        { label: '72kg', value: '72kg' },  
        { label: '73kg', value: '73kg' },  
        { label: '74kg', value: '74kg' },  
        { label: '75kg', value: '75kg' },  
        { label: '76kg', value: '76kg' },  
        { label: '77kg', value: '77kg' },  
        { label: '78kg', value: '78kg' },  
        { label: '79kg', value: '79kg' },  
        { label: '80kg', value: '80kg' },  
        { label: '81kg', value: '81kg' },  
        { label: '82kg', value: '82kg' },  
        { label: '83kg', value: '83kg' },  
        { label: '84kg', value: '84kg' },
        { label: '85kg', value: '85kg' },
        { label: '86kg', value: '86kg' },  
        { label: '87kg', value: '87kg' },  
        { label: '88kg', value: '88kg' },  
        { label: '89kg', value: '89kg' },  
        { label: '90kg', value: '90kg' },
        { label: '91kg', value: '91kg' },
        { label: '92kg', value: '92kg' },
        { label: '93kg', value: '93kg' },
        { label: '94kg', value: '94kg' },
        { label: '95kg', value: '95kg' },
        { label: '96kg', value: '96kg' },
        { label: '97kg', value: '97kg' },
        { label: '98kg', value: '98kg' },
        { label: '98kg', value: '98kg' },
        { label: '100kg', value: '100kg' },
    ],
    },
    handleGenderChange: function (e) {
        this.setData({
          gender: e.detail.value,
        });
      },
      handleHeightInput: function (e) {
        this.setData({
          phone: e.detail.value,
        });
      },
        onColumnChange(e) {
            console.log('picker pick:', e);
          },
          onColumnChange0(e) {
            console.log('picker pick:', e);
          },
          onColumnChange2(e) {
            console.log('picker pick:', e);
          },
          onPickerChange(e) {
            const { value } = e.detail;
            console.log('picker change:', e.detail);
            this.setData({
                cityVisible: false,  
                cityValue: value,  
                cityText: value.join(' '),
              });
          },
          onPickerChange0(e) {
            const { value } = e.detail;
            console.log('picker change:', e.detail);
            this.setData({
                weighVisible: false,  
                weighValue: value,  
                weighText: value.join(' '),
              });
          },
          onPickerChange2(e) {
            const { value } = e.detail;
            console.log('picker change:', e.detail);
            this.setData({
                ageVisible: false,  
                ageValue: value,  
                ageText: value.join(' '),
              });
          },
          onPickerCancel(e) {
            console.log(e, '取消');
            console.log('picker1 cancel:');
            this.setData({
                [`${key}Visible`]: false,
              });
          },
          onPickerCancel0(e) {
            console.log(e, '取消');
            console.log('picker1 cancel:');
            this.setData({
                [`${key}Visible`]: false,
              });
          },
          onPickerCancel2(e) {
            console.log(e, '取消');
            console.log('picker1 cancel:');
            this.setData({
                [`${key}Visible`]: false,
              });
          },
        onCityPicker() {
          this.setData({ cityVisible: true });
        },
        onWeighPicker() {
            this.setData({ weighVisible: true });
          },
        onAgePicker() {
            this.setData({ ageVisible: true });
          },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      const uid = options.uid;
      const app = getApp(); // 获取总体app实例
      this.setData({
            username: app.globalData.uid,
           
      }); 
       console.log('Account from login:', app.globalData.uid) ;
},    
// 监听输入框值变化
    bindUsernameInput: function(e){
        this.setData({
            username: e.detail.value,
        });
    },
    handleTap: function () {
        this.showCloseMessage();
        this.updateHealthsList();
      },
    updateHealthsList() {    
        let com = this;       
        wx.request({
            url: `${url
            }/sys-health/find/${getApp().globalData.uid
            }`,
            method: 'GET',
            success: (res) => {
              console.log('查询成功', res.data);
              
              // 获取上次的数据
              const lastHealthData = res.data;
          
              // 发送更新请求
              wx.request({
                url: `${url
                }/sys-health/upd`,
                method: 'POST',
                data: {
                  uid: this.data.username,
                  sex: this.data.gender,
                  weightCurrent: parseInt(this.data.weighValue),
                  height: parseInt(this.data.phone),
                  age: parseInt(this.data.ageValue),
                  weightTarget: parseInt(this.data.cityValue),
                  // 设置 weightLast、caloriesDaily 和 bmi 为上次的值
                  weightLast: lastHealthData.weightLast,
                  caloriesDaily: lastHealthData.caloriesDaily,
                  bmi: parseInt(this.data.weighValue) / Math.pow(parseInt(this.data.phone) / 100, 2),
                },
                success(res) {
                  console.log('更新健康信息列表成功', res.data);
                  com.setData({
                    healths: res.data,
                  });
                  wx.switchTab({
                    
                    url: '../../index/index',
                  })
                },
                fail(error) {
                  console.error('请求失败:', error);
                }
              });
            },
            fail(error) {
              console.error('查询失败:', error);
            }
          });
      },
    showCloseMessage() {
        Message.info({
          context: this,
          offset: ['20rpx', 32],
          content: '信息已成功保存',
          duration: -1,
          link: {
            content: 'ok',
          },
          closeBtn: true,
        });
      },
      handleAgeChange: function(e) {  
        this.setData({ selectedAge: e.detail.value });  
    },
    //保存按钮
    formSubmit:function(e){
      //表单返回的所有数据
      var formData=e.detail.value;
      //获取上一个页面的对象
      var pages=getCurrentPages()
      var prevPage=pages[pages.length-2]
      //调用上一个页面的setData()方法，把数据存储到上一个页面中去
      prevPage.setData({
        username:formData.username,
        gender:formData.gender
      })
      //返回上一个页面
      wx.navigateBack()
    }
    
  })
  