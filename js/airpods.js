/*****************************
 Create Date: 20220123203326
 Update Date: 20220123203329
 *****************************/

const AirPods = [
   {
      name: 'AirPods 1',
      dateInit: '2016-12-13',
      dateEnd: '2019-03-20',
      osLast: '6.8.8',
      chip: 'Apple W1 SoC',
      noise_reduction: false, // 降噪
      bluetooth: '4.2',
      associatedOs: 'iOS 10',
      weight: 4, // 单支耳机重量
      duration: 5, // 单次聆听时长
      wirelessCharge: '',
      controlMethod: '敲击耳机', // 操控方式
      models: [
         'A1523',
         'A1722'
      ],
      battery: 93, // mwh
      case: {
         weight: 38,
         battery: 1.52, // wh
         duration: 24, // 盒子聆听时长
         width: 21.3,
         height: 53.5,
         length: 44.3
      },
      chargeMethods: [
         '闪电',
      ]
   },
   {
      name: 'AirPods 2',
      dateInit: '2019-03-20',
      dateEnd: '',
      osLast: '4C165',
      chip: 'Apple H1',
      noise_reduction: false, // 降噪
      bluetooth: '5.0',
      associatedOs: 'iOS 12.2',
      weight: 4, // 单支耳机重量
      duration: 5, // 单次聆听时长
      controlMethod: '敲击耳机', // 操控方式
      models: [
         'A2032',
         'A2031'
      ],
      battery: 93, // mwh
      case: {
         weight: 38,
         duration: 24, // 盒子聆听时长
         battery: 1.52, // wh
         width: 21.3,
         height: 53.5,
         length: 44.3
      },
      chargeMethods: [
         '闪电',
      ]
   },
   {
      name: 'AirPods 3',
      dateInit: '2021-10-26',
      dateEnd: '',
      osLast: '4C165',
      chip: 'Apple H1',
      noise_reduction: false, // 降噪
      bluetooth: '5.0',
      associatedOs: 'iOS 13',
      weight: 4, // 单支耳机重量

      duration: 6, // 单次聆听时长
      controlMethod: '按压耳机柄', // 操控方式
      models: [
         'A2032',
         'A2031'
      ],
      battery: 93, // mwh
      case: {
         weight: 38,
         duration: 30, // 盒子聆听时长
         battery: 1.52, // wh
         width: 21.3,
         height: 53.5,
         length: 44.3
      },
      chargeMethods: [
         '闪电',
         '无线 Qi',
         'MagSafe'
      ]
   },
   {
      name: 'AirPods Pro',
      dateInit: '2019-10-30',
      dateEnd: '',
      osLast: '4C165',
      chip: 'Apple H1',
      noise_reduction: true, // 降噪
      bluetooth: '5.0',
      associatedOs: 'iOS 13',
      weight: 4, // 单支耳机重量

      duration: 4.5, // 单次聆听时长
      controlMethod: '按压耳机柄', // 操控方式
      models: [
         'A2084'
      ],
      battery: 93, // mwh
      case: {
         weight: 45.6,
         duration: 24, // 盒子聆听时长
         battery: '',
         width: 21.7,
         height: 45.2,
         length: 60.6
      },
      chargeMethods: [
         '闪电',
         '无线 Qi',
         'MagSafe'
      ]
   },
   {
      name: 'AirPods Max',
      dateInit: '2020-12-15',
      dateEnd: '',
      osLast: '4C165',
      chip: 'Apple H1',
      noise_reduction: true, // 降噪
      bluetooth: '5.0',
      associatedOs: 'iOS 14.3',
      weight: 384.8, // 单支耳机重量

      duration: 20, // 单次聆听时长
      controlMethod: '按键', // 操控方式
      models: [
      ],
      battery: '',
      case: {
         weight: 134.8,
         battery: '',
         width: 83.4,
         height: 168.6,
         length: 187.3
      },
      chargeMethods: [
         '闪电',
      ]
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
      AirPods: AirPods.reverse()
   },
   mounted(){
      // 全屏相关
      let chromeCore = /Chrome/i.test(navigator.userAgent)
      let mobileMode = /Mobile/i.test(navigator.userAgent)
      this.portraitMode = window.innerWidth > window.innerHeight
      this.mobileMode = mobileMode
      this.showFullScreenBtn = chromeCore && !mobileMode
      this.relocate(); // relocate items
      this.addDateDuration()
   },

   watch: {
      model() {
         this.relocate()
      }
   },
   methods: {
      // 全屏显示
      enterFullScreen(){
         document.documentElement.requestFullscreen().then()
      },
      addDateDuration(){
         this.AirPods.forEach(item => {
            item.dateDuration = new moment().from(new moment(item.dateInit))
         })
      },
      relocate(){
         this.heightApp = 0
         this.$nextTick().then(() => {
            let heightChip = document.querySelector('.airpods').offsetHeight + 40
            console.log(heightChip)
            if (heightChip < innerHeight) { // .card 高度小于屏幕高度时
               document.querySelector('.card-container').style.position = 'fixed'
               this.heightApp = innerHeight
               // pc
               if (!this.mobileMode){
                  document.querySelector('#app').style.height = innerHeight + 'px'
                  window.onwheel = event => {
                     // console.log(event.deltaY)
                     let container = document.querySelector('.card-container')
                     let scrollLeft = container.scrollLeft; // 文档左卷的高度
                     let scrollSpace = container.scrollWidth - window.innerWidth; // 横向滚动范围
                     let afterScrollLeft
                     if (event.deltaY > 0){
                        afterScrollLeft = scrollLeft > scrollSpace?  scrollLeft: scrollLeft + 100
                     } else {
                        afterScrollLeft =  scrollLeft + 100 * -1
                     }
                     // console.log(scrollLeft,scrollSpace, afterScrollLeft)
                     container.scrollTo(afterScrollLeft, 0)
                  }
               } else {
                  window.onscroll = null
               }
            } else {
               document.querySelector('body').style.height = 'auto'
               document.querySelector('.card-container').style.position = 'relative'
               window.onscroll = null

            }
         })
      }
   }
})

window.onresize = () => {
   let heightChip = document.querySelector('.airpods').offsetHeight + 40
   if (heightChip < innerHeight) { // pc
      app.heightApp = innerHeight
   }
}


// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
   app.didEnteredFullScreen = Boolean(document.fullscreenElement)
}
