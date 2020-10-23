# personal-page

## Introduction 

This project is my personal page. It is write with use of VueJs and Vuetify. As Database I use CloudFirestore from Firebase. This is the same place where app is hosted. 
[To see link click here](https://radoslaw-szuma.web.app/).

## Documentation

### Files short description

The source code is in src folder.

* [components](src/components) - folder with components files
  * [Carousel](src/components/Carousel.vue) - carousel component - carousel effect on supplied to component photos
  * [Hello](src/components/Hello.vue) - parallax effect on photo from main page
  * [Project](src/components/Project.vue) - description of supplied to component project
* [plugins](src/plugins/vuetify.js) - file with setting up vuetiyf library
* [router](src/router/index.js) - file with setup vue router
* [store](src/store/index.js) - file with setup Vuex store, here the data are downloaded from firestore
* [views](src/views) - folder with main pages, which you can access from navbar
  * [About](src/views/About.vue) - page with information about my life
  * [Home](src/views/Home.vue) - home page of this application
  * [Projects](src/views/Projects.vue) - page with list of projects wich I made
* [App](src/App.vue) - Template with elements which are on all pages (navbar, footer)
* [main](src/main.js) - script which initialize Vue object with run of all specified elements like router, Vue store,vuetify and dispatches function in Vue store.


### Database Scheme

Collections: 
* about 
  * summary - string - summary of life
  * technologies 
    * arr - array of strings - technologies you know 
  * learnings - websites you want show
     * profile - text on button to open this website
     * text - description about this page and what you do there
     * url - link to this page
* projects - Each project has fields: 
  * id - string
  * title - string
  * idea - string
  * imageUrl - string
  * repo - string
  * start - timestamp
  * end - timestamp
  * technologiesDescription - string
  * technologies - array of strings
  * projectType - "private"/"university"
  
### Run it local

You need to add file firebase.js and add to it firebase credidentials. File looks like this
``` js

import {initializeApp} from 'firebase';

const app = initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
})

export const db = app.firestore();
export const storage = app.storage();
```

Then run command
```
npm run serve
```






