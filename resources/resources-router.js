const express = require("express")

const Projects = require("../projects/projects.model")
const Tasks = require("../tasks/tasks-model")
const Resources = require("../resources/resources-model")

const router = express.Router()

// ROUTE = /API/RESOURCES

// GET RESOURCES
router.get("/", async (req, res) => {
	try {
		const resources = await Resources.find()

		res.status(200).json(resources)
	} catch (error) {
		res.status(500).json({ errorMessage: "Error getting resources" })
	}
})

// ADD RESOURCE
router.post("/", async (req, res) => {
	const resource = req.body
	const resourceName = req.body.name

	if (!resourceName)
		res.status(400).json({ message: "Resource name is required" })

	try {
		const newResource = await Resources.add(resource)
		res.status(200).json(newResource)
	} catch (error) {
		res.status(500).json({ errorMessage: "Error creating resource" })
	}
})

module.exports = router
