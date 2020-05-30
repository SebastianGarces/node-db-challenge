exports.seed = function (knex) {
	return knex("projects").insert([
		{
			project_name: "test1",
			completed: false,
			project_description: "this is the project description",
		},
		{
			project_name: "test2",
			completed: false,
			project_description: "this is the project description",
		},
		{
			project_name: "test3",
			completed: false,
			project_description: "this is the project description",
		},
		{
			project_name: "test4",
			completed: false,
			project_description: "this is the project description",
		},
		{
			project_name: "test5",
			completed: false,
			project_description: "this is the project description",
		},
		{
			project_name: "test6",
			completed: false,
			project_description: "this is the project description",
		},
		{
			project_name: "test7",
			completed: false,
			project_description: "this is the project description",
		},
	])
}
