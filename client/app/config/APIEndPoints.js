/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-28 20:29:38 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-20 20:42:18
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
export const getShopInfoAPI=apiUrl+"shop/";
export const getEditShopAPI=apiUrl+"shop/";
export const createShopAPI=apiUrl+"shop-create/";
export const shopsByUserAPI=apiUrl+"shops-by-user/";
export const getShopLogoByIDApi=apiUrl+"shop-logo/";

//product
export const createProductAPI=apiUrl+"product-create/";
export const getProductImageAPI=apiUrl+"/product-galary/";
export const getProductByShopAPI=apiUrl+"product/";