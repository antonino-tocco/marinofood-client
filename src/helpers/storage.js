const hashKey = (key) => {

};

class Storage {

    getItem(key) {
        return localStorage.getItem(hashKey(key));
    }
    setItem(key, value) {
        localStorage.setItem(hashKey(key), value);
    }
}

export default new Storage();
