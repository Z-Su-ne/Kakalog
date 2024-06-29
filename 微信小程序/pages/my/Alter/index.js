const url = getApp().globalData.API_URL; 
const Uid =  getApp().globalData.uid;
const app = getApp();
import Message from 'tdesign-miniprogram/message/index';
function calculateBMR(gender, weight, height, age) {
    let BMR;
    if (gender === '男') {
      BMR = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === '女') {
      BMR = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    return BMR;
  }
  // 计算caloriesDaily的函数
  function calculateCaloriesDaily(bmr) {
    return bmr * 1.3;
  }
Page({
    /**
     * 页面的初始数据
     */
    data: {
      user:[],
      uid: '',
      text: "小程序",
      healths: [],
      username: '',//初始化username数据
      gender: '',
      age: 0,
      height:0.00,
      weightCurrent: 0.00,
      weightTarget:0.00,
      NewHealth: [],
      BMR:0.00,
      genderError:false,
      ageError:false,
      heightError:false,
      weightLast:0,
      weightCurrentError:false,
      weightTargetError:false,

      comfrom:"info",
    },
        onHeightInput(e) {
          const  height = e.detail.value;
          const isHeightNumber = /^\d+\.\d{2}$/.test(e.detail.value) || parseFloat(e.detail.value) >= 120.00 && parseFloat(e.detail.value) <= 240.00
          
            this.setData({
              heightError: !isHeightNumber,
              height: isHeightNumber ? height : this.data.height, // 如果验证失败，则不更新gender
            });
        
        },
        onGenderInput(e) {
            const gender = e.detail.value;
            const isValidGender = ['男', '女'].includes(gender);
            this.setData({
              genderError: !isValidGender,
              gender: isValidGender ? gender : this.data.gender, // 如果验证失败，则不更新gender
            });
          },
          onAgeInput(e) {
            const age = parseInt(e.detail.value, 10);
            const isAgeNumber = !isNaN(age) && age >= 12 && age <= 60 ; // 假设年龄不能为负数
            this.setData({
              ageError: !isAgeNumber,
              age: isAgeNumber ? age : this.data.age, // 如果验证失败，则不更新age
            });
          },
          onWeightCurrentInput(e) {
            const isWeightNumber = /^\d+\.\d{2}$/.test(e.detail.value) || parseFloat(e.detail.value) >= 30.00 && parseFloat(e.detail.value) <= 150.00;
            this.setData({
              weightCurrentError: !isWeightNumber,
              weightCurrent: isWeightNumber ? parseFloat(e.detail.value) : this.data.weightCurrent, // 如果验证失败，则不更新weightCurrent
            });
          },

          onWeightTargetInput(e) {
            const isWeightNumber = /^\d+\.\d{2}$/.test(e.detail.value) || parseFloat(e.detail.value) >= 30.00 && parseFloat(e.detail.value) <= 150.00;
            this.setData({
              weightTargetError: !isWeightNumber,
              weightTarget: isWeightNumber ? parseFloat(e.detail.value) : this.data.weightTarget, // 如果验证失败，则不更新weightTarget
            });
          },
      
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getUserList();
      const app = getApp(); // 获取总体app实例
      if (options.source === 'register') {
        this.setData({
            comfrom:options.source,
        })
      }
            let com = this;  
                wx.request({
                    url: `${url}/sys-health/find/${app.globalData.uid}`,
                    method: 'GET',
                    success: function (res) {
                        console.log('data', res.data)
                        com.setData({
                            healths: res.data
                        });
                        
                    },
                    fail(error) {
                        // 处理请求失败的回调函数，可以根据需要进行错误处理或提示用户  
                        console.error('请求失败:', error);
                    }
                });

      this.setData({
            username: app.globalData.uid,
      }); 
       console.log('Account from login:', app.globalData.uid) ;
},    
    getUserList() {
        let com = this;  
        wx.request({
            url: `${url}/sys-user/find/uid/${app.globalData.uid}`,
            method: 'GET',
            success: function (res) {
                console.log('data', res.data)
                com.setData({
                    user: res.data
                });
                
            },
            fail(error) {
                // 处理请求失败的回调函数，可以根据需要进行错误处理或提示用户  
                console.error('请求用户名失败:', error);
            }
        });
    },
    updateHealthsList() {   
            //数值不符合标准，报错，不提交 
            const gender = this.data.gender;
            const weightCurrent = this.data.weightCurrent;
            const height = this.data.height;
            const age = this.data.age;
            const weightTarget = this.data.weightTarget;
            // 在发送请求之前计算BMR和caloriesDaily
            const bmr = calculateBMR(gender, weightCurrent, height, age);
            const caloriesDaily = calculateCaloriesDaily(bmr);
            const com =this.data.comfrom;
            // 检查输入是否有误
            if (this.data.genderError || this.data.ageError || 
                this.data.heightError
                 || this.data.weightCurrentError
                  || this.data.weightTargetError) {
                    wx.showToast({
                        title: '数据错误',
                        icon: 'error',
                        duration: 2000
                      });
              
            }else{
              
              wx.request({
                url: `${url}/sys-health/upd`,
                method: 'POST',
                data: {
                  uid: this.data.username,
                  sex: gender,
                  weightCurrent: weightCurrent,
                  height: height,
                  age: age,
                  weightTarget: weightTarget,
                  weightLast:0,
                  caloriesDaily: caloriesDaily,
                  bmi: parseInt(weightCurrent) / Math.pow(height/100, 2),
                },
                success:function(res) {
                    wx.showToast({
                        title: '修改成功',
                        icon: "success",
                        duration: 2000,
                    })

                      console.log('更新健康信息列表成功', res.data);
                      if(com=="register"){
                        wx.switchTab({
                          url: '/pages/index/index',
                        })
                      }else{
                        wx.navigateBack()
                      }
                      
                },
                fail:function(error) {
                    wx.showToast({
                        title: '数据错误',
                        icon: 'error',
                        duration: 2000
                      });
                      console.error('请求失败:', error);
                    }
                  });
              } 
      },
  })
  