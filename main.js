// ------------ Code of ckeditor ------------
// Get a reference to the editor element
var editorElement = [];

const editorElement0 = document.querySelector("#question0");
const editorElement1 = document.querySelector("#question1");
const editorElement2 = document.querySelector("#question2");

// Set initial data for the editor
editorElement0.innerHTML = "<p>Hello from CKEditor 5!</p>";
editorElement1.innerHTML = "<p>Hello from CKEditor 5!</p>";
editorElement2.innerHTML = "<p>Hello from CKEditor 5!</p>";

editorElement.push(editorElement0);
editorElement.push(editorElement1);
editorElement.push(editorElement2);

var data = [];

// Create a new instance of ClassicEditor
editorElement.map((element, i) => {
  ClassicEditor.create(element)
    .then((editor) => {
      console.log("Editor is ready to use!", editor);

      // Add onChange event listener
      editor.model.document.on("change:data", () => {
        data[i] = editor.getData();
        console.log("Data:", data[i]);
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
});

// ------------ Isomorphic-git ------------

// Initialize isomorphic-git with a file system
window.fs = new LightningFS("fs");
// I prefer using the Promisified version honestly
window.pfs = window.fs.promises;

console.log("Hello");

var allData = "";

async function testSecond() {
  // data.map((data, i) => {
  //   allData = allData + data + "$$$$$";
  // });
  allData = data.join("$$$$$");
  console.log(allData);
  await git.init({ fs, dir: "/tigerss" });
  console.log("init done");

  await fs.promises.writeFile("/tigerss/README.md", allData);
  await git.add({ fs, dir: "/tigerss", filepath: "README.md" });
  console.log("file adding done");

  let sha = await git.commit({
    fs,
    dir: "/tigerss",
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
    .readFile("/tigerss/README.md")
    .then(function (result) {
      console.log("" + result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

let btnTest = document.getElementById("next");
btnTest.addEventListener("click", (event) => {
  testSecond();
});
