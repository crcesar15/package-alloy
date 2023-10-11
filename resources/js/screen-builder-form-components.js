import AlloyRender from "./components/AlloyRender.vue";
import AlloyInspector from "./components/AlloyInspector.vue";

Vue.component("AlloyRender", AlloyRender);
Vue.component("AlloyInspector", AlloyInspector);

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
        name: "new_alloy_components",
        placeholder: "",
        validation: "",
        fontSize: "1em",
        icon: "fas fa-id-card",
        alloyConfig: {
          requestId: null,
          requestBody: null,
          journey: null,
          theme: {
            primaryColor: null,
            backgroundColor: null,
            textColor: null,
          },
        },
        helper: null,
      },
      inspector: [
        {
          type: "FormInput",
          field: "name",
          config: {
            label: "Output Variable Name",
            name: "Output Variable Name",
            helper: "The alloy journey response will be stored in this variable",
            validation: "regex:/^(?:[A-Z_.a-z])(?:[0-9A-Z_.a-z])*$/|required",
          },
        },
        {
          type: "AlloyInspector",
          field: "alloyConfig", // will be as 'value' in the inspector
          config: {
            // other props for AlloyInspector
            label: "Alloy Inspector",
            name: "new_alloy_components",
          },
        },
        {
          type: "FormInput",
          field: "customCssSelector",
          config: {
            label: "CSS Selector Name",
            helper: "Use this in your custom css rules",
            validation: "regex: [-?[_a-zA-Z]+[_-a-zA-Z0-9]*]",
          },
        },
        {
          type: "FormInput",
          field: "conditionalHide",
          config: {
            label: "Visibility Rule",
            helper: "This control is hidden until this expression is true",
          },
        },
        {
          type: "DeviceVisibility",
          field: "deviceVisibility",
          config: {
            label: "Device Visibility",
            helper: "This control is hidden until this expression is true",
          },
        },
      ],
    },
  });

  for (let i = 0; i < initialControls.length; i += 1) {
    manager.addControl(
      initialControls[i].control,
      initialControls[i].rendererComponent,
      initialControls[i].rendererBinding,
      initialControls[i].builderComponent,
      initialControls[i].builderBinding,
    );
  }
});
