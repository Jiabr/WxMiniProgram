// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    items: [
      {checked : true, name : "A通道刺激"},
      {checked : false, name : "AB通道刺激"},
      {checked : false, name : "AB通道预刺激"},
      {checked : false, name : "采集信号"}
    ]
  },
  selectHandler(e){
    this.setData({
      'items[0].checked' : false, 
      'items[1].checked' : false, 
      'items[2].checked' : false, 
      'items[3].checked' : false
    });
    switch(e.target.dataset.index){
      case "0": this.setData({'items[0].checked' : true}); break;
      case "1": this.setData({'items[1].checked' : true}); break;
      case "2": this.setData({'items[2].checked' : true}); break;
      case "3": this.setData({'items[3].checked' : true});
    }
  }
})
