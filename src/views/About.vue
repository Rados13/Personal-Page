<template>
  <v-container fluid class="white--text">
    <v-layout><v-row class="pa-15"><v-col></v-col></v-row></v-layout>
    <v-layout row wrap>
      <v-flex xs12 md4 offset-md1>
        <v-img :src="photo">
        </v-img>
      </v-flex>
      <v-flex xs12 md4 offset-md1 class="d-flex align-center pb-5 pt-5 pa-2 text-center">
          <h1 class="headline">{{summary.total}}
            <a href="https://syllabuskrk.agh.edu.pl/2019-2020/pl/magnesite/study_plans/stacjonarne-informatyka"
              class="text-decoration-none white--text font-weight-bold" target="_blank">
              click here (poorly only in polish)
            </a> 
          </h1>
      </v-flex>
    </v-layout>
    

    <v-layout><v-row class="pa-15"><v-col></v-col></v-row></v-layout>

    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-list disabled>
          <v-subheader>
            Used technologies:
          </v-subheader>
          <v-list-item v-for="item in technologies.arr" :key="item">
            <v-list-item-title class="font-weight-bold" v-text="item"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
    

    <v-layout><v-row class="pa-15"><v-col></v-col></v-row></v-layout>
    
    
    <v-layout row wrap>
      <v-flex xs12 md8 offset-md2>
        <h1 class="headline text-center"> 
          During my free time I trying develop my programming skills. In diffrent ways:
        </h1>
        <br>
        <v-flex offset-md2 v-for="item in learnings" :key="item.text">
          <h1 class="headline">{{item.text}}<br> 
              <v-btn text dark :href="item.url"
                class="text-decoration-none white--text font-weight-bold" target="_blank">
                {{item.profile}}
              </v-btn>
          </h1>
          <br>
        </v-flex>
      </v-flex>
    </v-layout>
    

    <v-layout row wrap>
      <v-flex xs12 md8 offset-md2>
        <h1 class="headline text-center"> 
          <!-- Below my achievements (i.e certifcation of finishing course, place in contest). <br> -->
          To see list of my projects 
          <router-link to="/Projects" class="text-decoration-none font-weight-bold white--text">
            click here
          </router-link>
        </h1>
        <!-- <v-flex md8 offset-md2>
          <Carousel>
          </Carousel>
        </v-flex> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import Carousel from '@/components/Carousel'

export default {
  name: 'About',

  components: {
    Carousel
  },
  computed:{
    photo(){
      return this.$store.getters.loadedPersonal;
    },
    learnings(){
      return this.$store.getters.loadedLearnings;
    },
    summary(){
      return this.$store.getters.loadedSummary;
    },
    technologies(){
      return this.$store.getters.loadedTechnologies;
    }
    
  }
}
</script>