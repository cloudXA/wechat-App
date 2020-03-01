// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number
    },
    like: {
      type: Boolean,
      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yeSrc: "./image/likeyse.png",
    noSrc: "./image/like.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (event) {
      let like = this.properties.like;
      let count = this.properties.count;
      like = !like;
      count = like ? count+1 : count-1;
      this.setData({
        like: like,
        count: count
      })
      console.log(this.data)
    }
  }
})
