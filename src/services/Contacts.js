import axios from 'axios';

class Contacts {
    constructor() {
        axios.get('http://localhost:8000/api/contacts');
        // bekend ruta
        // ovaj fajl se mora negde importovati da bi se konstruktor desio 
    }
}

export const contacts = new Contacts();