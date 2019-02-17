import storage from '../helpers/storage';
function authHeader() {
    try {
        let user = JSON.parse(storage.getItem('user'));
        if (user && user['accessToken']) {
            return { 'Authorization': `Bearer ${user['accessToken']}`};
        }
    } catch (error) {
        console.log(error)
    }
}
function updateUser(profile) {
    try {
        let user = JSON.parse(storage.getItem('user'));
        user = Object.assign({}, user, profile);
        storage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.log(error)
    }
    return null;
}

function getUser() {
    try {
        let user = JSON.parse(storage.getItem('user'));
        return user;
    } catch (error) {
        console.log(error)
    }
    return null;
}

function isAuthenticated() {
    try {
        let user = JSON.parse(storage.getItem('user'));
        if (user && user['accessToken']) {
            return true;
        }
    } catch (error) {
        console.log(error)
    }
    return false;
}

function getAccessToken() {
    try {
        let user = JSON.parse(storage.getItem('user'));
        if (user && user['accessToken']) {
            return user['accessToken'];
        }
    } catch (error) {
        console.log(error);
    }
}

function isAdmin() {
    try {
        let user = JSON.parse(storage.getItem('user'));
        if (user && user['role'] && user['role'] === 'admin') {
            return true;
        }
    } catch (error) {
        console.log(error)
    }
    return false;
}


export const userHelper = {
    updateUser,
    getUser,
    authHeader,
    getAccessToken,
    isAdmin,
    isAuthenticated
};
