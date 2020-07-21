<template>
  <v-container fluid class="white--text">
    <v-layout><v-row class="pa-15"><v-col></v-col></v-row></v-layout>
    <v-layout row wrap>
      <v-flex xs12 md4 offset-md1>
        <v-img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Fagus_sylvatica_JPG2a.jpg">
        </v-img>
      </v-flex>
      <v-flex xs12 md4 offset-md1 class="d-flex align-center pb-5 pt-5 pa-2 text-center">
          <h1 class="headline">About me, how I said earlier I study Computer Science on AGH University of Science and Technology on the faculty of IET. 
            I finish second year of study. I start learning programming before University as a lot of people with C++. 
            On University on the beginning we write mainly in C/C++, and learn mostly algorithms, data structure and Maths.
            On second year come Java, Python, introduction to web development (HTML, CSS, JS, Angular), SQL, 
            functional programming in Haskell, as elective language I chose Scala. 
            If you want to see all courses 
            <a href="https://syllabuskrk.agh.edu.pl/2019-2020/pl/magnesite/study_plans/stacjonarne-informatyka"
              class="text-decoration-none white--text font-weight-bold" target="_blank">
              click here (poorly only in polish)
            </a> 
          </h1>
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
          <a href="/Projects" class="text-decoration-none font-weight-bold white--text">
            click here
          </a>
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
  data(){
    return {
      learnings:[
        {text: "For algorithmics skills I use hackerrank, to refresh some algorithms or learn new.",
         url: "https://www.hackerrank.com/radoslawszuma", profile: "My profile on hackerrank"},
        {text: "For skills with specific programming languages I learn on Exercism.",
        url: "https://exercism.io/profiles/Rados13", profile: "My profile on Exercism"},
        {text: "All projects I create are stored on github.",
        url: "https://github.com/Rados13", profile: "My profile on Github"},
        
      ]
    }
  }
}
</script>