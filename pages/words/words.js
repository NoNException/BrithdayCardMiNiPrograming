var order = ['red']
var tabs = ['a', 'b', 'c']
Page({
  data: {
    toView: 'red',
    scrollTop: 300,
    currentIndex: 0
  },
  upper: function(e) {
    this.setData({
      scrollTop: 300
    })
    var currentIndexA = this.data.currentIndex
    console.log(currentIndexA)
    if (this.data.currentIndex > 0) {
      this.setData({
        currentIndex: currentIndexA - 1
      })
    }
    if (this.data.currentIndex <= 0) {
      this.setData({
        currentIndex: 0
      })
    }
  },
  lower: function(e) {
    this.setData({
      scrollTop: 300
    })
    var currentIndexA = this.data.currentIndex
    console.log(currentIndexA)
    if (this.data.currentIndex >= 0) {
      this.setData({
        currentIndex: currentIndexA + 1
      })
    }
    if (this.data.currentIndex >= tabs.length) {
      this.setData({
        currentIndex: tabs.length - 1
      })
    }
  },
  scroll: function(e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
    if(e.detail.scrollTop > 590){
      this.lower(e)
    }
    if (e.detail.scrollTop < 10) {
      this.upper(e)
    }
   
  },
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      console.log(i);
      if (order[i] === this.data.toView) {
        console.log(order[i])
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },

})