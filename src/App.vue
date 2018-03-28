<template>
     <div id="app">
    		<router-view></router-view>
    		<section class="tabs">
	          <ul class="tablists clearfloat">
	               <li class="tabli" v-for="tab in tablist" :key="tab.link" @click="statusChange(this)">
	               	<router-link :to="tab.link">
	               		<dl>
		               		<dt><img class="imgsize" :class="" :src="tab.imgSrcck" alt=""></dt>
		               		<dd class="tabtips">{{tab.tab}}</dd>
		               	</dl>
		               </router-link>
		          </li>
	          </ul>    			
    		</section>
     </div>
</template>

<script>
	import xiaoC from './assets/images/xiaocry_c.png';
	import newC from './assets/images/new_c.png';
	import girlC from './assets/images/girl_c.png';
	import centerC from './assets/images/center_c.png';

	import xiaonC from './assets/images/xiaocry_nc.png';
	import newnC from './assets/images/new_nc.png';
	import girlnC from './assets/images/girl_nc.png';
	import centernC from './assets/images/center_nc.png';
    export default {
      name: 'App',
      data(){
      		return {
      			tablist:[
      				{tab:'趣事',link:'/xiao',imgSrcck:xiaoC,imgSrcnck:xiaonC},
      				{tab:'趣闻',link:'/new',imgSrcck:newC,imgSrcnck:newnC},
      				{tab:'趣图',link:'/girl',imgSrcck:girlC,imgSrcnck:girlnC},
      				{tab:'趣我',link:'/center',imgSrcck:centerC,imgSrcnck:centernC}
      			]
      	     }
      },
      methods:{
      	statusChange:function(res){
      		console.log(res)
      	}
      }
    }
</script>

<style lang="stylus" scoped>
	.tabs
		position absolute;
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
</style>
