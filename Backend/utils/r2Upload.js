const { PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { v4: uuidv4 } = require("uuid");
const r2Client = require("../config/r2");

/**
 * Generate a presigned upload URL
 */
const generateUploadUrl = async ({
  folder,
  originalName,
  contentType,
}) => {
  const fileExtension = originalName.split(".").pop();
  const key = `${folder}/${uuidv4()}.${fileExtension}`;

  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(r2Client, command, {
    expiresIn: 60 * 5, // 5 minutes
  });

  return {
    uploadUrl,
    key,
    url: `${process.env.R2_PUBLIC_BASE_URL}/${key}`,
  };
};

module.exports = generateUploadUrl;
