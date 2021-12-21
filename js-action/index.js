const core = require('@actions/core');

try {
  core.setOutput("result", true);
} catch (error) {
  core.setFailed(error.message);
}
