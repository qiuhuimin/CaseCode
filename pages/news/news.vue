<template>
	<view class="news">
		<view class="news-list">
			<news-item :newsList="newsList"></news-item>
		</view>
	</view>
</template>

<script>
	import newsItem from '../../components/newsList/newList.vue'
	export default{
		data(){
			return{
				newsList:[]
			}
		},
		components:{
			"news-item":newsItem
		},
		onLoad(){
			this.getNewsList()
		},
		methods:{
			//资讯列表
			async getNewsList(){
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				})
				this.newsList = res.data.message
			}
		}
	}
</script>

<style lang="scss">
	page{
		width: 100%;
		height: 100%;
		background-color: white;
	}
	.news{
		background-color: white;
		width: 100%;
	}
</style>
