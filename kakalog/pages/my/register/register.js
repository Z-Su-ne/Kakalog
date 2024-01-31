const url = getApp().globalData.API_URL; 
const Uid =  getApp().globalData.uid;
const app = getApp();
import Message from 'tdesign-miniprogram/message/index';
function generateRandomString(minLength, maxLength) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
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
    },
    getAccount: function (event) {
        this.setData({
          account: event.detail.value,
        });
      },
      getPassword: function (event) {
        this.setData({
          password: event.detail.value,
        });
      },
    /**
     * 生命周期函数--监听页面加载
     */
//     onLoad: function (options) {
//       const uid = options.uid;
//       const app = getApp(); // 获取总体app实例
//       this.setData({
//             username: app.globalData.uid,
//       }); 
//        console.log('Account from login:', app.globalData.uid) ;
// },    
// 监听输入框值变化
register: function () {
    this.updatesyslist();
    this.updateHealthsList();
  },
    updateHealthsList() {    
        let com = this;       
              // 发送更新请求
              wx.request({
                url: `${url}/sys-health/upd`,
                method: 'POST',
                data: {
                  uid: this.data.account,
                  sex: 'null',
                  weightCurrent: 0,
                  height: 0,
                  age: 0,
                  weightTarget: 0,
                  weightLast: 0,
                  caloriesDaily: 1000,
                  bmi: 0,
                },
                success(res) {
                    wx.showModal({   
                        title: '温馨提醒',   
                        content: '注册成功即将跳转个人健康信息界面，请完善个人健康信息',      
                        confirmText: '确定', 
                    }).then(res => { 
                        if (res.confirm) {
                            app.globalData.uid = com.data.account;
                            setTimeout(function(){
                                wx.navigateTo({
                                    url: '../Alter/index',
                                  })
                              },1000)
                              console.log('更新健康信息列表成功', res.data);
                              com.setData({
                                healths: res.data,
                              });
                        } else { 
                            
                        } 
                });
                      // 关闭当前页面，跳转页面。
                },
                fail(error) {
                    wx.showToast({
                        title: '注册失败',
                        icon: 'fail',
                        duration: 1000//持续的时间
                      })
                  console.error('请求失败:', error);
                }
              });
            },

            updatesyslist() {
                let com = this;
                const randomName = generateRandomString(2, 8);       
              // 发送更新请求
              wx.request({
                url: `${url}/sys-user/upd`,
                method: 'POST',
                data: {
                  uid: this.data.account,
                  password: this.data.password,
                  email: 'string',
                  avatar: "string",
                  del_Flag: 0,
                  mobile: "string",
                  name: randomName,
                  nick_Name: randomName,
                },
                success(res) {
                  console.log('更新用户列表成功', res.data);
                  com.setData({
                    healths: res.data,
                  });
                },
                fail(error) {
                  console.error('请求失败:', error);
                }
              });
            }
  })
  