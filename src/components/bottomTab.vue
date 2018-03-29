<template>
	<section class="tabs">
      <ul class="tablists clearfloat">
           <li class="tabli" :class="[filter===tab.indexNum?'active':'']" v-for="tab in tablist" :key="tab.indexNum" @click="statusChange(tab.indexNum)" >
           	<router-link :to="tab.link">
           		<dl>
               		<dt><img class="imgsize" :class="" :src="filter===tab.indexNum?tab.imgSrcck:tab.imgSrcnck" alt=""></dt>
               		<dd class="tabtips">{{tab.tab}}</dd>
               	</dl>
               </router-link>
          </li>
      </ul>    			
	</section>
</template>
<script>
	import xiaoC from '../assets/images/xiaocry_c.png';
	import newC from '../assets/images/new_c.png';
	import girlC from '../assets/images/girl_c.png';
	import centerC from '../assets/images/center_c.png';

	import xiaonC from '../assets/images/xiaocry_nc.png';
	import newnC from '../assets/images/new_nc.png';
	import girlnC from '../assets/images/girl_nc.png';
	import centernC from '../assets/images/center_nc.png';
    export default {
      name: 'bottomTab',
      data(){
      		return {
      			tablist:[
      				{tab:'趣事',link:'/xiao',indexNum:'xiao',imgSrcck:xiaoC,imgSrcnck:xiaonC},
      				{tab:'趣闻',link:'/new',indexNum:'new',imgSrcck:newC,imgSrcnck:newnC},
      				{tab:'趣图',link:'/girl',indexNum:'gril',imgSrcck:girlC,imgSrcnck:girlnC},
      				{tab:'趣我',link:'/center',indexNum:'center',imgSrcck:centerC,imgSrcnck:centernC}
      			],
      			filter:'xiao'
      	     }
      },
      methods:{
      	statusChange:function(res){
      		//console.log(this.$store.state.indexNum)
      		this.filter = res
      	}
      }
    }
</script>
<style lang="stylus" scoped>
	.tabs
		position fixed;
		z-index 10000;
		bottom 0;		
		width 100%;
		border-top 1px solid #e8e8e8;
		background #f6f6f6;
	.tablists
		width 100%;
		.tabli
			float left;
			width 25%;
			text-align center;
			padding 0.06rem 0
			font-size 0.16rem;
			.imgsize
				width 0.25rem
				height 0.25rem
			.tabtips
				font-size 0.14rem
				color #c2cfcc
		.active dd
			color #00b38a!important;
</style>
