import axios from "axios";
import { BehaviorSubject } from 'rxjs';
const authSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user') || 'null'));
const apiUrl = 'http://localhost:3000';
const instance = axios.create({
    withCredentials: true,
    baseURL: apiUrl,
});
export function login({ email, password }) {
    return instance.post(`/api/users/login`, { email, password }, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => {
        // localStorage.setItem('token', res.data.token);
        delete res.data.user.createdAt;
        delete res.data.user.updatedAt;
        console.log('res', res);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        authSubject.next(res);
        return res.data;
    });
}
export function logout() {
    return instance.post(`/api/users/logout`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => {
        console.log('res', res);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        authSubject.next(null);
        return res.data;
    }).catch(err => {
        console.log('err', err);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        authSubject.next(null);
    });
}
export function register(email, password) {
    return instance.post(`/api/users/register`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            email,
            password,
        },
    });
}
export function unlockAccount() {
    return instance.post(`/api/users/unlock`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}
export async function getMe() {
    return instance.get(`/api/users/me`)
        .then(res => {
        return res.data;
    });
}
export function authHeader() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user && user.accessToken) {
        return { 'x-access-token': user.accessToken };
        // return { Authorization: 'Bearer ' + user.accessToken }; // return authorization header with jwt token
    }
    else {
        return {};
    }
}
export function getAuth() { return authSubject.value; }
