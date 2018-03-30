<template>
	<div class="girl smile">
		<ul class="imgs">
			<li class="animated swing" v-for="item in imgInf" :key="item.setid">
				<img :src="item.cover">
				<p>{{item.setname}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'girl',
		created(){
			this.request()
		},
		data(){
			return {
				pageNum:20,
				imgInf:[],
			}
		},
		methods:{
			request(){
				this.$ajax({
					method:'get',
					url:'6LRK0031,3S010031/'+this.pageNum+'/20/cache_6LRK_3S01_.json'
				}).then(function(res){
					var val = JSON.parse(res.data.substring(17).slice(0,-1))
					this.imgInf = val
					//console.log(this.imgInf )
				}.bind(this)).catch(function(res){
					console.log(res)
				})
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.imgs
		width 100%
		height auto
		display flex
		flex-flow row wrap
		li
			width:48%
			height auto
			min-height 2rem
			box-shadow 0 0.01rem 0.01rem #e3e3e3
			&:nth-child(odd)
				margin-right 2%
			margin-bottom 2%
			img
				display inline-block
				width:100%
				min-height 1.6rem
			p
				box-sizing border-box
				font-size 0.14rem
				color #555
				width 100%
				height 0.4rem
				padding 0.06rem
</style>
