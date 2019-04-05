<template>
    <div>
        <ul>
            <li v-for="contact in contacts" :key="contact.id">
                {{ contact.first_name }}
            </li>
        </ul>
        <div>
            <button @click="handleLogout">Log out</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    // data() {
    //     return {
    //         contacts: []
    //     }
    // }, 
    // data mi ne treba vise zbog vuex-a

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

    // async created() {
    //     try {
    //         const response = await contactsService.getAll();
    //         console.log(response);
    //         this.contacts = response.data;
    //     } catch (error) {

    //     }
    // }
    // ovo mi isto vise ne treba zbog vuex-a

    created() {
        this.fetchContacts();

        // this.$store.dispatch('fetchContacts');
        // moze i ovo da nema mapirane akcije
    },

    methods: {
        ...mapActions([
            'fetchContacts', 
            'logout' 
            // direktno bi moglo da bude pozvana na dugmetu - al zbog redirekcije ne moze
            // mora handleLogout na dugmetu
        ]), 

        handleLogout () {
            this.logout()
            this.$router.push('/login')
        }
    }, 

    computed: {
        ...mapGetters([
            'contacts'
        ])
    }
}
</script>

<style>

</style>
