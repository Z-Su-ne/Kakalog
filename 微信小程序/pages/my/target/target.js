Component({
    options: {
        styleIsolation: 'apply-shared',
      },

  data: {
    randomNumber:0,
    first: 1,
    second: 1,
    third: 1,
    amount: 0
  },
  methods: {
    onLoad: function() {
        const number = Math.floor(Math.random() * 2) + 1; // 生成1或2的随机数
    this.setData({
      randomNumber: number
    });
      },
    onFirstChange(e) {
      this.setData({ first: e.detail.current });
    },
    onSecondChange(e) {
      this.setData({ second: e.detail.current });
    },
    onThirdChange(e) {
      this.setData({ third: e.detail.current });
    },
    onSave() {
        let amount = this.data.amount;
        console.log(amount)
        if (amount == 0) {
          wx.showToast({
            title: '不能为空哦～',
            icon: "none"
          })
          return;
        }
        else{
            wx.lin.showToast({
                title: '设置成功',
                icon: 'success'
              })
        }
               
        
      },
      onConfirmRemark(event) {
        this.setData({
          amount: event.detail.value
        })
      }
  },

//   onSave() {
//     let amount = this.data.amount;
//     console.log(amount)
//     if (amount == 0) {
//       wx.showToast({
//         title: '不能为空哦～',
//         icon: "none"
//       })
//       return;
//     }
//     let data = await BudgetModel.save(Util.dateFormat("YYYY-mm-dd HH:MM:SS", new Date()), amount)
//     if (data.success) {
//       wx.lin.showToast({
//         title: '设置成功',
//         icon: 'success'
//       })
//       setTimeout(() => {
//         wx.navigateBack({
//           url: '/pages/my/my'
//         })
//       }, 600);
//     }
//   },


})