exports.up = function (knex) {
	return knex.schema
		.createTable("projects", table => {
			table.increments()
			table.text("project_name", 128).unique().notNullable()
			table.text("project_description", 128)
			table.boolean('completed').notNullable()
		})

		.createTable("tasks", table => {
			table.increments()
			table.text("notes", 128)
			table.text("description", 128).notNullable()
			table.boolean('completed').notNullable()
			table
				.integer("project_id")
				.unsigned()
				.notNullable()
				.references("projects.id")
				.onUpdate("CASCADE")
				.onDelete("CASCADE")
		})

		.createTable("resources", table => {
			table.increments()
			table.text("name", 128).unique().notNullable()
			table.text("description", 128)
		})

		.createTable("project_resources", table => {
			table
				.integer("project_id")
				.unsigned()
				.notNullable()
				.references("projects.id")
				.onUpdate("CASCADE")
				.onDelete("CASCADE")
			table
				.integer("resource_id")
				.unsigned()
				.notNullable()
				.references("resources.id")
				.onUpdate("CASCADE")
				.onDelete("CASCADE")
		})
}

exports.down = function (knex) {
	return knex.schema
		.dropTable("project_resources")
		.dropTable("resources")
		.dropTable("tasks")
		.dropTable("projects")
}
