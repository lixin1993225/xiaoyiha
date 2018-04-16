<template>
	<video poster="http://nos.netease.com/vimg/snapshot/20180416/cXEpn5924_cover.jpg" controls="controls"  v-bind="{id:'https://flv3.bn.netease.com/videolib3/1804/16/cXEpn5924/HD/cXEpn5924-mobile.mp4'}"  @click="clickImg" autoplay="autoplay">
	</video>
</template>
<script type="text/javascript">
	export default{
		name:'player',
		data(){
			return {
				videoUrl:'/1803/26/VvMPg3567/HD/VvMPg3567-mobile.mp4'
			}
		},
		methods:{
			clickImg(event){
				window.location.replace(event.target.id)
			}
		}
	}
</script>
<style type="text/css" lang="stylus" scoped>
	video
		width 100%
</style>