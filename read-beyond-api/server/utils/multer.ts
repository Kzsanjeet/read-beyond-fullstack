import multer from "multer"

const uploader = multer({
    storage:multer.diskStorage({})
})

export{uploader}