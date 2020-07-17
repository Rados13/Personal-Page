<template>
    <v-container class="white--text">
        <ProjectList>
        </ProjectList>
    </v-container>
</template>

<script>

import Carousel from '@/components/Carousel'
import ProjectList from '@/components/ProjectList'

export default {
    components:{
        Carousel,
        ProjectList

    },
    computed: {
        projects (){
            return this.$store.getters.featuredProjects;
        }
    },
    methods:{
       onLoadProject(id){
           this.$router.push('/projects/'+id);
       } 
    }
}
</script>

<style scoped>
</style>
