import mongoose from "mongoose";
import {uploadImage} from "../common/manageUploads";


const  uploadProductGalary=(fileArray,cb)=>{

    let returnFileLIst=[];
    let itemcount=0;

    for (let key in fileArray){
        
        let newID=mongoose.Types.ObjectId();

        uploadImage(newID,fileArray[key], (error) => {
            if (!error) {
                returnFileLIst[key]={
                    "fileId":newID,
                    "type":fileArray[key]["mimetype"]
                }
            }
            itemcount++;
            if(itemcount==fileArray.length){
                cb(null,returnFileLIst);
            }
        });
       
    }

    
    

}

export {
    uploadProductGalary
}