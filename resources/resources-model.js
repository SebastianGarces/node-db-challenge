const db = require("../data/db-config")

module.exports = {
	find,
	findById,
	add,
}

async function find() {
	const resources = await db("resources")
	return resources
}

async function findById(id) {
	if (!id) throw "Id is required"

	const resource = await db("resources").where({ id }).first()
	return resource
}

async function add(resource) {
	const [newResourceId] = await db("resources").insert(resource)
	const newResource = await findById(newResourceId)

	return newResource
}
