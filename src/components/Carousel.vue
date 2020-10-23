<template>
    <v-container fluid class="pa-0 pt-10 front">
        <v-layout row wrap>
            <v-flex>
                <v-carousel style="cursor: pointer; max-height=500px; max-width=100%;" height="auto">
                    <v-carousel-item
                    v-for="project in projects"
                    :src="project.imageUrl"
                    :key="project.id"
                    @click="onLoadProject(project.id)">
                        <div class="title" v-if="project.title !== null">
                            <div class="text">{{project.title}}</div>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['projects'],
    methods:{
       onLoadProject(id){
           if(this.$store.getters.loadedProjects.filter(elem => elem.id === id).length !== 0){
               this.$router.push('/projects/'+id);
            }
       } 
    }
}
</script>

<style scoped>
    .title {
        background-color: rgba(0,0,0,0.3);
        color: white;
        font-size: 2em;
        padding: 20px;
        text-align: center;
    }
</style>
