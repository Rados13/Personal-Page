import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import {db,storage} from '@/firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedProjects: [],
    loadedResumes: {},
    loadedPhotos: {},
  },
  mutations: {
    setLoadedProjects (state,payload){
      state.loadedProjects = payload;
    },
    setLoadedResumes(state,payload){
      state.loadedResumes = payload;
    },
  },
  actions: {
    loadProjects ({commit}) {
      var projects;
      db.collection('projects').get().then((snapshot) => {
        projects = snapshot.docs.map(doc => doc.data());
        projects.forEach(elem => {
          storage.ref('projects/'+elem.title).listAll().then(data => {
            elem.imagesUrl = []
            data.items.forEach(ref => {ref.getDownloadURL().then(url => {
              elem.imagesUrl.push(url);
              elem.imageUrl = url;
            })});
          })  
        });
        commit('setLoadedProjects',projects);
      });
    },
    loadFiles({commit}){
      var resumes = {}
      storage.ref('resumes/').listAll().then(data => {
        data.items.forEach( ref => { ref.getDownloadURL().then(url => {
          if(url.includes('Radoslaw_Szuma_CV'))resumes.pl = url;
          else resumes.eng=url;
        });
        commit('setLoadedResumes',resumes);
        });
      })
    },
  },
  modules: {
  },
  getters:{
    loadedProjects(state){
      return state.loadedProjects.sort((a,b) =>{return b.start-a.start;});
    },
    featuredProjects(state,getters){
      return (type) => {
        return (type==="all")?getters.loadedProjects:getters.loadedProjects.filter(elem => elem.projectType===type);
      }
    },
    shortenProjects(state,getters){
      return getters.loadedProjects.slice(0,5);
    },
    loadedProject(state){
      return (id) => {
        return state.loadedProjects.find((project) => project.id===id)
      }
    },
    loadedResumes(state){
      return state.loadedResumes;
    }

  }
})
