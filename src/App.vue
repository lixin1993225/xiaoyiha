<template>
     <div id="app">
      <keep-alive> 
        <router-view></router-view>
      </keep-alive>  
    		<bottomTab></bottomTab>
     </div>
</template>

<script>
	import bottomTab from './components/bottomTab';
    export default {
      name: 'App',
      components:{
		    bottomTab
      }
    }
</script>

<style lang="stylus" scoped>
</style>
