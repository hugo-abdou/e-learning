require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

// Replace this with your actual BunnyStream API key
const bunnyApiKey = process.env.BUNNY_STREEM_API_KEY;

// Create an instance of axios with the BunnyStream API base URL and headers
const bunnyAxios = axios.create({
  baseURL: process.env.BUNNY_BASE_URL,
  headers: {
    AccessKey: bunnyApiKey,
    accept: "application/json",
  },
});

// Function to create a video entry in your library
async function createVideoEntry(libraryId) {
  try {
    const response = await bunnyAxios.post(`library/${libraryId}/videos`, {
      title: "Test Video",
    });
    return response.data;
  } catch (error) {
    console.error("Error creating video entry:", error);
    throw error;
  }
}

// Function to upload the video file to the created video entry
async function uploadVideoFile(libraryId, videoId, videoFilePath) {
  const formData = new FormData();
  //   formData.append("file", fs.createReadStream(videoFilePath));
  // create a file from the video file path

  const file = fs.(videoFilePath);

  try {
    const response = await bunnyAxios.put(
      `library/${libraryId}/videos/${videoId}`,
      file,
      {
        headers: { "content-type": "application/*+json" },
      }
    );
    return response.data;
  } catch (error) {
    // console.error("Error uploading video file:", error.response.data);
    throw error;
  }
}

// Main function to handle the video upload process
async function uploadVideoToBunnyStream(libraryId, videoFilePath) {
  try {
    // check if file exisit
    if (!fs.existsSync(videoFilePath)) {
      throw new Error("File does not exist");
      return;
    }
    // Create a new video entry
    // const videoEntry = await createVideoEntry(libraryId);
    // console.log("Video entry created:", videoEntry);
    // Upload the video file
    const videoUpload = await uploadVideoFile(
      libraryId,
      //   videoEntry.guid,
      "ec27153a-3991-4151-a420-d295dbf7e7e9",
      videoFilePath
    );
    console.log("Video uploaded successfully:", videoUpload);
    // Return the result
    // return videoUpload;
  } catch (error) {
    console.log("Video upload failed:", error);
    return null;
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

// Start the video upload process and output the result
uploadVideoToBunnyStream(libraryId, videoFilePath).then((result) => {
  if (result) {
    console.log("Upload result:", result);
    process.exit(0);
  } else {
    process.exit(1);
  }
});
