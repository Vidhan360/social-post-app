import multer from "multer";
import path from "path";
import fs from "fs";

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },

  filename(req, file, cb) {
    cb(
      null,
      `${Date.now()}${path.extname(
        file.originalname
      )}`
    );
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes =
    /jpg|jpeg|png|webp/;

  const extName =
    allowedTypes.test(
      path
        .extname(
          file.originalname
        )
        .toLowerCase()
    );

  const mimeType =
    allowedTypes.test(
      file.mimetype
    );

  if (
    extName &&
    mimeType
  ) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only JPG, JPEG, PNG, WEBP allowed"
      )
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
});

export default upload;