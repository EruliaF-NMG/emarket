/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2019-01-14 17:02:27 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2019-01-14 17:10:45
 */


import Product from "../../models/product.model";


const create=(req,res)=>{
    let formData = req.body;
    formData["shop"] = req.currentShop._id;
}


export {
    create
}