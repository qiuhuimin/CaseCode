<template>
	<view class="social">
		<scroll-view class="left" :scroll-y="true">
			<view :class="index == active?'active':' '" @click="cateClickHandle(index,item.id)" v-for="(item,index) in cates" :key="index">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true" >
			<view class="item" v-for="(item,index) in secondData" :key="index">
				<image :src="item.img_url" mode="" @click="previewImg(item.img_url)"></image>
				<text class="font">{{item.title}}</text>
			</view>
			<view class="" v-if="this.secondData.length === 0">
				暂无数据
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				cates:[],
				active:0,
				secondData:[]
			}
		},
		onLoad(){
			this.getCateList()
		},
		methods:{
			async getCateList() {
				const res = await this.$myRequest({
					url:"/api/getimgcategory"
				})
				this.cates = res.data.message
				this.cateClickHandle(0,this.cates[0].id)
			},
			async cateClickHandle(index,id){
				this.active = index
				const res = await this.$myRequest({
					url:"/api/getimages/"+id
				})
				console.log(res)
				this.secondData = res.data.message
				
			},
			previewImg(current){
				const urls=this.secondData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.social{
		width: 100%;
		height: 100%;
		background-color: white;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #F4EEEF;
			view{
				height:150rpx;
				width: 200rpx;
				text-align: center;
				line-height: 150rpx;
				font-size: 30rpx;
				border-bottom: 1px solid #F4EEEF;
			}
			.active{
				background-color: $main-color;
				color: white;
			}
			
		}
		.right{
			width: 520rpx;
			margin: 10rpx auto;
			image{
				width: 520rpx;
				height: 520rpx;
				border-radius: 10rpx;
			}
			.font{
				display: block;
				width: 100%;
				height: 100rpx;
				font-size: 30rpx;
			}
		}
	}
</style>

