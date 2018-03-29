<template>
	<div class="neir">
		<img :src="item.group.user.avatar_url">
		<span class="overflowhidden">{{item.group.user.name}}</span>
	</div>
</template>
<script>
	export default{
		name:'neir',
		props:{
			item:{
				type:Object,
				required:true
			}
		}
	}
</script>
<style lang="stylus" scoped>
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
</style>