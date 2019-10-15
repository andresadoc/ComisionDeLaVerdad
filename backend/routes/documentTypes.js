const router = require("express").Router();
let DocumentType = require("../models/documentType.model");

//List
router.route("/").get((req, res) => {
	DocumentType.find()
		.then(documentTypes => res.json(documentTypes))
		.catch(err => res.status(400).json("Error: " + err));
});

//Create
router.route("/add").post((req, res) => {
	const title = req.body.title;

	const newDocumentType = new DocumentType({
		title
	});

	newDocumentType
		.save()
		.then(() => res.json("Document type added!"))
		.catch(err => res.status(400).json("Error: " + err));
});

//Search by Id
router.route("/:id").get((req, res) => {
	DocumentType.findById(req.params.id)
		.then(documentType => res.json(documentType))
		.catch(err => res.status(400).json("Error: " + err));
});

//Delete
router.route("/:id").delete((req, res) => {
	DocumentType.findByIdAndDelete(req.params.id)
		.then(() => res.json("Document type deleted."))
		.catch(err => res.status(400).json("Error: " + err));
});

//Update
router.route("/update/:id").post((req, res) => {
	DocumentType.findById(req.params.id)
		.then(documentType => {
			documentType.title = req.body.title;
			documentType
				.save()
				.then(() => res.json("Document type updated!"))
				.catch(err => res.status(400).json("Error: " + err));
		})
		.catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
