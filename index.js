//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    movieArr: "",
    musicArr: "",
    scrollHeight: ""
  },
  onReady: function () {
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {
        start: 0,
        count: 8
      },
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res.data.subjects);
        that.setData({
          movieArr: res.data.subjects
        })

      }
    })
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight)
        that.setData({
          scrollHeight: res.windowHeight - 350
        })
      }
    })
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1',
      data: {
        size: 8
      },
      success: function (res) {
        console.log(res.data.song_list);
        that.setData({
          musicArr: res.data.song_list
        })

      }
    })
  },
  skipMovie: function () {
    console.log(1)
    wx.switchTab({
      url: '/pages/movie/movie'
    })
  },
  skipMusic: function () {
    wx.switchTab({
      url: '/pages/music/music'
    })
  }
})