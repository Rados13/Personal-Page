import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdiSvg'
    },
    theme: {
        themes:{
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                anchor: '#8c9eff',
                background: '#000'
              },
        }
    },
}

export default new Vuetify(opts)