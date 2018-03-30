<template>
	<div class="smile">
		<ul class="videos">
			<li class="animated fadeIn" v-for="video in videos" :key="" @click="$goroute('/center/player')">
				<img class="cover" :src="video.cover">
				<p class="videotips overflowhidden2">{{video.title}}</p>					
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'videos',
		created(){
			this.request()
		},
		data(){
			return {
				videos:[]
			}
		},
		methods:{
			request(){
				this.$ajax({
					method:'get',
					url:'Video_Recom/0-10.do?callback=getVideoList'
				}).then(function(res){
					var val = JSON.parse(res.data.substring(13).slice(0,-1));
					this.videos = val.Video_Recom
					console.log(JSON.parse(res.data.substring(13).slice(0,-1)))
				}.bind(this))
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.videos
		li
			position relative
			width 100%
			height 1.95rem
			margin-bottom 0.06rem
			background-size 100%
			.cover
				position absolute
				z-index 10
				top 0
				width 100%
				height 100%
			.videotips
				position absolute
				z-index 100
				bottom 0
				box-sizing border-box
				width 100%
				height 0.6rem
				font-size 0.16rem
				color #fff
				padding 0.06rem
				background:url(../../assets/images/shade.png) no-repeat center
				background-size cover

</style>