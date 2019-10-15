const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema(
	{
		title: { type: String, required: true, trim: true },
		subject: { type: String, required: true, trim: true },
		description: { type: String, required: true, trim: true },
		identifier: { type: String, required: true, trim: true },
		type: { type: String, required: true, trim: true },
		coverage: { type: String, required: true, trim: true },
		date: { type: Date, required: true }
	},
	{
		timestamps: true
	}
);

const Document = mongoose.model("Document", documentSchema);
module.exports = Document;
