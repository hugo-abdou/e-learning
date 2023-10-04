const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { fork } = require("child_process");
// Create a new express application instance
const PORT = 5000;
const app = express();
// Middleware
app.use(cors());
app.use(
    fileUpload({
        tempFileDir: "temp",
        useTempFiles: true
    })
);
app.use(express.json());
// Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server started on  http://localhost:${PORT}`);
});
