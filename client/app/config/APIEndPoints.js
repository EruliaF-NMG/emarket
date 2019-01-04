/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-28 20:29:38 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-03 18:42:02
 */
import {apiUrl} from "./Core";

export const createUserAPI= apiUrl+"auth/register";
export const loginUserAPI= apiUrl+"oauth/token";
export const getUserInfoAPI= apiUrl+"auth/userInfo";

export const getProfileInfoByIDAPI=apiUrl+"user/";
export const editProfileInfoByIDAPI=apiUrl+"user/";