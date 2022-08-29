import axios from 'axios';
const apiUrl = 'http://localhost:3000';
const instance = axios.create({
    withCredentials: true,
    baseURL: apiUrl,
});
export async function getAll(collection) {
    return instance
        .get(`/api/${collection}`)
        .then((res) => {
        delete res.data.createdAt;
        delete res.data.updatedAt;
        return res.data;
    })
        .catch((err) => {
        console.log(err);
    });
}
export async function getOne(collection, id) {
    return instance
        .get(`/api/${collection}/${id}`)
        .then((res) => {
        return res.data;
    })
        .catch((err) => {
        console.log(err);
    });
}
export async function save(collection, data) {
    return instance
        .post(`/api/${collection}`, data)
        .then((res) => {
        return res.data;
    })
        .catch((err) => {
        console.log(err);
    });
}
export async function update(collection, id, data) {
    return instance
        .put(`/api/${collection}/${id}`, data)
        .then((res) => {
        return res.data;
    })
        .catch((err) => {
        console.log(err);
    });
}
export async function remove(collection, id) {
    return instance
        .delete(`/api/${collection}/${id}`)
        .then((res) => {
        return res.data;
    })
        .catch((err) => {
        console.log(err);
    });
}
