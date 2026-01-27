const path = require("path");

const getContentTypeFromKey = (key) => {
  const ext = path.extname(key).toLowerCase();

  switch (ext) {
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".pdf":
      return "application/pdf";
    default:
      return "application/octet-stream";
  }
};

module.exports = { getContentTypeFromKey };
