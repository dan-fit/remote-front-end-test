const BASE_URL = 'http://localhost:3000/api';

export const API = {
    properties: function () {
        return fetch(`${BASE_URL}/properties`);
    },
};