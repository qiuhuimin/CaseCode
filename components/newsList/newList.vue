<template>
	<view >
		<view class="news-item" v-for="(item,index) in newsList" :key="index" @click="goDetail(item.id)">
			<view class="news-img">
				<image :src="item.img_url" mode=""></image>
			</view>
			
			<view class="information">
				<view class="title">
					<text>{{item.title}}</text>
				</view>
				<view class="time">
					<text>发表时间：{{item.add_time | formDate()}} </text>
					<text>浏览{{item.click}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{}
		},
		props:['newsList'],
		filters:{
			//时间格式化，过滤器
			formDate(date){
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = nDate.getMonth().toString().padStart(2,0)
				const day = nDate.getDay().toString().padStart(2,0)
				return year+'-'+month+'-'+day
			}
		},
		methods:{
			goDetail(id){
				uni.navigateTo({
					url:'../../pages/newsDetail/newsDetail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	pages{
		background-color: white;
	}
	.news-item{
		width: 100%;
		height: 200rpx;
		display: flex;
		border-bottom: 1px solid #F4EEEF;
		padding: 6rpx 0 4rpx 10rpx;
		.news-img{
			width: 30%;
			height: 200rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.information{
			width: 68%;
			padding: 10rpx 0 0 10rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-content: space-between;
			.title{
				margin-bottom: 20rpx;
				font-size: 32rpx;
			}
			.time{
				width: 100%;
				font-size: 26rpx;
				color: #acb7bf;
				text:nth-child(2){
					margin-left:100rpx;
				}
			}
		}
	}
</style>
