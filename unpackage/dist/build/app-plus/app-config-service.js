
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/shopcart/shopcart","pages/mine/mine","pages/goods/goods","pages/socialimg/socialimg","pages/concat/concat","pages/studyvideo/studyvideo","pages/newsDetail/newsDetail","pages/goodsDetail/goodsDetail"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"贺贺淘淘","navigationBarBackgroundColor":"#50b1e4","backgroundColor":"#F8F8F8","enablePullDownRefresh":true},"tabBar":{"backgroundColor":"white","selectedColor":"#50b1e4","color":"#ccc","list":[{"pagePath":"pages/index/index","iconPath":"static/images/tabbar/index.png","selectedIconPath":"static/images/tabbar/index-selected.png","text":"首页"},{"pagePath":"pages/news/news","iconPath":"static/images/tabbar/zixun.png","selectedIconPath":"static/images/tabbar/zixun-selected.png","text":"咨讯"},{"pagePath":"pages/shopcart/shopcart","iconPath":"static/images/tabbar/shopcar.png","selectedIconPath":"static/images/tabbar/shopcar-selected.png","text":"购物车"},{"pagePath":"pages/mine/mine","iconPath":"static/images/tabbar/mine.png","selectedIconPath":"static/images/tabbar/mine-selected.png","text":"会员"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"贺贺淘淘","compilerVersion":"2.6.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"贺贺淘淘"}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"资讯"}},{"path":"/pages/shopcart/shopcart","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/goods/goods","meta":{},"window":{"navigationBarTitleText":"商品列表"}},{"path":"/pages/socialimg/socialimg","meta":{},"window":{}},{"path":"/pages/concat/concat","meta":{},"window":{}},{"path":"/pages/studyvideo/studyvideo","meta":{},"window":{}},{"path":"/pages/newsDetail/newsDetail","meta":{},"window":{"navigationBarTitleText":"资讯详情"}},{"path":"/pages/goodsDetail/goodsDetail","meta":{},"window":{"navigationBarTitleText":"商品详情"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});
