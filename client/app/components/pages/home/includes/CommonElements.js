import React from 'react';

import {ProductCard} from "../../products/includes/CommonElements";

const ShowProductList=({
    productList=[]
})=>{
    return(
        <div className="div100 mt-5">
            <div className="row">
                <ProductCard
                    info={productList}
                />
            </div>
        </div>    
    )
}


export {
    ShowProductList
}