<template>
	<div class="new smile">
		<ul class="content">
			<li class="topli animated bounceInUp" v-for="item in items" v-bind:key="item.docid">
				<div class="articles">
					<p class="imgtit overflowhidden2">{{item.digest}}</p>
					<img v-for="img in item.picInfo" :src="img.url" alt="item.docid">
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'new',
		created(){
			this.request();
		},
		data(){
			return {
				items:[],
				newsTime:0,
			}
		},
		methods:{
			request(){
				this.$ajax({
					method:'get',
					url:'recommend/10-10.html?hasad=1&miss=24&refresh=A&offset=0&size=100&callback=syrec1',
				}).then(function(res){
					var val = JSON.parse(res.data.substring(7).slice(0,-1))
					this.items = val.list
					console.log(this.items)
				}.bind(this))
			}
		}
	}
</script>
<style lang="stylus" scoped>
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
			box-sizing border-box
			width 100%
			p
				margin-bottom 0.06rem
				line-height:0.2rem
			img
				width 100%
				
</style>