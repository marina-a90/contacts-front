import axios from 'axios'

class Auth {

    constructor () {
        const token = localStorage.getItem('token')
        // proveravam da li imam token

        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            //ovo mi se 2 puta ponavlja, mogu ga prebaciti u metodu
        }
    }

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
            // console.log(response)
            
            //Treba postaviti token u local storage

            // vidim gde je token iz response-a
            const token = response.data.access_token
            localStorage.setItem('token', token)
            // ne gubi se token na refresh, nego samo kad ga user rucno obrise


            // i postaviti token na Authorization header
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            // dok se ne refr. str. header je nakacen na axios
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