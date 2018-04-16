import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	//定义状态
	state:{
		indexNum :1,
		newsDetail:null,//新闻详情是个对象包含img以及文字信息
	},
	mutations:{
		clickNum(state,msg){
			state.indexNum = msg
		},
		writeNews(state,news){
			state.newsDetail = news
		}
	},
})
export default store