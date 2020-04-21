<template>
	<view >
		<view class="goodsCont">
			<view class="goods-details" v-for="(item,index) in goods" :key="index" @click="goGoodsDetail(item.id)">
				<view class="goods-img"><image :src="item.img_url" mode=""></image></view>
				<view class="price">
					<text>{{ item.sell_price}}</text>
					<text>{{ item.market_price}}</text>
				</view>
				<view class="name">{{ item.title}}</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props:['goods'],
		methods:{
			goGoodsDetail(id){
				uni.navigateTo({
					url:'../../pages/goodsDetail/goodsDetail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
.goodsCont {
	width: 750rpx;
	height:auto;
	margin-top: 4rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods-details {
		width: 47%;
		margin-bottom: 10rpx;
		background-color: white;
		padding: 10rpx 10rpx;
		.goods-img {
			width: 85%;
			height: 300rpx;
			margin: auto;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.price {
			font-size: 36rpx;
			color: $shop-color;
			margin-top: 20rpx;
			text:nth-child(2) {
				font-size: 28rpx;
				color: #ccc;
				text-decoration: line-through;
				margin-left: 30rpx;
			}
		}
		.name {
			font-size: 28rpx;
			line-height: 50rpx;
			padding-top: 10rpx;
			padding-bottom: 10rpx;
		}
	}
}
</style>
