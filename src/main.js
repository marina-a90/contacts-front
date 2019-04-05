import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuex from 'vuex'

import AppLogin from '@/components/AppLogin'
import AppContacts from '@/components/AppContacts'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path: '/login', 
    component: AppLogin
  }, 
  {
    path: '/', 
    redirect: '/contacts', 
    meta: {
      requiresAuth: true
    }
  }, 
  {
    path: '/contacts', 
    component: AppContacts, 
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes, 
  mode: 'history', 
  beforeEach (to, from, next) {
    // if (to.path === "/contacts") //moze ovako, mada je previse "peske" za puno ruta
    
    // console.log(to.meta)
    if (to.meta.requiresAuth && !authService.isAuthenticated) {
      next('/login')
    }
    else {
      next()
    }
  }
})


import { contactsService } from '@/services/Contacts.js'
import { authService } from '@/services/Auth.js'

const store = new Vuex.Store({
  state: {
    contacts: []
  },
  getters: {
    contacts: state => state.contacts
  },
  mutations: {
    SET_CONTACTS (state, contacts) {
      state.contacts = contacts;
    }, 

    ADD_CONTACT (state, contact) {
      state.contacts.push(contact);
    }
  }, 
  actions: {
        // moze ceo {commit} da prima a ne state pa state.commit
    async fetchContacts (context) {
      // treba da pozove metodu servisa 
      // da komituje (pozove) mutaciju
      const response = await contactsService.getAll();
      context.commit('SET_CONTACTS', response.data);
    }, 

    async createContact (context, contact) {
      const response = await contactsService.create(contact);
      // moze ovo vec gore da se doda odmah, ali nije ceo objekat, npr. nema id, 
      // pa kroz mutaciju
      context.commit('ADD_CONTACT', response.data);

      // context.commit('SET_CONTACTS', [
      //   ...context.getters.contacts;
      //   return response.data
      // ])
      // pregazim ceo niz
    },

    async login (context, credencials) {
      await authService.login(credencials)
    }, 

    logout (context) {
      authService.logout()
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
