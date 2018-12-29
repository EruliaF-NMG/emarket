/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-28 10:20:20 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2018-12-29 07:38:57
 */


/**
 * @Author: Nisal Madusanka(EruliaF) 
 * @description Get specific character count from a string
 * @param {*} string string
 * @param {*} specificKey  sub string
 */
const _substrCount =(string,specificKey)=>{
    return string.split(specificKey).length-1;
}

const _sendResponse=(statusArray,data,overWriteStatus={})=>{
    return {
        "status":((overWriteStatus.status)?overWriteStatus.status:statusArray.status),
        "statusCode":((overWriteStatus.statusCode)?overWriteStatus.statusCode:statusArray.statusCode),
        "result":data,
        "description":((overWriteStatus.description)?overWriteStatus.description:statusArray.description)
    }
}

export {
    _substrCount,
    _sendResponse
}