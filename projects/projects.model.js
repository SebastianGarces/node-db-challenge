const db = require("../data/db-config")

module.exports = {
	find,
	findById,
	add,
	findProjectTasks,
}

async function find() {
	const projects = await db("projects")
	return projects
}

async function findById(id) {
	if (!id) throw "Id is required"

	const project = await db("projects").where({ id }).first()
	return project
}

async function add(project) {
	const [newProjectId] = await db("projects").insert({
		...project,
		completed: false,
	})
	const newProject = await findById(newProjectId)

	return newProject
}

async function findProjectTasks(projectId) {
	const projectTasks = await db("projects as p")
		.join("tasks as t", "p.id", "t.project_id")
		.select(
			"t.id",
			"t.description",
			"t.notes",
			"t.completed",
			"p.project_name",
			"p.project_description"
		)
		.where("p.id", projectId)

	return projectTasks
}
