<template>
	<div class="newsdetail smile">
		<p class="img"><img :src="rendState.img" alt=""></p>
		<p class="texts">{{rendState.text}}</p>
	</div>
</template>
<script>
	export default {
		name:'newdetail',
		data(){
			return {
				rendState:this.$store.state.newsDetail			
			}
		},
		created(){
			console.log(this.rendState)
		},
		methods:{
			
		}
	}
</script>
<style lang="stylus" scoped>
	.newsdetail
		.img
			width:100%
			img
				width:100%
		.texts
			width 100%
			padding-top:0.12rem
</style>