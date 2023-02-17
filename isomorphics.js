import http from "https://unpkg.com/isomorphic-git@beta/http/web/index.js";

// Initialize isomorphic-git with a file system
window.fs = new LightningFS("fs");
// I prefer using the Promisified version honestly
window.pfs = window.fs.promises;

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
