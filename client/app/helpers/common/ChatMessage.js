
const getCurrentUserID=(key)=>{
    if(key){
        let userList=key.split("_");
        return userList[0];
    }else{
        return null;
    }
}

export {
    getCurrentUserID
}