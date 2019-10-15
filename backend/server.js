const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection is established succesfully");
});

const documentsRouter = require("./routes/documents");
const documentTypesRouter = require("./routes/documentTypes");

app.use("/documents", documentsRouter);
app.use("/documentTypes", documentTypesRouter);

app.listen(port, () => {
	console.log("Server is running on port");
});
