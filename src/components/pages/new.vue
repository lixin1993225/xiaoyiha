<template>
	<div class="new smile">
		<ul class="content">
			<li class="topli animated pulse" v-for="item in items" v-bind:key="item.headerName">
				<HeaderInf v-bind:item="item"></HeaderInf>
				<div class="articles">
					<p class="imgtit overflowhidden">{{item.group.content}}</p>
					<img src="item.group." alt="">
				</div>
				<WeTodos :item="item"></WeTodos>
			</li>
		</ul>
	</div>
</template>
<script>
	import WeTodos from '../publictemplate/todothings'
	import HeaderInf from '../publictemplate/usersinf'
	export default{
		name:'new',
		created(){
			this.request();
		},
		data(){
			return {
				items:[],
			}
		},
		methods:{
			request(){
				this.$ajax({
					method:'get',
					url:'/video?is_json=1&app_name=neihanshequ_web&max_time='+(new Date()).getTime()+'.0',
				}).then(function(res){
					this.items = res.data.data.data
				}.bind(this))
			}
		},
		components:{
			HeaderInf,
			WeTodos
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
				width 100%
				
</style>