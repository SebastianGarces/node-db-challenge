const express = require("express")

const Projects = require("../projects/projects.model")
const Tasks = require("../tasks/tasks-model")
const Resources = require("../resources/resources-model")

const router = express.Router()

// ROUTE = /API/PROJECTS

// GET PROJECTS
router.get("/", async (req, res) => {
	try {
		const projects = await Projects.find()

		res.status(200).json(projects)
	} catch (error) {
		res.status(500).json({ errorMessage: "Error getting projects" })
	}
})

// ADD PROJECT
router.post("/", async (req, res) => {
	const project = req.body
	const projectName = req.body.project_name

	if (!projectName)
		res.status(400).json({ message: "Project name is required" })

	try {
		const newProject = await Projects.add(project)
		res.status(200).json(newProject)
	} catch (error) {
		res.status(500).json({ errorMessage: "Error creating new project" })
	}
})

// ADD NEW TASKS TO PROJECT
router.post("/:id/tasks", async (req, res) => {
	const { id } = req.params
	const task = req.body
	const { description } = req.body

	const found = await Projects.findById(id)

	if (!found) res.status(404).json({ message: "Project not found" })

	if (!description)
		res.status(400).json({ message: "Task description is required" })

	try {
		const newTask = await Tasks.add(task)
		res.status(200).json(newTask)
	} catch (error) {
		res.status(500).json({ errorMessage: "Error creating new task" })
	}
})

// GET PROJECT TASKS
router.get("/:id/tasks", async (req, res) => {
	const { id } = req.params

	const found = await Projects.findById(id)

	if (!found) res.status(404).json({ message: "Project not found" })

	try {
		const tasks = await Projects.findProjectTasks(id)
		res.status(200).json(tasks)
	} catch (error) {
		res.status(500).json({ errorMessage: "Error getting tasks" })
	}
})

module.exports = router
