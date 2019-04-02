<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="contact.first_name" placeholder="name"/>
        <input type="text" v-model="contact.last_name" placeholder="last name"/>
        <input type="text" v-model="contact.email" placeholder="email"/>
        <button type="submit">Add new contact</button>
    </form>
</template>

<script>
import { contactsService } from '@/services/Contacts.js'

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
        handleSubmit() {
            contactsService.create(this.contact);
        }
    }
}
</script>

<style>

</style>
