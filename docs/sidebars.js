module.exports = {
  get_started: [
    { type: "doc", id: "what_is_qa_wolf" },
    { type: "doc", id: "how_it_works" },
    {
      type: "doc",
      id: "install"
    },
    {
      type: "doc",
      id: "create_a_test"
    },
    {
      type: "doc",
      id: "run_tests_locally"
    },
    { type: "doc", id: "run_tests_in_ci" }
  ],
  guides: [
    { type: "doc", id: "add_assertions" },
    { type: "doc", id: "use_custom_selectors" },
    { type: "doc", id: "change_input_values" },
    { type: "doc", id: "emulate_a_device" },
    { type: "doc", id: "use_typescript" },
    { type: "doc", id: "handle_sign_in" },
    { type: "doc", id: "wait_for_modal" },
    {
      type: "doc",
      id: "contribute"
    }
  ],
  api: [
    { type: "doc", id: "api_table_of_contents" },
    { type: "category", label: "CLI", items: [] },
    {
      type: "category",
      label: "Environment Variables",
      items: ["qaw_artifact_path"]
    },
    { type: "category", label: "Actions", items: [] },
    { type: "category", label: "Helpers", items: [] }
  ]
};
