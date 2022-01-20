require("dotenv").config();
const envalid = require("envalid");

const env = envalid.cleanEnv(process.env, {
  FOOBAR: envalid.str({
    default: "foobar"
  })
});

module.exports = () => ({ ...env });
