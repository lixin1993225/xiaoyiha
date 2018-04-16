<template>
	<div class="new smile">
		<ul class="content">
			<li class="topli animated fadeIn" @click="newDetail(item)" v-for="item in items" v-bind:key="item.docid">
				<div class="articles">
					<p class="imgtit overflowhidden2">{{item.digest}}</p>
					<img v-if="item.imgsrc!=''" :src="item.imgsrc" alt="item.docid">
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'newindex',
		created(){
			this.request();
		},
		data(){
			return {
				items:[],
				pageNum:0,
			}
		},
		methods:{
			request(){
				this.$ajax({
					method:'get',
					url:'BD29LPUBwangning/'+this.pageNum+'-10.html',
				}).then(function(res){
					var val = JSON.parse(res.data.substring(9).slice(0,-1))
					this.items = val.BD29LPUBwangning
				}.bind(this))
			},
			newDetail(event){
				this.$store.commit('writeNews',{
					img:event.imgsrc,
					text:event.digest
				})
				console.log(event,this.$store.state)
				this.$goroute('/new/newdetail?')
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
		box-shadow 0 0.01rem 0.01rem #e3e3e3
		.articles
			box-sizing border-box
			width 100%
			p
				margin-bottom 0.06rem
				line-height:0.2rem
			img
				width 100%
				
</style>