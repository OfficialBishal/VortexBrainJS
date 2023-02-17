// Get a reference to the editor element
const editorElement = document.querySelector("#editor");

// Set initial data for the editor
editorElement.innerHTML = "<p>Hello from CKEditor 5!</p>";
var data = "";
// Create a new instance of ClassicEditor
ClassicEditor.create(editorElement)
  .then((editor) => {
    console.log("Editor is ready to use!", editor);

    // Add onChange event listener
    editor.model.document.on("change:data", () => {
      data = editor.getData();
      console.log("Data:", data);
    });

    // Add onBlur event listener
    editor.editing.view.document.on("blur", () => {
      console.log("Blur.", editor);
    });

    // Add onFocus event listener
    editor.editing.view.document.on("focus", () => {
      console.log("Focus.", editor);
    });
  })
  .catch((error) => {
    console.error(error);
  });
