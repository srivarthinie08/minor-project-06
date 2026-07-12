const express = require("express");
const app = express();

const postRoutes = require("./routes/postRoutes");

app.use(express.json());

app.use("/posts", postRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});