<template>
    <form @submit.prevent="handleLogin">
        <label for="email">Email:</label>
        <input type="text" name="email" v-model="email"/>
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password"/>

        <button type="submit">Log in</button>
    </form>
</template>

<script>
import {mapActions } from 'vuex'

export default {
    data () {
        return {
            password: '',
            email: ''
        }
    },
    methods: {
        ...mapActions(['login']),

        async handleLogin () {
            await this.login({
                email: this.email,
                password: this.password
            })
            this.$router.push('/contacts')
        }
    }, 

    // van metoda
    beforeRouteEnter (to, from, next) {
        // ocekuje to, from, next TIM REDOSLEDOM, iako ne koristim sve
        next(vm => {
            vm.email = 'ispis pre kreiranja rute'
            // pre nego sto udje u rutu ce da ispise kao email ...
        })
    }
}
</script>