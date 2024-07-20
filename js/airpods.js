/*****************************
 Create Date: 20220123203326
 Update Date: 20220123203329
 *****************************/

const AirPods = [
   {
      name: 'AirPods 1',
      img: 'https://diary-container.kylebing.cn/FqAanw7FhH7zIDj5adZS3aseE5zT',
      isNew: false,
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
         chip: '',
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
      img: 'https://diary-container.kylebing.cn/FqAanw7FhH7zIDj5adZS3aseE5zT',
      isNew: false,
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
         chip: '',
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
      name: 'AirPods Pro',
      img: 'https://diary-container.kylebing.cn/FvWpP3XuLVnhVEuXtKhz-wthaEtT',
      isNew: false,
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
         chip: '',
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
      img: 'https://diary-container.kylebing.cn/FsK8AS45rMk7oKg74Ej5IAQXKuL3',
      isNew: false,
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
         chip: '',
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
   {
      name: 'AirPods 3',
      img: 'https://diary-container.kylebing.cn/FgKg6PGMLcVEWYYjV5hpvPnnFIzR',
      isNew: false,
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
         chip: '',
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
      name: 'AirPods Pro 2',
      img: 'https://diary-container.kylebing.cn/Fs4P6VWybmt3pcRs4Q0IEId-CE0s',
      isNew: true,
      dateInit: '2022-09-08',
      dateEnd: '',
      osLast: '-',
      chip: 'Apple H2',
      noise_reduction: true, // 降噪
      bluetooth: '5.3',
      associatedOs: 'iOS 16',
      weight: 5.3, // 单支耳机重量

      duration: 6, // 单次聆听时长
      controlMethod: '按压耳机柄,滑动', // 操控方式
      models: [
         // 'A2084'
      ],
      battery: 93, // mwh
      case: {
         chip: 'Apple U1',
         weight: 50.8,
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

]

let app = new Vue({
   el: '#app',
   data: {
      // date
      dateEnd: '2023.05.31',
      // thumb up
      pingPongInterval: null,
      thumbsUpKey: 'airpods',
      heartActive: false,
      thumbsUpCount: 0,

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

      this.websocketInit()
      this.getInitThumbsUpCount()
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
                  let scrollFull = 200 * this.AirPods.length;
                  let heightPage = scrollFull + innerHeight; // 计算可滚动长度
                  document.querySelector('body').style.height = heightPage + 'px';
                  window.onscroll = () => {
                     let scrollTop = document.documentElement.scrollTop; // 文档上卷的高度
                     let container = document.querySelector('.card-container');
                     let scrollSpace = container.scrollWidth - window.innerWidth; // 横向滚动范围
                     let scrollLeft = (scrollTop / scrollFull) * scrollSpace
                     container.scrollTo(scrollLeft, 0);
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
      },
      // 点赞功能
      getInitThumbsUpCount(){
         axios.get('../../portal/thumbs-up?key=' + this.thumbsUpKey)
             .then(res => {
                if (res.data && res.data.data){
                   this.thumbsUpCount = res.data.data
                }
             })
      },
      websocketInit(){
         this.websocket = new WebSocket('ws://kylebing.cn/ws')
         this.websocket.onopen = this.websocketOnOpen
         this.websocket.onmessage = this.websocketOnMessage
         this.websocket.onerror = this.websocketOnError
         this.websocket.onclose = this.websocketClose
      },
      websocketOnOpen() {
         this.portStatus = 'success'
         this.pingPongInterval = setInterval(()=>{
            if (this.websocket){
               switch (this.websocket.readyState){
                  case 0: // connecting
                     break;
                  case 1: // open
                     let message = new WSMessage(WSMessage.type.heartBeat, 'ping')
                     this.websocket.send(JSON.stringify(message))
                     break;
                  case 2:  // closing
                     clearInterval(this.pingPongInterval)
                     break;
                  case 3: // closed
                     clearInterval(this.pingPongInterval)
                     break;
               }
            }
         }, 10000)
      },
      websocketOnMessage(res) {
         let receivedMessage = JSON.parse(res.data)
         switch (receivedMessage.type){
            case WSMessage.type.heartBeat:
               break;
            case WSMessage.type.thumbsUp:
               if (receivedMessage.content.key === this.thumbsUpKey){
                  this.thumbsUpCount = receivedMessage.content.count
               }
               break;
         }
      },
      websocketOnError() {
         this.portStatus = 'error'
         this.websocket.send('on error')
      },
      websocketClose() {
         this.portStatus = 'closed'
         console.log('socket has closed')
      },
      thumbsUp(){
         this.sendMessage(this.thumbsUpKey)
      },
      sendMessage(key){
         if (this.websocket) {
            this.heartActive = true
            let message = new WSMessage(WSMessage.type.thumbsUp, {
               key: key
            })
            this.websocket.send(JSON.stringify(message))
         }
      },
    }
})

class WSMessage{
   constructor(type, content) {
      this.type = type
      this.content = content
   }
   static type = {
      thumbsUp: 'thumbs-up',
      heartBeat: 'heart-beat',
   }
}

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
