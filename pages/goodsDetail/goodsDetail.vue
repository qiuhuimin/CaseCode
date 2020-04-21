<template>
	<view class="goodsDetail">
		<swiper class="detailImg" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in imgsArr" :key="index">
				<view class="swiper-item"><image :src="item.src" mode=""></image></view>
			</swiper-item>
		</swiper>
		<view class="info">
			<view class="price">
				<text>${{ infoCont.sell_price }}</text>
				<text>${{ infoCont.market_price }}</text>
			</view>
			<view class="title">{{ infoCont.title }}</view>
		</view>
		<view class="line"></view>
		<view class="goodsnum">
			<view class="">货号：{{ infoCont.goods_no }}</view>
			<view class="">库存：{{ infoCont.stock_quantity }}</view>
		</view>
		<view class="line"></view>
		<view class="intro">详细介绍</view>
		<view class="goodsCont"><rich-text :nodes="cont.content"></rich-text></view>
		<view class="nav-bar"><uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick"></uni-goods-nav></view>
	</view>
</template>

<script>
import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue';
export default {
	data() {
		return {
			id: 0,
			imgsArr: [],
			infoCont: {},
			cont: {},
			options: [
				{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				},
				{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺'
				},
				{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
					text: '购物车',
					info: 2
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			]
		};
	},
	components: { uniGoodsNav },
	onLoad(options) {
		this.id = options.id;
		this.getDetailImgs();
		this.getInfo();
		this.getDetailCont();
	},
	methods: {
		//获取详情轮播图片
		async getDetailImgs() {
			const res = await this.$myRequest({
				url: '/api/getthumimages/' + this.id
			});
			this.imgsArr = res.data.message;
		},

		//获取详请介绍
		async getInfo() {
			const res = await this.$myRequest({
				url: '/api/goods/getinfo/' + this.id
			});
			this.infoCont = res.data.message[0];
		},
		//获取详请内容
		async getDetailCont() {
			const res = await this.$myRequest({
				url: '/api/goods/getdesc/' + this.id
			});
			// if(res.data.message.children){
			this.cont = res.data.message[0];
			// }
		},
		onClick(e) {
			uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
			});
		},
		buttonClick(e) {
			console.log(e);
			this.options[2].info++;
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: white;
}
.goodsDetail {
	width: 100%;
	height: auto;
	.detailImg {
		width: 98%;
		height: 700rpx;
		padding: 0 20rpx;
		image {
			width: 100%;
			height: 700rpx;
		}
	}
	.info {
		width: 100%;
		height: 172rpx;
		.price {
			padding: 10rpx 10rpx;
			line-height: 70rpx;
			text:nth-child(1) {
				font-size: 38rpx;
				color: $shop-color;
			}
			text:nth-child(2) {
				font-size: 30rpx;
				color: #a2a2a2;
				text-decoration: line-through;
				margin-left: 30rpx;
			}
		}
		.title {
			padding: 0 10rpx;
			font-size: 34rpx;
			line-height: 50rpx;
		}
	}
	.line {
		width: 750rpx;
		height: 6rpx;
		background-color: #eee;
	}
	.goodsnum {
		padding: 0 10rpx;
		font-size: 34rpx;
		view {
			line-height: 58rpx;
		}
	}
	.intro {
		padding: 0 10rpx;
		font-size: 34rpx;
		line-height: 58rpx;
		border-bottom: 1px solid $border-color;
	}
	.goodsCont {
		font-size: 30rpx;
		padding: 10rpx 10rpx 50rpx 10rpx;
		line-height: 50rpx;
	}
	.nav-bar{
		width: 100%;
		position: fixed;
		bottom: 0;
	}
}
</style>
