<template>
	<div class="smile">
		<div class="content">
			<ul>
				<li class="topli animated bounceInDown" v-for="item in allDatas" :key="">
					<!-- <HeaderInf :item=item /> -->
					<article class="articles">{{item.digest}}</article>
					<!-- <WeTodos :item=item /> -->
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import HeaderImg from '../../assets/images/center_c.png'
	import '../../assets/style/animate.min.css'
	import WeTodos from '../publictemplate/todothings'
	import HeaderInf from '../publictemplate/usersinf'
	export default{
		name:'xiao',
		created(){
			if(!JSON.parse(sessionStorage.getItem('index'))){
				this.request(this.pageNum);
			}else{
				this.allDatas = JSON.parse(sessionStorage.getItem('index'))
			}
		},
		data(){
			return {
				allDatas:[],
				pageNum:0,
				scrollFalg:true
			}
		},
		methods:{
			request(page){
				this.$ajax({
					method:'get',
					url:'joke/chanListNews/T1419316284722/2/'+page+'-10.html?callback=joke'+this.pageNum
				}).then(function(res){
					var val = JSON.parse(res.data.substring(6).slice(0,-1))
					this.allDatas = this.allDatas.concat(val['段子'])
					sessionStorage.setItem('index',JSON.stringify(this.allDatas))
					this.scrollFalg = true
					console.log(123)
				}.bind(this)).catch(function(res){
					console.log(res)
					this.scrollFalg = false
				})					
			}
		},
		mounted(){
			window.addEventListener('scroll',function(){
				if(document.body.scrollTop+document.body.offsetHeight>=document.body.scrollHeight){
					console.log(this.scrollFalg)
					if(this.scrollFalg){
						this.scrollFalg=false;
						this.request(this.pageNum+10)
					}
				}
			}.bind(this))
		}
		// components:{
		// 	WeTodos,
		// 	HeaderInf
		// }
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
			box-shadow 0 0.01rem 0.01rem #e3e3e3
			.articles
				font-size 0.18rem
				color #333
				margin-bottom 0.07rem
						


</style>