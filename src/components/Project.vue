<template>
  <v-container class="white--text">
      <v-layout row wrap >
          <v-flex xs12 class="ma-10">
          </v-flex>
          <v-flex xs12>
              <v-card class="teal" >
                <v-card-title>
                      <h4 class="display-2 font-weight-bold white--text">{{project.title}} </h4>
                </v-card-title>
                <v-card-subtitle class="white--text font-weight-bold">
                    From {{formatedDate(project.start)}} to {{formatedDate(project.end)}}
                </v-card-subtitle>
                 <v-img 
                    :src="project.imageUrl"
                    height="400px"
                 >
                </v-img>
                <v-card-subtitle class="headline font-weight-bold white--text">
                    <h4>Idea and goal to create this app</h4>
                </v-card-subtitle>
                <v-card-text>
                    <div class="body-1 white--text">
                    {{project.idea}}
                    </div>
                </v-card-text>
                <v-card-subtitle class="headline font-weight-bold white--text">
                    <h4>Used technologies</h4>
                </v-card-subtitle>
                <v-card-text>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md4 class="pl-4 pr-4">
                            <v-list disabled>
                                <v-list-item-content >
                                    <v-list-item-group>
                                        <v-list-item v-for="item in project.technologies" :key="item">
                                            <v-list-item-title class="font-weight-bold" v-text="item"></v-list-item-title>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list-item-content>
                            </v-list>
                        </v-flex>
                        <v-flex xs12 sm6 md8 class="pa-5 d-flex justify-center">
                            <div class="body-1 white--text">
                                {{project.technologiesDescription}}<br> 
                                Documentation of project you can see on 
                                <a :href="project.repo" target="_blank" class="text-decoration-none white--text font-weight-bold">
                                    github repositorium of this project.
                                </a>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-card-text>
                <v-card-subtitle class="headline font-weight-bold white--text pt-15">
                    <h4>Screen from usage of app</h4>
                </v-card-subtitle>
                <Carousel class="pl-3 pr-3" v-bind:projects="preparePhotosOfProject()">
                </Carousel>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>

import Carousel from '@/components/Carousel'

export default {
    props: ['id'],
     components: {
        Carousel
    },
    computed: {
        project (){
            var result = this.$store.getters.loadedProject(this.id);
            result.imageUrl = result.imagesUrl[0];
            return result;
        }
    },
    methods:{
        formatedDate(time){
            var date = time.toDate();
            return (date.getDate()<10?'0':'')+date.getDate()+'-'+(date.getMonth()<9?'0':'')+(date.getMonth()+1)+'-'+date.getFullYear();
        },
        preparePhotosOfProject(){
            var prop = this.project;
            var result = [];
            var photoId =0;
            prop.imagesUrl.forEach(elem => result.push({'id': prop.id, 'imageUrl': elem}));
            return result;
        }
    }
}
</script>

<style>
</style>