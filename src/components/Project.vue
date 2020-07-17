<template>
  <v-container>
      <v-layout row wrap>
          <v-flex xs12>
              <v-card>
                  <v-card-title>
                      <h4 class="primary--text">{{project.title}}</h4>
                  </v-card-title>
                 <v-img 
                    :src="project.imageUrl"
                    height="400px"
                 >
                </v-img>
                <v-card-text>
                    <div >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum praesentium eaque vel non odio. Atque pariatur doloremque et quidem, quisquam recusandae assumenda corrupti asperiores excepturi nulla, quam, adipisci maxime est?
                    </div>
                </v-card-text>
              </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        project (){
            return this.$store.getters.loadedProject(this.id)
        }
    }
}
</script>

<style>

</style>