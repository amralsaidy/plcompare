import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/index.css'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-c.min";
import "prismjs/components/prism-cpp.min";
import "prismjs/components/prism-csharp.min";
import "prismjs/components/prism-java.min";
import "prismjs/components/prism-kotlin.min";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-javascript.min";
import "prismjs/components/prism-markup-templating.min";
import "prismjs/components/prism-php.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import Prism from "vue-prism-component";
Vue.component("prism", Prism);

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
