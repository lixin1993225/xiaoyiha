<template>
	<div class="smile">
		<div class="content">
			<ul>
				<li class="topli animated pulse" v-for="item in allDatas" :key="item.headerName">
					<div class="neir">
						<img :src="item.group.user.avatar_url">
						<span class="overflowhidden">{{item.group.user.name}}</span>
					</div>
					<article class="articles">{{item.group.content}}</article>
					<ul class="bottab clearfloat">
						<li>
							<span class="bottabzan">{{item.group.digg_count}}</span>
						</li>
						<li>
							<span class="bottabzan">{{item.group.bury_count}}</span>
						</li>
						<li>
							<span class="bottabzan">{{item.group.comment_count}}</span>
						</li>
						<li>
							<span class="bottabzan">{{item.group.share_count}}</span>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import HeaderImg from '../../assets/images/center_c.png'
	import '../../assets/style/animate.min.css'
	export default{
		name:'xiao',
		created(){
			this.request();
		},
		data(){
			return {
				allDatas:[
					{
						headerImg:HeaderImg,
						headerName:'LiZn'
					}
				]
			}
		},
		methods:{
			request(){
				this.$ajax({
					method:'get',
					url:'/pic?is_json=1&app_name=neihanshequ_web&max_time='+(new Date()).getTime()+'&csrfmiddlewaretoken=4508864a83bcea6013f10cd0046d7e9e'
				}).then(function(res){
					this.allDatas = res.data.data.data
				}.bind(this)).catch(function(res){
					console.log(res)
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.smile
		font-size:0.16rem
		box-sizing border-box;
		width 100%;
		height 100%;
		padding 0.12rem;
		.topli
			display:flex
			flex-direction column
			box-sizing border-box;
			width 100%;
			height auto;
			margin-bottom 0.12rem
			background #FDFDFD;
			border 1px solid #f0f0f0;
			padding 0.12rem
			.neir 
				width inhri;
				height 0.3rem;
				font-size:0.16rem
				margin-bottom 0.06rem
				img
					width:0.3rem;
					height 0.3rem
					border-radius 0.3rem
					margin-right 0.13rem
				span	
					display inline-block
					width 70%;
					line-height 0.3rem
					font-size 0.16rem
					color #787878
			.articles
				font-size 0.18rem
				color #333
				margin-bottom 0.07rem
			.bottab
				li
					box-sizing border-box
					float left
					width 25%;
					height 0.24rem
					padding-right:0.06rem
					color #999
					line-height:0.24rem
					padding-left 0.24rem
					&:nth-child(1)
						background url(../../assets/images/zan.png) no-repeat left center;
						background-size 0.24rem
					&:nth-child(2)
						background url(../../assets/images/fanzan.png) no-repeat left center;
						background-size 0.2rem
					&:nth-child(3)
						background url(../../assets/images/ping.png) no-repeat left center;
						background-size 0.24rem
					&:nth-child(4)
						background url(../../assets/images/zhuanfa.png) no-repeat left center;
						background-size 0.24rem
					.bottabzan
						display:inline-block
						font-size 0.16rem;
						


</style>