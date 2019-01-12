import multer from "multer";

const fileUpload = multer({dest:'./tmp/'})


export {
    fileUpload
}