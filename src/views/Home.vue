<template>
  <v-container fluid class="pa-0 front white--text" id="Home">
    <v-parallax height="1000" src="https://libreshot.com/wp-content/uploads/2016/07/programming.jpg">  
      <h1 class="text-center display-3">Hello there! <br> What's bring you here?</h1>
    </v-parallax>

    <v-layout row wrap class="pt-10" id="About">
      <v-flex xs12 md8 offset-md2>
        <v-img src="https://c1.wallpaperflare.com/preview/98/90/390/office-computer-laptop-screen.jpg">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class=" white--text mt-15 mb-15 ml-5 mr-6">I am a student of computer science on AGH university in Cracow.<br/> I am trying to become software developer</h1>
            </v-col>
          </v-row>
          <v-btn text dark router to="/about" absolute bottom right>
            <h2>More about me</h2>
        </v-btn>
        </v-img>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="pt-10" id="Projects">
      <v-flex xs12 md8 offset-md2>
        <v-col class="text-center pt-15">
          <h1 class="headline"> During my developing programming skills I made some projects.<br/> 
          Below images of final application of some of them. </h1>
          <v-btn dark text router to="/projects" class="headline">To see all projects</v-btn>
          <Carousel v-bind:projects="prepareProjectsForCarousel()">
          </Carousel>
        </v-col>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="pt-10" id="Contact">
      <v-flex xs12 md8 offset-md2>
        <v-col class="text-center pt-15">
          <h1 class="headline">If you want see my resume choose preferable language and click below button. <br/> 
          If you want contact with me <a href="mailto:radoslawszuma@gmail.com" class="text-decoration-none font-weight-bold white--text">here is email</a></h1>
          <v-btn :href="resumePL" target="_blank" dark text>PL</v-btn>|<v-btn :href="resumeENG" target="_blank" dark text>ENG</v-btn>
        </v-col>
      </v-flex>
    </v-layout>


  </v-container>
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
  name: 'Home',
  components: {
    Carousel
  },
  computed: {
        resumePL (){
          return this.$store.getters.loadedResumes['pl'];
        },
        resumeENG (){
          return this.$store.getters.loadedResumes['eng'];
        }
    },
    methods: {
      prepareProjectsForCarousel(){
          return this.$store.getters.shortenProjects;
      }
    }
}
</script>

