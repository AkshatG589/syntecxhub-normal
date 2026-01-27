const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
const r2Client = require("../config/r2");

const deleteFromR2 = async (key) => {
  if (!key) return;

  const command = new DeleteObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
  });

  await r2Client.send(command);
};

module.exports = deleteFromR2;
