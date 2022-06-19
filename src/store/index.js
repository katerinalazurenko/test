import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
  setCatalogListData(state, payload) {
    state.catalogList = payload
  },
  deleteDataFromCatalogList(state, data) {
    state.catalogList.forEach((item, i) => {
      if (item.id == data) {
        state.catalogList.splice(i, 1)
      }
    })
  },
  addDataToCatalogList(state, payload) {
    state.catalogList.push(payload)
  },
  sortDataByMinPrice(state){
    state.catalogList.sort(function(a,b) {
      return (String(a.price).match(/\d+/g)).join('') - (String(b.price).match(/\d+/g)).join('')
    })
  },
  sortDataByMaxPrice(state){
    state.catalogList.sort((a,b) =>{
      return (String(b.price).match(/\d+/g)).join('') - (String(a.price).match(/\d+/g)).join('')
    })
  },
  sortDataByName(state){
    state.catalogList.sort((a,b) =>{
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
      if(a.name.toLowerCase() == b.name.toLowerCase()) return 0
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
    })
  },
  loadingStatus(state, status){
    state.showLoader = status
  }
}

const getters = {
  getCatalogList: state => state.catalogList,
  getLoadindStatus: state => state.showLoader,
}

export default new Vuex.Store({
  state: {
    catalogList: [],
    showLoader: false
  },
  mutations,
  actions: {
    fetchData({commit}) {
      return new Promise((resolve)=>{
        commit('loadingStatus', true)
        setTimeout(()=>{
          const items = []
          for(let i=1; i<=6; i++) {
            items.push({
              img: require("../assets/img.jpg"),
              name: "Наименование товара",
              text: "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
              price: "10 000",
              id: Math.floor(Math.random()*100000)
            })
          } resolve(items)
        },2000)
      }).then(res=> {
        commit('loadingStatus', false)
        commit('setCatalogListData', res)
      })
    }
  },
  getters
})