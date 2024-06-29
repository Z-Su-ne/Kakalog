Component({
  data: {
    text: 'Copyright © KaKaLog开发组',
    value: 3,
  },
  methods: {
    onChange(e) {
      const { value } = e.detail;
      this.setData({
        value,
      });
    },
  },
});
