import http from "https://unpkg.com/isomorphic-git@beta/http/web/index.js";

// Initialize isomorphic-git with a file system
window.fs = new LightningFS("fs");
// I prefer using the Promisified version honestly
window.pfs = window.fs.promises;

// ------------ Code of ckeditor ------------
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

// ------------ Start writing from here ------------
console.log("Hello");

async function testSecond() {
  console.log(data);
  await git.init({ fs, dir: "/tigers" });
  console.log("init done");

  await fs.promises.writeFile("/tigers/README.md", data);
  await git.add({ fs, dir: "/tigers", filepath: "README.md" });
  console.log("file adding done");

  let sha = await git.commit({
    fs,
    dir: "/tigers",
    author: {
      name: "Mr. test",
      email: "mrtest@example.com",
    },
    message: "Added the README.md file",
  });
  console.log(sha);
  console.log("commit done");

  // Use fsPromises.readFile() method
  // to read the file
  fs.promises
    .readFile("/tigers/README.md")
    .then(function (result) {
      console.log("" + result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

let btnTest = document.getElementById("btnTest");
btnTest.addEventListener("click", (event) => {
  testSecond();
});
