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
      isPassword:false,
      isAccount:false,
    },

    getAccount: function(event) {
        const account = event.detail.value;
        // 正则表达式，匹配仅包含中文、数字和英文字符，且长度4-12的字符串
        const accountRegex = /^[A-Za-z0-9\u4e00-\u9fa5]{4,12}$/;
        // 验证账号格式
        if (accountRegex.test(account)) {
          // 账号格式正确，更新数据
          this.setData({
            account: account,
            isAccount:true,
          });
        } else {
          // 账号格式错误，提示用户
        }
      },
      
      getPassword: function(event) {
        const password = event.detail.value;
        // 密码的正则表达式规则与账号相同
        const passwordRegex = /^[A-Za-z0-9]{8,12}$/;
        
        // 验证密码格式
        if (passwordRegex.test(password)) {
          // 密码格式正确，更新数据
          this.setData({
            password: password,
            isPassword:true,
          });
        } else {
          // 密码格式错误，提示用户
        }
      },

register: function () {
    if(this.data.isPassword && this.data.isAccount){
        wx.request({
          url:  `${url}/sys-user/findUserName/${this.data.account}`,
          method: 'GET',
          success: (res) => {
              if(res.data==1){
                wx.showModal({
                    title: '提示',
                    content: '该账号已存在，请换一个账号',
                    showCancel: false, // 不需要确认按钮
                    confirmText: '好的'
                  });
              }
                if(res.data==0){
                    this.submitUserInfo();
                }
          },
          fail(error){
            console.log("发现用户失败")
          }
        })
    }else{
        wx.showModal({
            title: '提示',
            content: '账号必须为4位到12位的数字、中文或英文字符；密码必须为8位到12位的数字英文字符',
            showCancel: false, // 不需要确认按钮
            confirmText: '好的'
          });
     
    }
  },
    submitUserInfo: function(event) {
        // 调用 wx.getUserProfile 获取用户信息
        wx.getUserProfile({
        desc: '用于更新用户信息',
        success: (res) => {
            // 用户点击同意后，获取用户信息成功
            const userInfo = res.userInfo;   
            const data = {
            name: this.data.account, 
            nickName: userInfo.nickName, 
            avatar: userInfo.avatarUrl || "默认头像", 
            password: this.data.password, 
            email: userInfo.email || "默认邮箱", 
            mobile: userInfo.phoneNumber || "默认手机号",
            delFlag: 0,
            };
            wx.request({
            url: `${url}/sys-user/add`,
            method: 'POST',
            data: data,
            success: (res) => {
                console.log('注册用户成功：', res.data);
                //获取uid
                wx.request({
                  url: `${url}/sys-user/find/name/${this.data.account}`,
                  method: 'GET',
                success: (res) => {
                    console.log('返回数据：', res.data.uid)
                    // const app = getApp();
                        app.globalData.uid = res.data.uid;
                    console.log(app.globalData.uid)
                },
                fail(error){
                    console.log("有问题？")
                    // 处理请求失败的回调函数，可以根据需要进行错误处理或提示用户  
                }
                })
                this.updateHealthsList();
                this.setData({
                    healths: res.data,
                });
            },
            fail: (error) => {
                console.error('请求失败:', error);
            }
            });
        },
        fail: () => {
            // 用户拒绝授权或其他原因导致获取用户信息失败
            wx.showModal({
                title: '提示',
                content: '需要授权才能更新用户信息',
                showCancel: false, // 不需要确认按钮
                confirmText: '好的'
              });
            
        }
        });
    },
    updateHealthsList() {    
            let com = this;      
              // 发送更新请求
              wx.request({
                url: `${url}/sys-health/upd`,
                method: 'POST',
                data: {
                  age: 0,
                  bmi: 0,
                  caloriesDaily: 0,
                  height: 0,
                  sex: 'null',
                  uid: app.globalData.uid,
                  weightCurrent: 0,
                  weightLast: 0,
                  weightTarget: 0,
                },
                success(res) {
                    wx.showModal({   
                        title: '温馨提醒',   
                        content: '注册成功即将跳转个人健康信息界面，请完善个人健康信息',      
                        confirmText: '确定', 
                    }).then(res => { 
                        
                            setTimeout(function(){
                                wx.navigateTo({
                                    url: '../Alter/index?source=register',
                                  })
                              },1000)
                              console.log('更新健康信息列表成功', res.data);
                              com.setData({
                                healths: res.data,
                              });
                        
                });
                      // 关闭当前页面，跳转页面。
                },
                fail(error) {
                    wx.showModal({
                        title: '提示',
                        content: '注册失败',
                        showCancel: false, // 不需要确认按钮
                        confirmText: '好的'
                      });
                  console.error('请求失败:', error);
                }
              });
            },
            
  })
  