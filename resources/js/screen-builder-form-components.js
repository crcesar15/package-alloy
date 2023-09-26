import AlloyRender from "./components/AlloyRender.vue";
// import AlloyInspector from "./components/AlloyInspector.vue";

Vue.component("AlloyRender", AlloyRender);
// Vue.component("AlloyInspector", AlloyInspector);

window.ProcessMaker.EventBus.$on("screen-builder-init", (manager) => {
  const initialControls = [];

  initialControls.push({
    editorComponent: AlloyRender,
    editorBinding: "AlloyRender",
    rendererComponent: AlloyRender,
    rendererBinding: "AlloyRender",
    control: {
      label: "Alloy Verification",
      component: "AlloyRender",
      "editor-component": "AlloyRender",
      "editor-control": "AlloyRender",
      config: {
        label: "Alloy Render",
        name: "new_alloy_component",
        validation: "",
        fontSize: "1em",
        icon: "fas fa-id-card",
        helper: null,
        apiToken: null,
      },
      inspector: [
        {
          type: "FormInput",
          field: "name",
          config: {
            label: "Variable Name",
            name: "Variable Name",
            helper: "A variable name is a symbolic name to reference information.",
            validation: "regex:/^(?:[A-Z_.a-z])(?:[0-9A-Z_.a-z])*$/|required",
          },
        },
      ],
    },
  });

  for (let i = 0; i < initialControls.length; i++) {
    manager.addControl(
      initialControls[i].control,
      initialControls[i].rendererComponent,
      initialControls[i].rendererBinding,
      initialControls[i].builderComponent,
      initialControls[i].builderBinding,
    );
  }
});
