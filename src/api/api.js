import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY' : 'c48e116b-8fdc-427c-bc4e-e62cc444d4bf'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow(id) {
        return instance.post(`follow/${id}`)
        .then(response => {
            return response.data;
        });
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
        .then(response => {
            return response.data;
        });
    }
};

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
        .then(response => {
            return response.data;
        });
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data;
        });
    }
};
