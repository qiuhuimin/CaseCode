<template>
	<view class="concat">
		<view class="bg">
			<image src="../../static/images/concat-bg.jpg" mode=""></image>
		</view>
		<view class="information">
			<view class="phonenum" @click="callTelephone">
				<text>联系电话：</text>
				<text>18626668664（点击拨打）</text>
			</view>
			<view class="line"></view>
			<view class="addr">
				<text>地址：</text>
				<text>吉林省扶余市太祖路1949号国家电网</text>
			</view>
			<map class="map"  :latitude="latitude"  :longitude="longitude" :scale="scale" :markers="covers"></map>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			longitude: '126.059182', //经度
			latitude: '44.991755', //纬度
			scale: 14,
			covers: [
				{
					latitude: 44.991755,
					longitude: 126.059182,
					iconPath: '../../static/images/icon/dw.png',
					width:30,
					height:30
				}
			]
		};
	},
	methods:{
		callTelephone(){
			uni.makePhoneCall({
			    phoneNumber: '18626668664' 
			});
		}
	}
};
</script>

<style lang="scss">
.concat {
	background-color: white;
	width: 750rpx;
	height: auto;
	.bg {
		width: 100%;
		height: 400rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.information {
		width: 100%;
		height: auto;
		font-size: 34rpx;
		.phonenum {
			width: 100%;
			background-color: white;
			height: 100rpx;
			line-height: 100rpx;
			padding-left: 10rpx;
		}
		.line {
			width: 98%;
			height: 1rpx;
			border: 1rpx solid #f4eeef;
			margin: 0 auto;
		}
		.addr {
			width: 100%;
			background-color: white;
			height: 100rpx;
			line-height: 100rpx;
			padding-left: 10rpx;
		}
		.map {
			width: 100%;
			height:650rpx;
		}
	}
}
</style>
