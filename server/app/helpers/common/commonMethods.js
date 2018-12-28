/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-28 10:20:20 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2018-12-28 10:23:27
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



export {
    _substrCount
}