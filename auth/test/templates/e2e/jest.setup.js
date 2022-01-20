const global = require("./jest.globals")();
module.exports = async () => {
  console.log("AWAIT...");
  await global.awaitTestReady();
  console.log("OOOOOK....");
  await global.pause(250);
};
