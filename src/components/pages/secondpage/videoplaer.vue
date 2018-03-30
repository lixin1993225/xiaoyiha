<template>
	<video poster="http://dingyue.nosdn.127.net/JOehuw0mVaBJ81DeFOg7d4vgjSkUKjxL8BuM3hZlCldd91522043775790compressflag.jpeg" controls="controls"  autoplay="autoplay">
		<source src="https://flv3.bn.netease.com/videolib3/1803/26/VvMPg3567/HD/VvMPg3567-mobile.mp4" type="">
		<source src="https://flv.bn.netease.com/videolib3/1803/26/VvMPg3567/HD/movie_index.m3u8" type="">
		<source src="https://flv3.bn.netease.com/videolib3/1803/26/VvMPg3567/SD/VvMPg3567-mobile.mp4" type="">
		<source src="https://flv.bn.netease.com/videolib3/1803/26/VvMPg3567/SD/movie_index.m3u8" type="">
	</video>
</template>
<script type="text/javascript">
	export default{
		name:'player',
		data(){
			return {
				videoUrl:'/1803/26/VvMPg3567/HD/VvMPg3567-mobile.mp4'
			}
		}
	}
</script>
<style type="text/css" lang="stylus" scoped>
	video
		width 100%
</style>