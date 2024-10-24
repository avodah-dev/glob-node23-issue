const { glob } = require("glob");

console.log("Worker started\n");

function testGlob(trailingSlash) {
  const rootPath = "./static" + (trailingSlash ? "/" : "");

  glob("**/**", {
    cwd: rootPath,
    absolute: false,
    follow: true,
    nodir: true,
    dot: true,
  })
    .then((files) => {
      console.log(`With cwd '${rootPath}:`, files);
    })
    .catch((error) => {
      console.error(error);
    });
}

function runTest() {
  testGlob(true);
  testGlob(false);
}

runTest();
setInterval(() => {
  console.log("Worker still alive...");
}, 15000);
