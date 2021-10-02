const fs = require("fs");

console.log("::group::Environment variables")
for (const [key, value] of Object.entries(process.env).sort()) {
  console.log('${key} = ${value}');
}
console.log("::endgroup::");

console.log("::group::Event JSON");
const event = JSON.parse(fs.readFileSync(process.env["GITHUB_EVENT_PATH"]));
console.log(JSON.stringify(event, null, 2));
console.log("::endgroup::");
