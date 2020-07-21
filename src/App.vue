<template>
    <v-app style="background: #212121">
      <v-navigation-drawer temporary v-model="sideNav" app>
            <v-list-item v-for="item in menuItems" :key="item.title" router :to="item.link">
              <v-list-item-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                {{item.title}}
              </v-list-item-content>  

            </v-list-item>
      </v-navigation-drawer>
      
      <v-app-bar fixed dark  class="teal" app>
        <span class="hidden-sm-and-up">
          <v-app-bar-nav-icon @click="sideNav = !sideNav"></v-app-bar-nav-icon>
        </span>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">Main page</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text v-for="item in menuItems" :key="item.title" router :to="item.link">
            <v-icon left>{{item.icon}}</v-icon>
            {{item.title}}
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>

      <v-main>
        <router-view></router-view>
      </v-main>


    <v-footer dark padless class="mt-15">
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          {{ new Date().getFullYear() }} —  Radosław Szuma

          <v-spacer></v-spacer>

          <v-flex class="d-flex justify-end">
          <v-btn v-for="icon in icons" :key="icon.graphic" class="mx-4" dark icon :href="icon.url" target="_blank">
            <v-icon size="24px">{{ icon.graphic }}</v-icon>
          </v-btn>
          </v-flex>
        </v-card-title>
        
        
      </v-card>
    </v-footer>
  </v-app>


</template>

<script>
export default {
  name: 'App',
  data: () => ({
      sideNav:false,
      menuItems: [
        {icon: 'home', title: 'Home', link: '/'},
        {icon: 'fingerprint', title: 'About',link: '/About'},
        {icon: 'mdi-briefcase-variant', title: 'Projects', link: '/Projects' },
        // {icon: 'home', title: 'Resume'},
        // {icon: 'home', title: 'Contact'},
      ],
      icons: [
        {graphic: 'mdi-github', url:"https://github.com/Rados13"},
        {graphic: 'mdi-mail', url:"mailto:radoslawszuma@gmail.com"},
        {graphic: 'mdi-linkedin', url:"https://www.linkedin.com/in/radosław-szuma-9bb963172"}
        ]
  })
}
</script>
