// pages/cake/BirthdayCake.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://isure.stream.qqmusic.qq.com/C400000Rw7MW27aaoc.m4a?vkey=643243EA8DC04F595C50D5CC1B6508EC7199902E5BC31E64AFC938EA12CBFF633C020400099428A2BA427E8C763C37DFDCA76C914D60F693&guid=6251932235&uin=545670755&fromtag=66',
  },



  hidden:function(e){
    console.log(e.detail);
    // wx.b
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  words: function(){
    console.log(" ");
    wx.navigateTo({
      url: '/pages/words/words',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('bgmusic');
    // this.audioCtx.seek(15);
    this.audioCtx.play();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})