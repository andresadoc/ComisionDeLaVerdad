const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentTypeSchema = new Schema(
	{
		title: { type: String, required: true, trim: true }
	},
	{
		timestamps: true
	}
);

const DocumentType = mongoose.model("DocumentType", documentTypeSchema);
module.exports = DocumentType;
