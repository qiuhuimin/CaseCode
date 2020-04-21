<template>
	<view class="newsDetail">
		<view class="title">
			{{detail.title}}
		</view>
		<view class="info">	
			<text>发表时间：{{detail.add_time | formDate}}</text>
			<text>浏览{{detail.click}}次</text>
		</view>
		<view class="cont">
			<rich-text  :nodes="detail.content"></rich-text>
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				id:0,
				detail:{}
			}
		},
		onLoad(options) {
			console.log(options)
			this.id = options.id
			this.getDetail()
		},
		methods:{
			async getDetail(){
				const res = await this.$myRequest({
					url:'/api/getnew/'+this.id
				})
				this.detail = res.data.message[0]
				
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white;
	}
	.newsDetail{
		width: 100%;
		height: auto;
		background-color: white;
		.title{
			font-size: 32rpx;
			font-weight: bold;
			color: $shop-color;
			width: 100%;
			height: 80rpx;
			text-align: center;
			line-height:80rpx;
			
		}
		.info{
			 font-size: 28rpx;
			 display: flex;
			 color: #d5d0d1;
			 justify-content: space-between;
			 text{
				 padding: 0 10rpx;
			 }
		}
		.cont{
			width: 98%;
			font-size: 30rpx;
			margin: 20rpx auto;
			padding:0 20rpx;
			
		}
	}
</style>
