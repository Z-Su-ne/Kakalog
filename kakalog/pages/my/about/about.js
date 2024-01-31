Component({
  data: {
    text: 'Copyright © 软件工程2101-软件工程第九组',
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
