<template>
	<view class="content">
		<goods-list :goods='goods'></goods-list>
		
		<view class="page-bottom" v-show="flag">-----我是有底线的----- </view>
	</view>
</template>

<script>
	import goodsList from '../../components/goodsList/goodsList.vue'
	export default{
		data(){
			return{
				pageindex:1,
				goods:[],
				flag:false
			}
		},
		components:{
			"goods-list":goodsList
		},
		onLoad() {
			this.getHotGoods()
		},
		methods:{
			async getHotGoods(callBack){
				const res = await this.$myRequest({
					url:"/api/getgoods?pageindex="+this.pageindex
				})
				this.goods = [...this.goods,...res.data.message]
				callBack && callBack()
			}
		},
		//上拉加载
		onReachBottom() {
			if(this.goods.length<this.pageindex*10) return this.flag = true
			this.pageindex++
			this.getHotGoods()
		
		},
		//下拉刷新
		onPullDownRefresh() {
			this.pageindex = 1;
			this.goods = [];
			this.flag = false
			setTimeout(()=>{
				this.getHotGoods(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
			
			
		}
		
	}
</script>

<style lang="scss">
	.page-bottom{
		width: 750rpx;
		height: 100rpx;
		text-align: center;
		line-height:100rpx;
		background-color: white;
		font-size: 30rpx;
	}
	.content{
		width: 100%;
		height:100%;
	}
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
