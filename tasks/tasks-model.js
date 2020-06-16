const db = require("../data/db-config")

module.exports = {
	find,
	findById,
	add,
}

async function find() {
	const tasks = await db("tasks")
	return tasks
}

async function findById(id) {
	if (!id) throw "Id is required"

	const task = await db("tasks").where({ id }).first()
	return task
}

async function add(task) {
	const [newTaskId] = await db("tasks").insert({ ...task, completed: false })
	const newTask = await findById(newTaskId)

	return newTask
}
