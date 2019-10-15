const router = require("express").Router();
let Document = require("../models/document.model");

//List
router.route("/").get((req, res) => {
	Document.find()
		.then(documents => res.json(documents))
		.catch(err => res.status(400).json("Error: " + err));
});

//Create
router.route("/add").post((req, res) => {
	const title = req.body.title;
	const subject = req.body.subject;
	const description = req.body.description;
	const identifier = req.body.identifier;
	const type = req.body.type;
	const coverage = req.body.coverage;
	const date = Date.parse(req.body.date);

	const newDocument = new Document({
		title,
		subject,
		description,
		identifier,
		type,
		coverage,
		date
	});

	newDocument
		.save()
		.then(() => res.json("Document added!"))
		.catch(err => res.status(400).json("Error: " + err));
});

//Search by Id
router.route("/:id").get((req, res) => {
	Document.findById(req.params.id)
		.then(exercise => res.json(exercise))
		.catch(err => res.status(400).json("Error: " + err));
});

//Delete
router.route("/:id").delete((req, res) => {
	Document.findByIdAndDelete(req.params.id)
		.then(() => res.json("Document deleted."))
		.catch(err => res.status(400).json("Error: " + err));
});

//Update
router.route("/update/:id").post((req, res) => {
	Document.findById(req.params.id)
		.then(document => {
			document.title = req.body.title;
			document.subject = req.body.subject;
			document.description = req.body.description;
			document.identifier = req.body.identifier;
			document.type = req.body.type;
			document.coverage = req.body.coverage;
			document.date = Date.parse(req.body.date);

			document
				.save()
				.then(() => res.json("Document updated!"))
				.catch(err => res.status(400).json("Error: " + err));
		})
		.catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
