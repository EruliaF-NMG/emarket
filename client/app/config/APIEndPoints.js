/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-28 20:29:38 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-12 21:24:11
 */
import {apiUrl} from "./Core";

export const createUserAPI= apiUrl+"auth/register";
export const loginUserAPI= apiUrl+"oauth/token";
export const getUserInfoAPI= apiUrl+"auth/userInfo";

//profile
export const getProfileInfoByIDAPI=apiUrl+"user/";
export const editProfileInfoByIDAPI=apiUrl+"user/";
export const getProfileImageIDAPI=apiUrl+"user/profile-image/";

//Shop
export const createShopAPI=apiUrl+"shop-create/";
export const shopsByUserAPI=apiUrl+"shops-by-user/";
export const getShopLogoByIDApi=apiUrl+"shop-logo/";