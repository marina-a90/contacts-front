import axios from 'axios'

class Auth {
    // async login (email, password) {
    async login (credencials) {
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', 
            credencials
            // {
                // email,
                // password
                // // email: email,
                // // password: password 
                // //ocekulje kljuceve, al posto se isto zovu, mogu da skratim
            // }
            )
            console.log(response)
        }
        catch (e) {
            console.log(e)
        }
    }

    isAuthenticated () {
        //
    }
}

export const authService = new Auth()