exports.seed = function (knex) {
	return knex("resources").insert([
		{ name: "computer" },
		{ name: "conference room" },
		{ name: "microphone" },
		{ name: "headphones" },
		{ name: "desk" },
		{ name: "chair" },
		{ name: "monitor" },
	])
}
