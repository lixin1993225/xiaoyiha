import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	//定义状态
	state:{
		indexNum :1,
	},
	mutations:{
		clickNum(state,msg){
			state.indexNum = msg
		}
	},
})
export default store