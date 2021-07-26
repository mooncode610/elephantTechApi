
const multer = require('multer');

module.exports = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 50 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    },
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/jpg|jpeg|png|gif$i/)) {
            cb(new Error('File is not Supported'), false)
        }
        cb(null, true)
    }
})