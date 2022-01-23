/*****************************
 Create Date: 20220123203326
 Update Date: 20220123203329
 *****************************/

const AirPods = [
   {
      name: 'AirPods1',
      dateInit: '2016.12.13',
      dateEnd: '2019.03.20',
      osLast: '6.8.8',
      chip: 'Apple W1 SoC',
      bluetooth: '4.2',
      associatedOs: 'iOS 10',
      weight: '4g', // 单支耳机重量
      duration: '5h', // 单次聆听时长
      wirelessCharge: '',
      controlMethod: '敲击耳机', // 操控方式
      models: [
         'A1523',
         'A1722'
      ],
      battery: '93mwh',
      case: {
         weight: '38g',
         battery: '1.52wh',
         duration: '24h', // 盒子聆听时长
         width: 21.3,
         height: 53.5,
         length: 44.3
      }
   },
   {
      name: 'AirPods2',
      dateInit: '2019.03.20',
      dateEnd: '',
      osLast: '4C165',
      chip: 'Apple H1',
      bluetooth: '5.0',
      associatedOs: 'iOS 12.2',
      weight: '4g', // 单支耳机重量
      duration: '5h', // 单次聆听时长
      wirelessCharge: 'Qi',
      controlMethod: '敲击耳机', // 操控方式
      models: [
         'A2032',
         'A2031'
      ],
      battery: '93mwh',
      case: {
         weight: '38g',
         duration: '24h', // 盒子聆听时长
         battery: '1.52wh',
         width: 21.3,
         height: 53.5,
         length: 44.3
      }
   },
   {
      name: 'AirPods3',
      dateInit: '2021.10.26',
      dateEnd: '',
      osLast: '4C165',
      chip: 'Apple H1',
      bluetooth: '5.0',
      associatedOs: 'iOS 13',
      weight: '4g', // 单支耳机重量

      duration: '6h', // 单次聆听时长
      wirelessCharge: 'Qi',
      controlMethod: '按压耳机柄', // 操控方式
      models: [
         'A2032',
         'A2031'
      ],
      battery: '93mwh',
      case: {
         weight: '38g',
         duration: '30h', // 盒子聆听时长
         battery: '1.52wh',
         width: 21.3,
         height: 53.5,
         length: 44.3
      }
   },

]

let app = new Vue({
   el: '#app',
   data: {
      // full screen 相关
      showFullScreenBtn: false,
      didEnteredFullScreen: false,
      // 浏览器参数
      portraitMode: false,
      mobileMode: false,
      heightApp: 0,
      inMobile: false,
      AirPods: AirPods
   },
   mounted(){
      // 全屏相关
      let chromeCore = /Chrome/i.test(navigator.userAgent);
      let mobileMode = /Mobile/i.test(navigator.userAgent);
      this.portraitMode = window.innerWidth > window.innerHeight;
      this.mobileMode = mobileMode;
      this.showFullScreenBtn = chromeCore && !mobileMode;
      this.relocate(); // relocate items
   },

   watch: {
      model() {
         this.relocate();
      }
   },
   methods: {
      // 全屏显示
      enterFullScreen(){
         document.documentElement.requestFullscreen().then();
      },
      relocate(){
         this.heightApp = 0;
         this.$nextTick().then(() => {
            let heightChip = document.querySelector('.chip').offsetHeight + 40;
            console.log(heightChip)
            if (heightChip < innerHeight) { // .card 高度小于屏幕高度时
               document.querySelector('.card-container').style.position = 'fixed';
               this.heightApp = innerHeight;
               // pc
               if (!this.mobileMode){
                  document.querySelector('#app').style.height = innerHeight + 'px'
                  window.onwheel = event => {
                     console.log(event.deltaY)
                     let container = document.querySelector('.card-container')
                     let scrollLeft = container.scrollLeft; // 文档左卷的高度
                     let direction = event.deltaY > 0 ? 1 : -1
                     let scrollSpace = container.scrollWidth - window.innerWidth; // 横向滚动范围
                     let afterScrollLeft = scrollLeft > scrollSpace?  scrollLeft: scrollLeft + 100 * direction
                     // console.log(scrollLeft, afterScrollLeft)
                     container.scrollTo(afterScrollLeft, 0);
                  }
               } else {
                  window.onscroll = null
               }
            } else {
               document.querySelector('body').style.height = 'auto';
               document.querySelector('.card-container').style.position = 'relative';
               window.onscroll = null

            }
         })
      }
   }
})

window.onresize = () => {
   let heightChip = document.querySelector('.chip').offsetHeight + 40;
   if (heightChip < innerHeight) { // pc
      app.heightApp = innerHeight
   }
}


// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
   app.didEnteredFullScreen = Boolean(document.fullscreenElement)
}
