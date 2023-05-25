import axios from 'axios';

const API_KEY = 'AIzaSyBdFaXL4Cl8EMJR2tgYgy1do2Fxkvbnnug';

async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });

    const token = response.data.idToken;
    console.log(token)
    console.log(response.data.uid)

    return token;
}

export function createUser(email, password) {
    return authenticate('signUp', email, password);

}

export function login(email, password) {
    return authenticate('signInWithPassword', email, password);

}