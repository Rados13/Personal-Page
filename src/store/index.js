import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import {db} from '@/firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedProjects: [
      {imageUrl: 'https://www.fatosmorina.com/wp-content/uploads/2018/12/Coding-project-idea.jpg',id: '123', title: 'Hall Of Fame'},
      {imageUrl: 'https://i.ytimg.com/vi/II7UCUbxOus/maxresdefault.jpg',id: '12345', title: 'Another'}
    ],
  },
  mutations: {
    setLoadedProjects (state,payload){
      state.loadedProjects = payload
    }
  },
  actions: {
    loadProjects ({commit}) {
      var projects;
      db.collection('projects').get().then((snapshot) => {
        projects = snapshot.docs.map(doc => doc.data());
        console.log(projects);
        commit('setLoadedProjects',projects);
      });
    }
  },
  modules: {
  },
  getters:{
    loadedProjects(state){
      return state.loadedProjects;
    },
    featuredProjects(state,getters){
      return getters.loadedProjects.slice(0,5)
    },
    loadedProject(state){
      return (id) => {
        return state.loadedProjects.find((project) => project.id===id)
      }
    }
  }
})
