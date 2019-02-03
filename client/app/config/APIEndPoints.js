/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-28 20:29:38 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-02-03 12:06:37
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
export const getProductImageAPI=apiUrl+"product-galary/";
export const getProductByShopAPI=apiUrl+"product/";
export const getProductByIDAPI=apiUrl+"product-info/";
export const getSimilarProductsAPI=apiUrl+"get-similar/";
export const getAllProductsAPI=apiUrl+"product-all";

//category
export const createCategoryAPI=apiUrl+"category/";
export const getCategoryListAPI=apiUrl+"category/";

//Chat
export const getChatMessageListAPI=apiUrl+"get-message-list/";
export const initAndGetChatMessageListAPI=apiUrl+"init-chat-get-message-list/";