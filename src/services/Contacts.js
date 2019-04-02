import axios from 'axios';

class Contacts {
    constructor() {
        // bekend ruta
        // ovaj fajl se mora negde importovati da bi se konstruktor desio 
        //nije dobro da se kontakti dovlace u konstruktoru
    }
    // konstruktor nam ne treba

    getAll() {
        return axios.get('http://localhost:8000/api/contacts');
        // bez return-a se poziv desi, al ne sacuva, tj. nista se zapravo ne desi
        // to bi u stvari bio promise samo
    }

    create(contact) {
        //ne mora pojedinacno da mu se salje first_name... nego ceo objecat - contact
        return axios.post('http://localhost:8000/api/contacts', 
        // {
            // ovde ocekuje da primi objekat. posto je gore contact, contact
            contact
        // }
        )
        // post slicno kao get, samo sto prosledjuje parametar
    }
}

export const contactsService = new Contacts();