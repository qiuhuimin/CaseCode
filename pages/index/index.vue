<template>
	<view class="content">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(item, index) in swipersArr" :key="index"><image :src="item" mode=""></image></swiper-item>
		</swiper> 
		<!-- 导航栏 -->
		<view class="nav">
			<view class="nav-item" v-for="(item,index) in navdata" :key='index' @click="goto(item.url)">
				<view :class="item.icon"></view>
				<text class="nav-font">{{item.title}}</text>
			</view>
		</view>
		<!-- 商品推荐 -->
		<view class="goods">
			<view class="goods-bar"> 推荐商品 </view>
			<goods-list :goods="goods"> </goods-list>
		</view>
	</view>
</template>

<script>
import goodsList from '../../components/goodsList/goodsList.vue'
export default {
	data() {
		return {
			swipersArr: ['../../static/images/banner/banner01.jpg', '../../static/images/banner/banner02.jpg', '../../static/images/banner/banner03.jpg'],
			goods:[],
			navdata:[
				{
					icon:'iconfont icon-ziyuan',
					title:'贺贺超市',
					url:'/pages/goods/goods'
				},
				{
					icon:'iconfont icon-guanyuwomen',
					title:'联系我们',
					url:'/pages/concat/concat'
				},
				{
					icon:'iconfont icon-tupian',
					title:'社区图片',
					url:'/pages/socialimg/socialimg'
				},
				{
					icon:'iconfont icon-shipin',
					title:'学习视频',
					url:'/pages/studyvideo/studyvideo'
				}
			]
		};
	},
	components:{
		'goods-list':goodsList
	},
	onLoad() {
		this.getHotgoods()
	},
	methods: {
		//获取商品列表
		async getHotgoods(){
			const res = await this.$myRequest({
				url:'/api/getgoods?pageindex=1'
			})
			this.goods = res.data.message
			// #ifdef MP-WEIXIN
			console.log(this.goods)
			// #endif
		},
		//导航栏跳转
		goto(url){
			uni.navigateTo({
				url:url
			})
		}
		
	}
};
</script>

<style lang="scss">
.content {
	
	swiper {
		width: 750rpx;
		height: 380rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	
	.nav{
		background-color: white;
		display: flex;
		.nav-item{
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				border-radius: 60rpx;
				background-color: #50b1e4;
				text-align: center;
				font-size: 60rpx;
				line-height: 120rpx;
				color: white;
				margin: 10rpx auto;
			}
			.nav-font{
				font-size: 30rpx;
			}
			.icon-tupian{
				font-size: 50rpx;
			}
		}
	}
	
	.goods{
		// background-color: white;
		width: 100%;
		height: auto;
		.goods-bar{
			background-color: white;
			width: 100%;
			height: 100rpx;
			text-align: center;
			line-height: 100rpx;
			margin: 4rpx 0 4rpx 0;
			color: #d64f4a;
			letter-spacing: 40rpx;
		}
		
		
	}
}
</style>
