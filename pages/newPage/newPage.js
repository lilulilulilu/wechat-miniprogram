Page({
    data: {
      // 页面的初始数据
    },
    onLoad: function (options) {
      // 页面加载时运行
    },
    onReady: function () {
      // 页面初次渲染完成时运行
    },
    onShow: function () {
      // 页面显示时运行
    },
    onHide: function () {
      // 页面隐藏时运行
    },
    onUnload: function () {
      // 页面卸载时运行
    },
    handleTap: function () {
      wx.showToast({
        title: '你好！👋',
        icon: 'none',
        duration: 2000
      })
    }
  })