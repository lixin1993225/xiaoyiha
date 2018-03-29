<template>
	<div class="smile">
		<div class="content">
			<ul>
				<li class="topli animated pulse" v-for="item in allDatas" :key="item.headerName">
					<HeaderInf :item=item />
					<article class="articles">{{item.group.content}}</article>
					<WeTodos :item=item />
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import HeaderImg from '../../assets/images/center_c.png'
	import '../../assets/style/animate.min.css'
	import WeTodos from '../publictemplate/todothings'
	import HeaderInf from '../publictemplate/usersinf'
	export default{
		name:'xiao',
		created(){
			this.request();
		},
		data(){
			return {
				allDatas:[]
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
		},
		components:{
			WeTodos,
			HeaderInf
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
			.articles
				font-size 0.18rem
				color #333
				margin-bottom 0.07rem
						


</style>