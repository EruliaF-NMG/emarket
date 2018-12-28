
import { authTokenStorageKey,authUserProfileInfoKey } from '../../config/Core';


async function setToLocalStorage(key, contentArray) {
    try {
        await localStorage.setItem(key, JSON.stringify(contentArray));
        return true;
    } catch (ex) {
        if (ex.code == 22) {
            alert("Storage is Full");
        }
        return false;
    }
}

async function getFromLocalStorage(key) {
    try {
        let data = await localStorage.getItem(key);
        return JSON.parse(data);
    } catch (ex) {
        return false;
    }
}

async function reomveFromLocalStorage(key) {
    try {
        await localStorage.removeItem(key);
        return true;
    } catch (ex) {
        return false;
    }
}

async function checkUser() {
    try {
        let data = await getFromLocalStorage(authTokenStorageKey);
        if (data) {            
            return { status: true, result: data };
        } else {
            return { status: false };
        }
    } catch (ex) {
        return { status: false };
    }
}

async function logout(){
    await reomveFromLocalStorage(authTokenStorageKey);
    await reomveFromLocalStorage(authUserProfileInfoKey);
    return true;
 }

export {
    setToLocalStorage,
    getFromLocalStorage,
    reomveFromLocalStorage,
    checkUser,
    logout
}