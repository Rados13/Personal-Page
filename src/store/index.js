import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import {db,storage} from '@/firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedProjects: [],
    loadedResumes: {},
    loadedPersonal: {},
    loadedTechnologies: [],    
    loadedLearnings: {},
    loadedSummary: "",
  },
  mutations: {
    setLoadedProjects (state,payload){
      state.loadedProjects = payload;
    },
    setLoadedResumes(state,payload){
      state.loadedResumes = payload;
    },
    setLoadedPersonal(state,payload){
      state.loadedPersonal = payload;
    },
    setLoadedTechnologies(state,payload){
      state.loadedTechnologies = payload;
    },
    setLoadedLearnings(state,payload){
      state.loadedLearnings = payload;
    },
    setLoadedSummary(state,payload){
      state.loadedSummary = payload;
    }
  },
  actions: {
    loadDatabase ({commit}) {
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
      db.collection('about').doc('technologies').get().then(doc => commit('setLoadedTechnologies',doc.data()))
      db.collection('about').doc('summary').get().then(doc=> commit('setLoadedSummary',doc.data()));
      db.collection('about').doc('learnings').get().then(doc => commit('setLoadedLearnings',doc.data()));
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
      console.log(resumes);
      storage.ref('personal/IMG_20180905_162748.jpg').getDownloadURL().then(url =>{
        commit('setLoadedPersonal',url);
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
    },
    loadedPersonal(state){
      return state.loadedPersonal;
    },
    loadedTechnologies(state){
      return state.loadedTechnologies;
    },
    loadedSummary(state){
      return state.loadedSummary;
    },
    loadedLearnings(state){
      return state.loadedLearnings;
    }

  }
})
