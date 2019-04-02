<template>
    <div>
        <ul>
            <li v-for="contact in contacts" :key="contact.id">
                {{ contact.first_name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { contactsService } from '@/services/Contacts.js'

export default {
    data() {
        return {
            contacts: []
        }
    }, 

    // prvi momenat kada mogu da stavljim podatke na data, koje inicijalno nisam imala na data
    // zbog returna u metodi mogu da radim then i catch
    // created() {
    //     contactsService.getAll()
    //         .then(response => {
    //              console.log(response);
    //              this.contacts = response.data;
    //         })
    //         .catch(error => {

    //         })
    // }

    async created() {
        try {
            const response = await contactsService.getAll();
            console.log(response);
            this.contacts = response.data;
        } catch (error) {

        }
    }
}
</script>

<style>

</style>
