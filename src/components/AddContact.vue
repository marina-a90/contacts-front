<template>
    <form @submit.prevent="handleSubmit">
    <!-- <form @submit.prevent="createContact(contact)"> // krace, direktno sa vuexa -->
        <input type="text" v-model="contact.first_name" placeholder="name"/>
        <input type="text" v-model="contact.last_name" placeholder="last name"/>
        <input type="text" v-model="contact.email" placeholder="email"/>
        <button type="submit">Add new contact</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            contact: {
                first_name: '',
                last_name: '',
                email: ''
            }
        }
    }, 

    methods: {
        ...mapActions(['createContact']),

        handleSubmit() {
            this.createContact(this.contact);
        }
    }
}
</script>

<style>

</style>
