const fs = require("fs");

const packageJsonPath = "./package.json";
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Determine the workspaces based on NODE_ENV
packageJson.workspaces =
  process.env.NODE_ENV === "production"
    ? ["microfrontend-module", "!surface-for-testing-purpose"] // Production: Exclude surface-for-testing-purpose
    : ["microfrontend-module", "surface-for-testing-purpose"]; // Development: Include both

// Write the updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Updated package.json with workspaces: ${packageJson.workspaces}`);
