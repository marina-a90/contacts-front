import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { contactsService } from '@/services/Contacts.js'

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
    }
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
