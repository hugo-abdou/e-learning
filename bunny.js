const fs = require("fs");
const axios = require("axios");
require("dotenv").config();

// Replace this with your actual BunnyStream API key
async function uploadVideo(videoPath, libraryId, videoName) {
  const baseUrl = process.env.BUNNY_BASE_URL;
  const authKey = process.env.BUNNY_STREEM_API_KEY;
  try {
    const createOptions = {
      url: `${baseUrl}/library/${libraryId}/videos`,
      data: { title: videoName },
      headers: { AccessKey: authKey, "Content-Type": "application/json" },
    };
    const videoRes = await axios.post(createOptions.url, createOptions.data, {
      headers: createOptions.headers,
    });
    const videoId = videoRes.data.guid;
    const uploadOptions = {
      url: `${baseUrl}/library/${libraryId}/videos/${videoId}`,
      data: fs.createReadStream(videoPath),
      headers: {
        AccessKey: authKey,
        "Content-Type": "application/octet-stream",
      },
    };
    const res = await axios.put(uploadOptions.url, uploadOptions.data, {
      headers: uploadOptions.headers,
    });
    console.log("Upload complete:", res.data);
    process.exit(0);
  } catch (error) {
    console.error("Error uploading video:", error);
    process.exit(1);
  }
}

// Get command-line arguments
const args = process.argv.slice(2);
const libraryId = args[0];
const videoFilePath = args[1];

// Validate arguments
if (!libraryId || !videoFilePath) {
  console.error("Usage: node uploadVideo.js <libraryId> <videoFilePath>");
  process.exit(1);
}

uploadVideo(videoFilePath, libraryId, "test upload video from node");
