<template>
     <div id="app">
    		<router-view></router-view>
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
