<template>
	<div name="fourtodo">
		<ul class="bottab clearfloat">
			<li>
				<span class="bottabzan">{{item.group.digg_count}}</span>
			</li>
			<li>
				<span class="bottabzan">{{item.group.bury_count}}</span>
			</li>
			<li>
				<span class="bottabzan">{{item.group.comment_count}}</span>
			</li>
			<li>
				<span class="bottabzan">{{item.group.share_count}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:'todos',
		props:{
			item:{
				type:Object,
				required:true
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.bottab
		li
			box-sizing border-box
			float left
			width 25%;
			height 0.24rem
			padding-right:0.06rem
			color #999
			line-height:0.24rem
			padding-left 0.24rem
			&:nth-child(1)
				background url(../../assets/images/zan.png) no-repeat left center;
				background-size 0.24rem
			&:nth-child(2)
				background url(../../assets/images/fanzan.png) no-repeat left center;
				background-size 0.2rem
			&:nth-child(3)
				background url(../../assets/images/ping.png) no-repeat left center;
				background-size 0.24rem
			&:nth-child(4)
				background url(../../assets/images/zhuanfa.png) no-repeat left center;
				background-size 0.24rem
			.bottabzan
				display:inline-block
				font-size 0.16rem;
</style>