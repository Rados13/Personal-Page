<template>
  <v-container>
      <v-layout row wrap v-for="project in projects" :key="project.id" class="mb-2">
          <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
            <v-row class="pa-10"></v-row>  
            <h1 class="text-center">There is list of all projects I made. I divided them on two groups created for university course and create for myself.</h1>
            <v-flex class="pt-10 pb-10">
                <v-img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Farmer_meme.jpg"></v-img>
            </v-flex>
            <v-row justify="center" class="pa-10">
                <h2>Filters: <v-btn dark text>All</v-btn>|<v-btn dark text>University</v-btn>|<v-btn dark text>Private</v-btn></h2>      
            </v-row>
            <v-card class="teal">
                  <v-container fluid>
                      <v-layout row class="ml-2">
                        <v-flex xs5 sm4 md3>
                            <v-img 
                             :src="project.imageUrl"
                             height="130px"
                            >
                            </v-img>
                        </v-flex>
                        <v-flex xs7 sm8 md9> 
                            <v-card-title primary title>
                                <div>
                                    <h3 class="white--text mb-0">{{project.title}}</h3>
                                    <div>Whatever</div>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn text :to="'/projects/'+project.id">
                                    <v-icon left light>arrow_forward</v-icon>
                                    View project
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                      </v-layout>
                  </v-container>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    computed:{
        projects (){
            return this.$store.getters.loadedProjects
        }
    }    
}
</script>

<style>

</style>