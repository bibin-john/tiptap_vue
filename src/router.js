import Vue from 'vue'
import Router from 'vue-router'
import Template from './views/Template.vue'
import TemplateDetails from './views/TemplateDetails.vue'
import Editor from './views/Editor.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/template'
    },
    {
      path: '/template',
      name: 'template',
      component: Template
    },
    {
      path: '/templatedetails/:id',
      name: 'templatedetails',
      component: TemplateDetails
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    }
  ]
})
export default router
